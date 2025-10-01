# Weather Query App

A clean and simple web application that allows users to get real-time weather information for any city in the world. This project was built to practice fundamental concepts of React and TypeScript.

**Live Demo:** [**(https://weather-query-eight.vercel.app/)**](https://weather-query-eight.vercel.app/) 

---

![App Screenshot](https://i.imgur.com/RC3IYii.png) 

## Features

- **Real-time Data:** Fetches current weather data from the [OpenWeatherMap API](https://openweathermap.org/api).
- **City Search:** Allows users to search for any city globally.
- **Key Information Display:** Shows essential weather details such as:
  - Temperature (in Celsius)
  - Humidity
  - Weather conditions (e.g., "clear sky", "scattered clouds")

## Technology Stack

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that enhances code quality and robustness.
- **[Vite](https://vitejs.dev/)**: A modern frontend build tool that provides a faster and leaner development experience.
- **HTML5 & CSS3**: For structure and styling.

## Local Development Setup

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/evangxw/weather-query.git](https://github.com/evangxw/weather-query.git)
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd weather-query
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    - Create a file named `.env.local` in the root of the project.
    - Add your OpenWeatherMap API key to this file:
      ```
      VITE_OPENWEATHER_API_KEY=your_api_key_here
      ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## License

This project is licensed under the MIT License.