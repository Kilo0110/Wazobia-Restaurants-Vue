const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors');
const corsOption = {
  origin: 'http://localhost:8080',
  credentials: true,
}
const connectDB = require('./config/db')
const PORT = process.env.SERVER_PORT || 5000
const path = require('path')

connectDB()

const app = express()

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/meals', require('./routes/mealRoutes'))
app.use('/api/testimonials', require('./routes/testimonialRoutes'))
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.cyan))