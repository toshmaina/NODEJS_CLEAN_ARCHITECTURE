import express , { Application } from 'express';
import path from 'path';
import 'dotenv/config'
import { BranchRoutes } from '../routes/branchRoutes';
import { CarRoutes } from '../routes/carRoutes';
import { CourseRoutes } from '../routes/courseRoutes';
import { UserRoutes } from '../routes/userRoute';
import helmet from 'helmet';
import { corsOptions, helmetOptions } from '../config/allowedOrigins';
import cors from 'cors'
import { StudentsRoutes } from '../routes/studentsRoutes';
 

export default async(app: Application) => {
    app.use(cors(corsOptions))
   // app.use(helmet(helmetOptions))
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}))
      
    app.use(express.json());
 
    const imagePath = path.join(__dirname,'../images');
    
    app.use('/images', express.static(imagePath));

     app.use(BranchRoutes);

     app.use(CarRoutes);

     app.use(CourseRoutes)

     app.use(UserRoutes)

     app.use(StudentsRoutes)

     


    return app;

}

  