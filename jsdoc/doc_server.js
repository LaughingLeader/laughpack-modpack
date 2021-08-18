/**
 * @typedef ServerJS
 * @type {object}
 * @prop {boolean} dedicated
 * @prop {boolean} hardcore
 * @prop {boolean} running
 * @prop {boolean} singlePlayer
 * @prop {object} class
 * @prop {object} data
 * @prop {object} displayName
 * @prop {object} entities
 * @prop {MinecraftServerJS} minecraftServer
 * @prop {object} motd
 * @prop {object} name
 * @prop {WorldJS} overworld
 * @prop {ServerPlayerJS[]} players
 * @prop {WorldJS[]} worlds
 * @prop {undefined} advancement
 * @prop {undefined|ServerPlayerJS} player
 * @prop {undefined} statusMessage
 * @prop {undefined|WorldJS} world
 * @prop {function} equals
 * @prop {function} getAdvancement
 * @prop {function} getClass
 * @prop {function} getData
 * @prop {function} getDisplayName
 * @prop {function} getEntities
 * @prop {function} getHardcore
 * @prop {function():MinecraftServerJS} getMinecraftServer
 * @prop {function} getMotd
 * @prop {function} getName
 * @prop {function} getOverworld
 * @prop {function} getPlayer
 * @prop {function} getPlayers
 * @prop {function} getLevel
 * @prop {function} getWorlds
 * @prop {function} hashCode
 * @prop {function} isDedicated
 * @prop {function} isRunning
 * @prop {function} isSinglePlayer
 * @prop {function} notify
 * @prop {function} notifyAll
 * @prop {function} release
 * @prop {(command:string|string[]) => Void} runCommand
 * @prop {(command:string|string[]) => Void} runCommandSilent Run a command without making it visible in the chat.
 * @prop {function} schedule
 * @prop {function} scheduleInTicks
 * @prop {function} sendDataToAll
 * @prop {function} setMotd
 * @prop {function} setStatusMessage
 * @prop {function} stop
 * @prop {function} tell
 * @prop {function} toString
 * @prop {function} updateWorldList
 * @prop {function} wait
**/

/**
 * @typedef MinecraftServerJS
 * @type {object}
 * @prop {object} class
 * @prop {object} dataPackRegistries
 * @prop {object} difficultyLast
 * @prop {object} difficultyUpdatePos
 * @prop {object} difficultyUpdateWorld
 * @prop {object} serverModName
 * @prop {object} serverResourcesKJS
 * @prop {undefined} crashNextTick
 * @prop {undefined} difficultyAsync
 * @prop {undefined} tickTime
 * @prop {function} close
 * @prop {function} equals
 * @prop {function} execute
 * @prop {function} forgeGetWorldMap
 * @prop {function} getClass
 * @prop {function} getDataPackRegistries
 * @prop {function} getDifficultyAsync
 * @prop {function} getServerModName
 * @prop {function} getServerResourcesKJS
 * @prop {function} getTickTime
 * @prop {function} hashCode
 * @prop {function} markWorldsDirty
 * @prop {function} notify
 * @prop {function} notifyAll
 * @prop {function} setCrashNextTick
 * @prop {function} toString
 * @prop {function} wait
**/

/**
 * @typedef CommandSource
 * @type {object}
 * @prop {function():Entity[]} func_197010_l
 * @prop {function():string[]} func_197011_j getOnlinePlayerNames()
 * @prop {function():Array} func_197012_k levels()
 * @prop {function():TextComponent} func_197019_b getDisplayName()
 * @prop {function():string} func_197037_c getTextName()
 * @prop {function(TextComponent,boolean):Void} func_197030_a sendSuccess​(ITextComponent p_197030_1_, boolean p_197030_2_)
 * @prop {function(TextComponent,boolean):Void} func_197033_a sendFailure​(ITextComponent p_197021_1_)
 * @prop {function():ServerPlayerEntity} func_197022_f getEntity()
 * @prop {function():ServerPlayerEntity} func_197027_g getEntityOrException()
 * @prop {function():ServerPlayerEntity} func_197035_h getPlayerOrException()
 * @prop {function():Vector3D} func_197036_d getPosition()
 * @prop {function():IntegratedServer} func_197028_i
 * @prop {function():CommandSource} func_197031_a
 * @prop {function():ServerLevel} func_197023_e
 * @prop {function():java.util.stream.ReferencePipeline} func_199612_m
 * @prop {function():ISuggestionProvider.Coordinates} func_217293_r
 * @prop {function():ISuggestionProvider.Coordinates} func_217294_q
 * @prop {function():Vector2f} func_201004_i getRotation()
 * @prop {function():Dimension[]} func_230390_p_
 * @prop {function():DynamicRegistries} func_241861_q
 * @prop {function():unknown} func_197009_a
 * @prop {function():unknown} func_197021_a
 * @prop {function():unknown} func_197024_a
 * @prop {function():unknown} func_197026_b
 * @prop {function():unknown} func_197029_a
 * @prop {function():unknown} func_197030_a
 * @prop {function():object} func_201008_k getAnchor() FEET?
 * @prop {function():EmptyList} func_211270_p getAllTeams()?
**/