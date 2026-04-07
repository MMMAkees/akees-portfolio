const pkg = require('jimp');
const Jimp = pkg.Jimp || pkg.default || pkg;

async function removeBackground() {
  try {
    // using the newly copied true clean logo "logo.png" which has a pure white background
    const imagePath = 'public\\images\\logo.png';
    const outputPath = 'public\\images\\logo.png';
    
    console.log('Loading image...');
    let image;
    if (typeof Jimp.read === 'function') {
      image = await Jimp.read(imagePath);
    } else if (typeof pkg.read === 'function') {
      image = await pkg.read(imagePath);
    } else {
      throw new Error('Could not find read function');
    }
    
    console.log('Processing pixels for pure white background...');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very close to white (allow some anti-aliasing artifact tolerance)
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // Set Alpha to 0
      } else if (red > 220 && green > 220 && blue > 220) {
        // Semi-transparent for anti-aliased edge pixels
        const alpha = Math.max(0, 255 - ((red + green + blue - 660) * 2));
        this.bitmap.data[idx + 3] = alpha; 
      }
    }); // we can also crop it if there is too much padding
    
    console.log('Autocropping...');
    if (typeof image.autocrop === 'function') {
      image.autocrop();
    }
    
    console.log('Saving image...');
    if (typeof image.writeAsync === 'function') {
      await image.writeAsync(outputPath);
    } else {
      await new Promise((resolve, reject) => {
        image.write(outputPath, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

removeBackground();
