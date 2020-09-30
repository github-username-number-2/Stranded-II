import TextureData from "/js/data/imageData/TextureData.js";
import BlockData from "/js/data/BlockData.js";

const blockWidth = BlockData.blockWidth,
  blockHeight = BlockData.blockHeight;

const quality = TextureData.quality;
delete TextureData.quality;

const imageFormat = TextureData.imageFormat;
delete TextureData.imageFormat;

export default async function LoadImages() {
  canvasLoader.width = blockWidth * quality;
  canvasLoader.height = blockHeight * quality;

  const BlockTextures = {};
  for (const key in TextureData) {
    const yPixels = TextureData[key].length;

    TextureData[key].forEach((yArray, yIndex) => {
      const xPixels = yArray.length;

      yArray.forEach((pixel, xIndex) => {
        if (pixel) {
          ctxLoader.fillStyle = pixel;
          ctxLoader.fillRect(
            blockWidth / xPixels * xIndex * quality,
            blockHeight / yPixels * yIndex * quality,
            blockWidth / xPixels * quality,
            blockHeight / yPixels * quality,
          );
        }
      });
    });

    BlockTextures[key] = canvasLoader.toDataURL(imageFormat);
  }

  const LoadedBlockTextures = {};
  for (const key in BlockTextures) {
    LoadedBlockTextures[key] = new Image();
    
    await new Promise(resolve => {
      LoadedBlockTextures[key].onload = resolve;
      LoadedBlockTextures[key].src = BlockTextures[key];
    });
  }

  return LoadedBlockTextures;
}