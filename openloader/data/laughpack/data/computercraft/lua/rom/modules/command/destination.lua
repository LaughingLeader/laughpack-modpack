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
	if #self.Rotation > 0 then
		return string.format("/execute in %s run tp %s %s %s %s %s %s", self.Dimension, username, table.unpack(self.Position), table.unpack(self.Rotation))
	else
		return string.format("/execute in %s run tp %s %s %s %s", self.Dimension, username, table.unpack(self.Position))
	end
end

return Destination