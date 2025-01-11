import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
//morphex72
// 6jzGIQYR7AJNm4O7
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
      console.log('Hello');
    });
  } catch (err) {
    console.log(err);
  }
}

main();
