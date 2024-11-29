 import bcrypt from 'bcrypt';
// import { Request } from 'express';
import jwt from 'jsonwebtoken';
// // import { VendorPayload } from '../dto';
// // import { AuthPayload } from '../dto/Auth.dto';


export const GenerateSalt = async () => await bcrypt.genSalt()    



export const GeneratePassword = async (password: string, salt: string) => await bcrypt.hash(password, salt);


export const ValidatePassword = async (enteredPassword: string, savedPassword: string, salt: string) =>  await GeneratePassword(enteredPassword, salt) === savedPassword;


export const GenerateSignature = async (payload) => await  jwt.sign(payload, process.env.APP_SECRET, { expiresIn: '90d'});


export const comparePasswords = async (enteredPassword: string, savedPassword: string) =>  await bcrypt.compare(enteredPassword, savedPassword);


// export const ValidateSignature  = async(req: Request) => {

//     const signature = req.get('Authorization');

//     if(signature){
//         try {
//             const payload = await jwt.verify(signature.split(' ')[1], process.env.APP_SECRET);
//             req.user = payload;
//             return true;

//         } catch(err){
//             return false
//         } 
//     }
//     return false
// };
