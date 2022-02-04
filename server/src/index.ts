import app from './app';
import connectDB from './config/db';

connectDB();

app.listen(8080, () => {
  console.log('app is running on port 8080');
});
