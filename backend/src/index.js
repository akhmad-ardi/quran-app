import 'dotenv/config';
import { createServer } from 'http';
import app from './app.js';

const httpServer = createServer(app);
const { PORT } = process.env;

httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});
