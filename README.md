# Weather API Application

## Student Information
- **Name:** Karina Tulegenova  
- **Course:** Web Technologies 2 (Backend)  
- **Assignment:** Creating a Weather API App using Node.js  


## Introduction

This project is a Weather API application developed using Node.js and Express.  
The application fetches real-time weather data from an external API, processes the data on the server side, and provides RESTful endpoints for client applications.

The project follows clean code practices, object-oriented programming (OOP), and SOLID design principles.


## Technologies Used

- **Node.js** – JavaScript runtime environment  
- **Express.js** – Backend framework  
- **Axios** – HTTP client for external API requests  
- **OpenWeatherMap API** – Real-time weather data source  
- **Nodemailer** – Email service using SMTP  
- **node-cron** – Task scheduling  
- **dotenv** – Environment variable management  
- **JSON files** – Server-side data storage (no database)  


## Project Structure

<img width="212" height="509" alt="image" src="https://github.com/user-attachments/assets/f749edcb-f493-4b33-88ac-998ccef8ce39" />


## Weather API Integration

The application uses the **OpenWeatherMap API** to retrieve real-time weather data.

The following weather parameters are processed and returned:
- City name and country code  
- Geographic coordinates (latitude and longitude)  
- Temperature and feels-like temperature  
- Weather description and icon  
- Humidity and atmospheric pressure  
- Wind speed  
- Rain volume for the last 3 hours (if available)  

All data processing logic is implemented on the server side.


## RESTful API Endpoints

### Weather Endpoints

- **GET /api/weather**  
  Returns weather data for all favorite cities.

- **GET /api/weather/:city**  
  Returns weather data for a specific city.

- **POST /api/weather**  
  Adds a new city to the favorites list.

- **PUT /api/weather/:city**  
  Updates the order of cities in the favorites list.

- **DELETE /api/weather/:city**  
  Removes a city from the favorites list.

Favorite cities are stored in a server-side JSON file.


### User Endpoints

- **GET /api/users**  
  Returns all registered users.

- **POST /api/users**  
  Adds a new user with email and city.

## Middleware Logging

A custom Express middleware logs all incoming HTTP requests.  
The following information is logged:
- HTTP method  
- Request URL  
- Timestamp  
- Client IP address  

Logs are displayed in the console and written to `logs/requests.log`.


## Email Notifications

Email notifications are implemented using **Nodemailer** and **SMTP**.

Emails are scheduled using **cron jobs** at the following times:
- 09:00 – Morning weather update  
- 13:00 – Afternoon weather update  
- 20:00 – Evening weather update  
- 22:00 – Weather forecast for the next day  

Personalized recommendations are included:
- Cold weather – dress warmly  
- Warm weather – wear light clothing  
- Rainy weather – take an umbrella  


## Client Demonstration

A simple HTML page is provided in the `public` folder.  
It contains basic buttons and forms to demonstrate API endpoints.

No CSS or client-side logic is used, as required by the assignment.

## Conclusion

This Weather API application successfully meets all requirements of Assignment 2.
It demonstrates real-time API integration, RESTful service design, middleware usage, scheduled tasks, and clean backend architecture using Node.js.
