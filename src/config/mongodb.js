import mongoose from 'mongoose'

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}/sprintnode`)
    .then(() => console.log('MongoDB connection Succeded'))
}

export default connectDB