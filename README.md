# Express.js API Server

This project is an Express.js API server that uses middleware and routers to handle HTTP requests.

## Project Structure

- `index.js`: Entry point of the application.
- `router.js`: Defines the routes and applies middleware.
- `middlewares/toto.middleware.js`: Contains middleware functions.
- `modules/apiActions.js`: Contains route handler functions.
- `.env.sample`: Sample environment variables configuration.

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:ioayoub/WCS_0924-Express-basics.git
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file based on the `.env.sample`:
    ```sh
    cp .env.sample .env
    ```

4. Set the `APP_PORT` variable in the `.env` file:
    ```dotenv
    APP_PORT=8000
    ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```

2. The server will be running on the port specified in the `.env` file (default is 8000).

## API Endpoints

- `GET /api/get`: Returns "route GET OK".
- `POST /api/post`: Returns "route POST OK".

## Middleware

- `apiTotoMiddleware`: Logs "T'EN A PAS MARRE DE TOTO ?".
- `apiGlobalMiddleware`: Logs "MiddleWare Global".

## License

This project is licensed under the MIT License.