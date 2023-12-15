const fs = require('fs');
const ExifParser = require('exif-parser');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node image-forensics.js <image-file-path>');
  process.exit(1);
}

const imagePath = args[0];

fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error(`Error reading the image file: ${err.message}`);
    process.exit(1);
  }

  const parser = ExifParser.create(data);
  const result = parser.parse();

  console.log('Image Metadata:');
  console.log(JSON.stringify(result.tags, null, 2));
});
