import BlockTextures from "/js/data/imageData/BlockTextures.js";

export default async function LoadImages() {
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