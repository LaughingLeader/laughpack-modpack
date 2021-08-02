---@class ProgramWrapper
local ProgramWrapper = {
	Active = true,
	TickRate = 10,
	Callbacks = {}
}

---@param mainLoopCallbacks function[] Functions to call during the main loop function.
function ProgramWrapper:New(mainLoopCallbacks, tickrate)
	local wrapper = {
		Active = true,
		TickRate = tickrate or 10,
		Callbacks = {}
	}
	local t = type(mainLoopCallbacks)
	if t == "table" then
		wrapper.Callbacks = mainLoopCallbacks
	elseif t == "function" then
		wrapper.Callbacks[#wrapper.Callbacks+1] = mainLoopCallbacks
	end
	setmetatable(wrapper, {
		__index = ProgramWrapper
	})
	return wrapper
end

function ProgramWrapper:KeyCancel()
	local e,key,isHeld = os.pullEvent("key")
	if key ~= nil then
		self.Active = false
	end
end

function ProgramWrapper:Main()
	for _,callback in pairs(self.Callbacks) do
		local b,err = pcall(callback, self)
		if not b then
			printError("[ProgramWrapper] Error invoking callback in Main loop:")
			printError(err)
		end
	end
	sleep(self.TickRate)
end

---@param additionalEvents function[] Additional functions to pass to parallel.waitForAny
function ProgramWrapper:Run(additionalEvents)
	local eventFunctions = {
		function() self:KeyCancel() end,
		function() self:Main() end
	}
	local t = type(additionalEvents)
	if t == "table" then
		for i=1,#additionalEvents do
			eventFunctions[#eventFunctions+1] = additionalEvents[i]
		end
	elseif t == "function" then
		eventFunctions[#eventFunctions+1] = additionalEvents
	end
	while self.Active do
		parallel.waitForAny(table.unpack(eventFunctions))
	end
end

return ProgramWrapper