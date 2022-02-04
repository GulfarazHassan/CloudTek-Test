import app from './app';
import connectDB from './config/db';

connectDB();

app.listen(80, () => {
  console.log('app is running on port 8080');
});
