import path from 'path';

import 'dotenv/config';

export const BASE_DIR = path.dirname(path.dirname(__filename));

export const MONGODB_URI = process.env.MONGODB_URI;
