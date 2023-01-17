const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./Routes/userRoutes');
const sareeRouter = require('./Routes/sareeRoutes');

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.use('/', userRouter);
app.use('/sarees', sareeRouter);

mongoose.set("strictQuery", false);

const DB = process.env.URL.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB).then(() => console.log('Database Connection formed..')).catch(err => console.log('No Database Connection...'))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Database is running on ${port}`);
})