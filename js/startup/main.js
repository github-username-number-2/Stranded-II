import World from "/js/objects/World.js";
import WorldBlockMap from "/js/main/WorldBlockMap.js";
import LoadImages from "./TextureLoader.js";


LoadImages().then(LoadedImages => {
  window.LoadedBlockTextures = LoadedImages;
  World.drawFromPosition(0, 0);
});