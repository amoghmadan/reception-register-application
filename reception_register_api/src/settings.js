import fs from 'fs';
import path from 'path';

import 'dotenv/config';

// Path to API directories.
export const BASE_DIR = path.dirname(__filename);
export const MEDIA_ROOT = path.join(path.dirname(BASE_DIR), 'media');

// Create folders if they do not exists. Extend array entries.
[MEDIA_ROOT].forEach((folder) => {
  !fs.existsSync(folder) && fs.mkdirSync(folder);
});

// Database connectivity URI.
export const MONGODB_URI = process.env.MONGODB_URI;

// Media Root URL
export const MEDIA_URL = '/media/';
