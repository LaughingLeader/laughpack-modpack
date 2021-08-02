---@class PeripheralWrapper
---@field Type string Peripheral Type
local PeripheralWrapper = {}

---@return PeripheralWrapper
function PeripheralWrapper:New(peripheralType)
	local wrapper = {}
	setmetatable(wrapper, {
		__index = function(tbl,k)
			if k == "Type" then
				return peripheralType
			end
			return function(...)
				local params = {...}
				local objects = { peripheral.find(peripheralType) }
				for i=1,#objects do
					local func = objects[i][k]
					if func and type(func) == "function" then
						local result = {pcall(func, table.unpack(params))}
						if not result[1] then
							printError("Error calling function", k, result[2])
						else
							table.remove(result, 1)
							return table.unpack(result)
						end
					else
						print(func, type(func), k)
					end
				end
			end
		end
	})
	return wrapper
end

return PeripheralWrapper