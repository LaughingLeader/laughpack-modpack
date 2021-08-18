/** @typedef {object} ForgeWorldServer **/

/** 
 * @typedef {object} BlockPos
 * @prop {number} x
 * @prop {number} y
 * @prop {number} z
**/

/** @typedef {object} BlockState **/

/**
 * @typedef ServerWorldForge
 * @type {object}
 * @prop {boolean} captureBlockSnapshots
 * @prop {boolean} restoringBlockSnapshots
 * @prop {number} maxEntityRadius
 * @prop {object} capturedBlockSnapshots
 * @prop {object} entities
 * @prop {object} worldServer
 * @prop {undefined} areaLoaded
 * @prop {undefined} capability
 * @prop {function} areCapsCompatible
 * @prop {() => WorldJS} asKJS Returns the world as a KubeJS world.
 * @prop {() => Void} close
 * @prop {function} getCapability
 * @prop {function} getEntities
 * @prop {function} getMaxEntityRadius
 * @prop {() => ForgeWorldServer} getWorldServer
 * @prop {function} handler$zom000$addBlockEntity
 * @prop {function} handler$zpo000$wireBlockCallback
 * @prop {function} increaseMaxEntityRadius
 * @prop {(center:BlockPos, range:number) => boolean} isAreaLoaded
 * @prop {(blockPos:BlockPos, chunk:object, blockState:BlockState, blockState2:BlockState, a:number, b:number) => Void} markAndNotifyBlock
 * @prop {(entity:Entity, keepData:boolean) => Void} removeEntity
 * @prop {(entity:Entity, keepData:boolean) => Void} removeEntityComplete
 * @prop {(player:ServerPlayerEntity, keepData:boolean) => Void} removePlayer
 */

/**
 * @typedef WorldJS
 * @type {object}
 * @prop {boolean} daytime
 * @prop {boolean} overworld
 * @prop {boolean} raining
 * @prop {boolean} thundering
 * @prop {number} localTime
 * @prop {number} seed
 * @prop {number} time
 * @prop {object} class
 * @prop {object} data
 * @prop {object} dimension
 * @prop {object} entities
 * @prop {object} gameRules
 * @prop {ServerWorldForge} minecraftWorld
 * @prop {ServerPlayerJS[]} players
 * @prop {ServerJS} server
 * @prop {object} side
 * @prop {undefined} block
 * @prop {undefined} entity
 * @prop {undefined} livingEntity
 * @prop {ServerPlayerJS|undefined} player
 * @prop {undefined} playerData
 * @prop {undefined} rainStrength
 * @prop {function} createEntity
 * @prop {function} createEntityList
 * @prop {function} createExplosion
 * @prop {function} equals
 * @prop {function} getBlock
 * @prop {function} getClass
 * @prop {function} getData
 * @prop {function} getDimension
 * @prop {function} getEntities
 * @prop {function} getEntity
 * @prop {function} getGameRules
 * @prop {function} getLivingEntity
 * @prop {function} getLocalTime
 * @prop {()=>ServerPlayerJS} getPlayer
 * @prop {function} getPlayerData
 * @prop {()=>ServerPlayerJS[]} getPlayers
 * @prop {function} getSeed
 * @prop {function} getServer
 * @prop {function} getSide
 * @prop {function} getTime
 * @prop {function} hashCode
 * @prop {function} isDaytime
 * @prop {function} isOverworld
 * @prop {function} isRaining
 * @prop {function} isThundering
 * @prop {function} notify
 * @prop {function} notifyAll
 * @prop {function} setLocalTime
 * @prop {function} setRainStrength
 * @prop {function} setTime
 * @prop {function} spawnFireworks
 * @prop {function} spawnLightning
 * @prop {function} toString
 * @prop {function} wait
**/