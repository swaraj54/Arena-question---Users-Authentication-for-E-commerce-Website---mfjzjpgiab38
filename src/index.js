const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const seedWithDummyData = require('../seeder');

dotenv.config();

//connect to DB
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

const url = process.env.DATABASE_URL || "mongodb://localhost:27017/users";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    console.log("Db connected!")
    // await seedWithDummyData();
}).catch((error) => {
    console.log(error, "- at connection of db.")
})


app.listen(3000, () => console.log('Server running..... 3000'));
