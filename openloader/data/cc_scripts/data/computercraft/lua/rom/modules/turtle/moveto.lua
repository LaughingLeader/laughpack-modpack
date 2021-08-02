local gox,goy,goz = 0,0,0
local cx,cy,cz = 0,0,0
local digBlocks = false --Extra parameters: whether to dig blocks or attempt to go over
local goneUp = 0 --dir and goneUp are used to keep track of position
local dir = 0
local function forward()
	while not turtle.forward() do --If turtle cannot go forward (either out of fuel or block blocking)
		print("Can't move, checking fuel")
		if turtle.getFuelLevel() == 0 then
			turtle.select(1)
			turtle.refuel(1)
		end
		if digBlocks then --If digBlocks var was true the turtle will dig thorugh the blockage otherwise will go over
			turtle.dig()
		else
			turtle.up()
			goneUp = goneUp + 1
		end
	end
	while goneUp > 0 and not turtle.detectDown() do --Make sure to compensate for going up and over blocks by going down when next possible
		turtle.down()
		goneUp = goneUp - 1
	end
end
local function up() --Same as forward, for up
	while not turtle.up() do
		print("Can't move, checking fuel")
		if turtle.getFuelLevel() == 0 then
			turtle.select(1)
			turtle.refuel(1)
		end
		if digBlocks then
			turtle.digUp()
		end
	end
end
local function down() --Same as forward, for down
	while not turtle.down() do
		print("Can't move, checking fuel")
		if turtle.getFuelLevel() == 0 then
			turtle.select(1)
			turtle.refuel(1)
		end
		if digBlocks then
			turtle.digDown()
		end
	end
end
local function getPos() --Gets the position of the turtle from local GPS towers
	print("Getting position")
	cx, cy, cz = gps.locate(10)
	print(cx, cy, cz)
end
local function getDir() --Gets the heading of the turtle by taking position, moving forward 1 and comparing the 2 positions
	print("Getting direction")
	getPos()
	local ox, oy, oz = cx, cy, cz
	forward()
	getPos()
	if oz > cz then dir = 0
	elseif oz < cz then dir = 2
	elseif ox < cx then dir = 1
	elseif ox > cx then dir = 3 end
	print(dir)
	turtle.back()
	getPos()
end
local function turn(d) --Turns to heading "d", uses getDir() to calculate how many turns are needed
	getDir()
	print("Aligning")
	print(dir, d)
	while dir ~= d do
		turtle.turnRight()
		dir = dir + 1
	if dir == 4 then dir = 0 end
end
end
local function moveX() --Combine the past functions to move along the x axis
	print("Moving X")
	getPos()
	if gox > cx then --The current and destination coordinates are compared to decide which heading is needed and distance to move
		turn(1)
		for x = 1, gox - cx do
			forward()
			cx = cx + 1
		end
	elseif gox < cx then
		turn(3)
		for x = 1, cx - gox do
			forward()
			cx = cx - 1
		end
	end
end
local function moveZ() --The same as moveX() but for the Z axis
	print("Moving Z")
	getPos()
	if goz > cz then
		turn(2)
		for z = 1, goz - cz do
			forward()
			cz = cz + 1
		end
	elseif goz < cz then
		turn(0)
		for z = 1, cz - goz do
			forward()
			cz = cz - 1
		end
	end
end
local function moveY() --The same as moveX() but for the Y axis, as the movement is vertical no turn calcuations are needed so this function is shorter
	print("Moving Y")
	getPos()
	if goy > cy then
		for z = 1, goy - cy do
			up()
			cy = cy + 1
		end
	elseif goy < cy then
		for z = 1, cy - goy do
			down()
			cy = cy - 1
		end
	end
end

return function(x,y,z,enableDigBlocks)
	digBlocks = enableDigBlocks ~= nil and enableDigBlocks or false
	rednet.open("right") --Open rednet and clear the console
	term.clear()
	term.setCursorPos(1,1)
	gox = x
	goy = y
	goz = z
	getPos()
	if goy > cy then --If the turtle has to move upwards to get to the destination if moves up first, if it needs to move down if moves down last
		moveY()
		moveX()
		moveZ()
	else
		moveX()
		moveZ()
		moveY()
	end
end