import path from 'path';
import fs from 'fs';

import archiver from 'archiver';

const createZipFromDirectory = async (inPath: string, outPath: string) => {
  const output = fs.createWriteStream(outPath);
  const archive = archiver('zip');

  output.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  archive.directory(inPath, false);

  await archive.finalize();
};

const run = async () => {
  await createZipFromDirectory(
    path.resolve('.', 'png'),
    path.resolve('.', 'blobbee.zip')
  );
  await createZipFromDirectory(
    path.resolve('.', 'svg'),
    path.resolve('.', 'blobbee-svg.zip')
  );
};

run();
