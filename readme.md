Recipe Sharing API

With The help of NodeJs, ExpressJs and MongoDB REST API for user registration and User Login and Getting Profiles of User and Recipie Management Crud APIS And Image is stored in Cloudinary to get url And JWT Based Authentication

Setup Instructions

1.Clone the repo
   git clone https://github.com/saijanipireddy/Recipie_Sharing_Platform_Swiggy
   cd Node&Express Project

2.Install dependencies
   npm install

3.Configure .env
   Create a .env file with:
    MONGO_URI=your_mongo_connection
    JWT_SECRET=your_secret_key
    CLOUDINARY_CLOUD_NAME=xxx
    CLOUDINARY_API_KEY=xxx
    CLOUDINARY_API_SECRET=xxx

4.Start the server
   npm run dev


API Endpoints 

  User Auth
  POST /register

  Request

    {
    "fullname": "sai",
    "email": "sai@example.com",
    "password": "123456",
    "confirmpassword": "123456"
    }

Response

    User registered successfully!

POST /login

Request

    {
    "email": "sai@example.com",
    "password": "123456"
    }

Response 

    {
    "token": "<JWT_TOKEN>"
    }

GET /profile (Protected)

Headers

    Authorization: Bearer <JWT_TOKEN>

Response 

    {
    "_id": "123...",
    "fullname": "sai",
    "email": "sai@gmail.com",
    "password": 123456,
    "confirmpassword": 123456
    }

Recipe CRUD

POST /recipe/add (Protected, Multipart)

Form Data 

    name: "Pizza"
    desc: "Italian classic"
    price: 15
    ingredients: "cheese", "tomato",
    image: [upload file]

Response 

    { "success": true, "message": "Recipe Added" }

GET /recipe/list

Response

    {
    "success": true,
    "data": [
        {
        "_id": "abc",
        "name": "Pizza",
        "desc": "Italian classic",
        "image": "...",
        "ingredients": "cheese", "tomato"
        }
    ]
}

PUT /recipe/update/:id 

    name: "Updated Pizza"
    desc: "Topped with olives"

Response 

    { "success": true, "message": "Recipe updated" }

DELETE /recipe/delete/:id 

Response

    { "success": true, "message": "Recipe deleted" }


Tech Stack

    Node.js + Express – REST API

    MongoDB + Mongoose – Data modeling

    JWT – Authentication

    Cloudinary – Image hosting

    Multer – File uploads

Future Enhancements

    User password reset via email

    Recipe likes, comments, and categories

    Admin dashboard

