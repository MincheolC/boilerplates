console.log('hello world');
import app from './app';
import { connectDB } from './utils/prisma';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
  connectDB();
});
