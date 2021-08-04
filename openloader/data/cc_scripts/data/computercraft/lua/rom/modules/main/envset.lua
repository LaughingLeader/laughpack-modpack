return function(target)
	for k,v in pairs(_G) do
		target[k] = v
	end
	_ENV = target
	if setfenv ~= nil then
		setfenv(1, target)
	end
end