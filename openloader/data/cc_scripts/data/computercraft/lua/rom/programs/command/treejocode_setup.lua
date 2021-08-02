local params = {...}
local height = params[1] or 20
local codesPerRad = params[2] or 20

-- Sets up the world.
commands.gamerule("commandBlockOutput", false);
commands.gamerule("logAdminCommands", false);
commands.gamerule("doDaylightCycle", false);
commands.gamerule("doWeatherCycle", false);
commands.gamerule("randomTickSpeed", 1000);
commands.time("set", 6000);

shell.setPath("/trees/")

local pathSetupStr = "if not string.find(shell.path(), \"/rom/programs/command/trees\") then\n\tlocal path = string.format(\"%s:%s\", shell.path(), \"/rom/programs/command/trees\")\n\tshell.setPath(path)\nend\n"

--Create Startup File
local s = fs.open("startup.lua", "w");
s.write(string.format("local height = %s\n", height));
s.write(string.format("local codesPerRad = %s\n", codesPerRad));
s.write(pathSetupStr);
s.write("shell.run(\"runchamber\", height, codesPerRad)\n");
s.close();
 
--Create Config File
-- local c = fs.open("config", "w");
-- c.write("height=20; --The height of the chamber structure\n");
-- c.write("codesPerRad=20; --Codes to generate per radius. 20 is recommended\n");
-- c.close();
 
if not string.find(shell.path(), "/rom/programs/command/trees") then
	local path = string.format("%s:%s", shell.path(), "/rom/programs/command/trees")
	shell.setPath(path)
end

--Create Growing Chamber
shell.run("makechamber", height, codesPerRad);