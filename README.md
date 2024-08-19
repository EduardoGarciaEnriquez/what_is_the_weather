# Weather Forecast App

This project allows users to forecast the weather by submitting a city name or postal code. It provides detailed information on weather conditions, temperature, and wind speed.

## Features

- **Weather Forecast**: Get real-time weather information for any location.
- **Temperature**: View current temperature in Celsius.
- **Wind Speed**: Check wind speed in meters per second.

## Project Structure

The project is built using **Vite**, **React**, and **TypeScript**, and includes several key features:

- **Testing**: Implemented using **Vitest** and **React Testing Library**.
- **Environment Variables**: Manage sensitive data with environment variables.
- **Linting**: Ensured code quality with **ESLint**.

### Directory Structure

- public/
- src/
  - assets/
  - components/
    - ComponentName/
      - index.tsx
      - index.test.tsx
      - style.css
  - hooks/
    - useHookName.ts
    - useHookName.test.ts
  - styles/
- config files (ts, vite, eslint, jest)
- .gitignore
- index.html
- package.json
- github/workflows/deploy.yml
- .env

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your API key:
   ```env
   VITE_API_KEY=YOUR_API_KEY
   ```

## Scripts

- **Start the development server**: `npm run dev`
- **Build the project**: `npm run build`
- **Lint the code**: `npm run lint`
- **Preview the built project**: `npm run preview`
- **Run tests**: `npm run test`
- **Run tests with coverage**: `npm run coverage`

## Configuration

The ESLint configuration is set up to include React-specific rules and TypeScript support. You can customize the ESLint settings in `eslint.config.js` according to your needs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
