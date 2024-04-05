import * as fs from 'fs';
import * as path from 'path';

import output from './src/index.js';

const filename = 'output';
const dest = path.join('./bin', filename);

fs.writeFileSync(dest, output);