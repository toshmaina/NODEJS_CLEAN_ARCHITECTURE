import { CorsOptions } from "cors";

export const whiteList = 
	process.env.NODE_ENV === "production"
		? ["https://www.writers.com", "https://www.mySite.com"]
		: ["http://localhost:8080", "http://localhost:3000"]






		export const corsOptions = {
			origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
			  if (!origin || whiteList.indexOf(origin) !== -1) {
				// Allow requests with no origin (like mobile apps or curl requests) or if the origin is in the allowed list
				callback(null, true);
			  } else {
				callback(new Error('Not allowed by CORS'));
			  }
			},
			credentials: true, // Allow sending cookies or authentication headers with the request
		  };



export const helmetOptions = {
			// Add desired Helmet.js options here
			// For example:
			contentSecurityPolicy: {
				directives: {
				  // Add other CSP directives as needed
				  defaultSrc: ['self'],
				  frameAncestors: ['self', ...whiteList], // Allow iframes from the specified origin
				},
			  },
			
		  };