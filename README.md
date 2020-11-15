https://loizenai.com/reactjs-jwt-authentication-example/

# Reactjs JWT Authentication Example

Tutorial: Reactjs JWT Token Authentication Example


 
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. So in the tutorial, I introduce how to implement an application “Reactjs JWT token Authentication Example” with details step by step and 100% running sourcecode.

– I give you an Epic of the application, a fullstack excutive flow from frontend to backend with overall architecture diagram.
– I give you a layer diagram of Reactjs JWT Application.
– I give you an implementatin of security backend sourcecode (SpringBoot + Nodejs JWT RestAPIs).
– I guide you step by step how to develop a Reactjs JWT Authentication application.
– Finally, I do an integrative testing from Reactjs JWT Authentication application to Backend Security RestAPIs

![Reactjs JWT Authentication Example](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Jwt-Authentication-Example.png)

## Overall Epic System Architecture Diagram

![Reactjs JWT Authentication Overall Diagram](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-JWT-Authentication-Overall-Diagram.png)

For the Reactjs JWT Authentication tutorial, we have 2 projects:
– Backend project (using SpringBoot or Nodejs Express) provides secured RestAPIs with JWT token.
– Reactjs project will request RestAPIs from Backend system with the JWT Token Authentication implementation.

## JWT Authentication Sequence Diagram

The diagram below show how our system handles User Registration and User Login processes:

![Reactjs Jwt Authentication Working Process Diagram](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Jwt-Authentication-Working-Process-Diagram.png)

1. User Registration Phase:
– User uses a React.js register form to post user’s info (name, username, email, role, password) to Backend API /api/auth/signup.
– Backend will check the existing users in database and save user’s signup info to database. Finally, It will return a message (successfully or fail) to

2. User Login Phase:
– User posts user/password to signin to Backend RestAPI /api/auth/signin.
– Backend will check the username/password, if it is right, Backend will create and JWT string with secret then return it to Reactjs client.

After signin, user can request secured resources from backend server by adding the JWT token in Authorization Header. For each request, backend will check the JWT signature and then returns back the resources based on user’s registered authorities.

## Reactjs JWT Authentication Layer Diagram Overview

![Reactjs JWT Authentication – Layer Diagram](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-JWT-Authentication-Layer-Diagram-final-version-2.png)

Reactjs JWT Authentication would be built with 5 main kind blocks:

- Reactjs Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
- Reactjs Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
- Reactjs Service is a bridge between Reactjs Component and Backend Server, it is used to do technical logic with Backend Server (using Ajax Engine to fetch data from Backend, or using Local Storage to save user login data) and returned a response data to React.js Components
- Local Storage allow to save key/value pairs in a web browser. It is a place to save the login user’s info.
- Axios – (an Ajax Engine) is a promise-based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.

## Project Goal

We create a Reactjs JWT Authentication project as below:

![Reactjs Jwt Authentication project structure](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Jwt-Authentication-project-structure.png)

It includes 8 components and 2 services and a router in app.js file.

– Home page:

![Home page](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Home-Page.png)

– User Register page:

![User Register page](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-Jwt-Authentication-Register-Form.png)

– Login Page:

![Login page](https://loizenai.com/wp-content/uploads/2020/11/reactjs-jwt-authentication-wrong-login-user-validation.png)

– Profile Page:

![profile page](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-jwt-authentication-sign-in-successfully.png)

– Use Page:

![User page](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-jwt-authentication-User-Page-Content.png)

– Project Manager Page:

![Project Manager Page](https://loizenai.com/wp-content/uploads/2020/11/Reatjs-jwt-authentication-login-with-a-user-with-PM-roles-successfully.png)

– Reactjs Admin page:

![Reactjs Admin page](https://loizenai.com/wp-content/uploads/2020/11/Reactjs-jwt-authentication-admin-page.png)

## Related posts

[How to Integrate Reactjs with Nodejs Tutorial](https://loizenai.com/integrate-reactjs-nodejs-tutorial/)
[Tutorial: SpringBoot + React + MongoDB – SpringBoot React.js CRUD Example](https://loizenai.com/springboot-reactjs-mongodb-crud/)
[Angular 10 + Nodejs JWT Token Based Authentication with MySQL Example – Express RestAPIs + JWT + BCryptjs + Sequelize](https://loizenai.com/angular-10-nodejs-jwt-authentication-mysql-examples-tutorials/)
