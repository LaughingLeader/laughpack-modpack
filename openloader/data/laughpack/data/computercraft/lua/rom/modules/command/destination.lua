---@class Destination
---@field Name string
---@field Position number[]
---@field Rotation number[]
---@field Dimension string
local Destination = {}

---@return Destination
function Destination:New(name, position, rotation, dimension)
	local data = {
		Name = name,
		Position = position or {},
		Rotation = rotation or {},
		Dimension = dimension or "minecraft:overworld"
	}
	setmetatable(data, {
		__index = Destination
	})
	return data
end

function Destination:GetTeleportCommand(username)
	local x,y,z = table.unpack(self.Position)
	if #self.Rotation > 0 then
		local rx,rz = table.unpack(self.Rotation)
		return string.format("/execute in %s run tp %s %s %s %s %s %s", self.Dimension, username, x,y,z, rx or 0, rz or 0)
	else
		return string.format("/execute in %s run tp %s %s %s %s", self.Dimension, username, x,y,z)
	end
end

return Destination