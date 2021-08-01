/**
 * @typedef ServerJS
 * @type {Object}
 * @property {boolean} dedicated
 * @property {boolean} hardcore
 * @property {boolean} running
 * @property {boolean} singlePlayer
 * @property {object} class
 * @property {object} data
 * @property {object} displayName
 * @property {object} entities
 * @property {MinecraftServerJS} minecraftServer
 * @property {object} motd
 * @property {object} name
 * @property {WorldJS} overworld
 * @property {ServerPlayerJS[]} players
 * @property {WorldJS[]} worlds
 * @property {undefined} advancement
 * @property {undefined|ServerPlayerJS} player
 * @property {undefined} statusMessage
 * @property {undefined|WorldJS} world
 * @property {function} equals
 * @property {function} getAdvancement
 * @property {function} getClass
 * @property {function} getData
 * @property {function} getDisplayName
 * @property {function} getEntities
 * @property {function} getHardcore
 * @property {function():MinecraftServerJS} getMinecraftServer
 * @property {function} getMotd
 * @property {function} getName
 * @property {function} getOverworld
 * @property {function} getPlayer
 * @property {function} getPlayers
 * @property {function} getLevel
 * @property {function} getWorlds
 * @property {function} hashCode
 * @property {function} isDedicated
 * @property {function} isRunning
 * @property {function} isSinglePlayer
 * @property {function} notify
 * @property {function} notifyAll
 * @property {function} release
 * @property {function(string|string[])} runCommand
 * @property {function} runCommandSilent
 * @property {function} schedule
 * @property {function} scheduleInTicks
 * @property {function} sendDataToAll
 * @property {function} setMotd
 * @property {function} setStatusMessage
 * @property {function} stop
 * @property {function} tell
 * @property {function} toString
 * @property {function} updateWorldList
 * @property {function} wait
**/

/**
 * @typedef MinecraftServerJS
 * @type {Object}
 * @property {object} class
 * @property {object} dataPackRegistries
 * @property {object} difficultyLast
 * @property {object} difficultyUpdatePos
 * @property {object} difficultyUpdateWorld
 * @property {object} serverModName
 * @property {object} serverResourcesKJS
 * @property {undefined} crashNextTick
 * @property {undefined} difficultyAsync
 * @property {undefined} tickTime
 * @property {function} close
 * @property {function} equals
 * @property {function} execute
 * @property {function} forgeGetWorldMap
 * @property {function} getClass
 * @property {function} getDataPackRegistries
 * @property {function} getDifficultyAsync
 * @property {function} getServerModName
 * @property {function} getServerResourcesKJS
 * @property {function} getTickTime
 * @property {function} hashCode
 * @property {function} markWorldsDirty
 * @property {function} notify
 * @property {function} notifyAll
 * @property {function} setCrashNextTick
 * @property {function} toString
 * @property {function} wait
**/

/**
 * @typedef CommandSource
 * @type {Object}
 * @property {function():Entity[]} func_197010_l
 * @property {function():string[]} func_197011_j getOnlinePlayerNames()
 * @property {function():Array} func_197012_k levels()
 * @property {function():TextComponent} func_197019_b getDisplayName()
 * @property {function():string} func_197037_c getTextName()
 * @property {function(TextComponent,boolean):Void} func_197030_a sendSuccess​(ITextComponent p_197030_1_, boolean p_197030_2_)
 * @property {function(TextComponent,boolean):Void} func_197033_a sendFailure​(ITextComponent p_197021_1_)
 * @property {function():ServerPlayerEntity} func_197022_f getEntity()
 * @property {function():ServerPlayerEntity} func_197027_g getEntityOrException()
 * @property {function():ServerPlayerEntity} func_197035_h getPlayerOrException()
 * @property {function():Vector3D} func_197036_d getPosition()
 * @property {function():IntegratedServer} func_197028_i
 * @property {function():CommandSource} func_197031_a
 * @property {function():ServerLevel} func_197023_e
 * @property {function():java.util.stream.ReferencePipeline} func_199612_m
 * @property {function():ISuggestionProvider.Coordinates} func_217293_r
 * @property {function():ISuggestionProvider.Coordinates} func_217294_q
 * @property {function():Vector2f} func_201004_i getRotation()
 * @property {function():Dimension[]} func_230390_p_
 * @property {function():DynamicRegistries} func_241861_q
 * @property {function():unknown} func_197009_a
 * @property {function():unknown} func_197021_a
 * @property {function():unknown} func_197024_a
 * @property {function():unknown} func_197026_b
 * @property {function():unknown} func_197029_a
 * @property {function():unknown} func_197030_a
 * @property {function():object} func_201008_k getAnchor() FEET?
 * @property {function():EmptyList} func_211270_p getAllTeams()?
**/