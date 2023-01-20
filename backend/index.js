const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRouter = require('./Routes/userRoutes');
const westernEthinicRouter = require('./Routes/westernEthinicRoutes');
const mensRouter = require('./Routes/mensRoutes');
const kidsRouter = require('./Routes/kidsRoutes');
const westernTopRouter = require('./Routes/westernTopRoutes');
const watchesRouter = require('./Routes/watchesRoutes')
const sampleRouter = require('./Routes/sampleRoutes');
const cartRouter = require('./Routes/cartRoutes');

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.use('/', userRouter);
app.use('/westernEthinic', westernEthinicRouter);
app.use('/mens', mensRouter);
app.use('/kids', kidsRouter);
app.use('/westernTop', westernTopRouter);
app.use('/watches', watchesRouter);
app.use('/sample', sampleRouter);
app.use('/cart', cartRouter);

mongoose.set("strictQuery", false);

const DB = process.env.URL.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB).then(() => console.log('Database Connection formed..')).catch(err => console.log('No Database Connection...'))

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Database is running on ${port}`);
})