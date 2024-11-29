 
import mongoose from 'mongoose'; 
import 'dotenv/config'
import { promisesWrapper  } from '../utilites/HandleErrors';

export default async() => {
 const MONGO_URI = process.env.MONGO_URI;
 const {error } =  await promisesWrapper(mongoose.connect(MONGO_URI))
Array.isArray(error) && !error?.[0] && console.log("Connected to MongoDB Database") 
        
}
  
  
 
