# Star Wars Starships Backend

This is the backend component for the Star Wars Starships React App. It is built with Express.js and serves as the server-side logic for the application.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js `v20.11.0` : [Download Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:
    
    `git clone https://github.com/Commarokel1965/swapi-backend.git`
    
2. Navigate to the project directory:
    
    `cd swapi-backend`
    
3. Install dependencies:
    
    `npm install`
    

## Configuration

The backend requires configuration for connecting to the SWAPI (Star Wars API) and serving requests. Create a `.env` file in the root directory and add the following:


```
SWAPI_URL=swapi.dev
EXPRESS_PORT=5000 # Specify the port for the backend server 
```

## Running the Server

Start the Express.js server:

`node server.js`

## API Endpoints

The backend provides the following API endpoints:

- **GET /api/starships**
    - Fetches a list of Star Wars starships.
    - Parameters:
        - `page` (optional): Page number for pagination.
        - `search` (optional): Search term for filtering starships.

## Testing

To run tests:

`npm test`