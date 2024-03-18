

import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

// 🏚️ Default Route
// This is the Default Route of the API
app.get('/', async (req: Request, res: Response) => {
    res.json({ message: 'Hello from Express Prisma Boilerplate!' });
});

// Create new user
// This is the Route for creating a new user via POST Method
app.post('/users', async (req: Request, res: Response) => {
    //get name and email from the request body
   
});

// Get single user
// This is the Route for getting a single user via GET Method
app.get('/users/:id', async (req: Request, res: Response) => {
   
});

// Get all users
// This is the Route for getting all users via GET Method
app.get('/users', async (req: Request, res: Response) => {
  
});

// Update user with id
// This is the Route for updating a user via Patch Method
app.patch('/users/:id', async (req: Request, res: Response) => {
 
});

// Delete user with id
// This is the Route for deleting a user via DELETE Method
app.delete('/users/:id', async (req: Request, res: Response) => {

});

app.listen(4000, () => {
    console.log('Express server is running on port 4000');
});
