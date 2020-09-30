import World from "/js/objects/World.js";
import LoadImages from "./TextureLoader.js";

import WorldBlockMap from "/js/main/WorldBlockMap.js";
console.log(WorldBlockMap)
LoadImages().then(LoadedImages => {
  window.LoadedBlockTextures = LoadedImages;
  World.drawFromPosition(0, 0);
});