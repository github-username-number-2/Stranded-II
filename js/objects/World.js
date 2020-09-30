import WorldData from "/js/data/WorldData.js";
import BlockData from "/js/data/BlockData.js";

import WorldBlockMap from "/js/main/WorldBlockMap.js";
WorldBlockMap["i"]="dssdsd"
const blockWidth = BlockData.blockWidth,
  blockHeight = BlockData.blockHeight;

const worldOffsetX = WorldData.xOffset,
  worldOffsetY = WorldData.yOffset;

const World = {
  blockMap: null,
  
  drawFromPosition(xOffset, yOffset) {
    for (let xIndex = 0, xLength = WorldData.screenWidth; xIndex < xLength; xIndex++) {
      for (let yIndex = 0, yLength = WorldData.screenHeight; yIndex < yLength; yIndex++) {
        ctx.drawImage(
          LoadedBlockTextures.grass,
          blockWidth * xIndex - xOffset * blockWidth + worldOffsetX,
          blockHeight * yIndex - yOffset * blockHeight + worldOffsetY,
          blockWidth,
          blockHeight,
        );
      }
    }
  },
};

export default World;