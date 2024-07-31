# Profile Management Web Application

This repository contains a React-based web application for managing user profiles. It supports viewing, updating, and registering user profiles. It uses Mock Service Worker (MSW) for API mocking during development and React Query for data fetching and state management.

## Features

- **View Profile**: Display user profile information including name, email, bio, and avatar.
- **Edit Profile**: Update profile details with form validation.
- **Register Profile**: Register new user profiles with a form.
- **Loader Component**: Shows a loading spinner during data fetching.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Components](#components)
- [API Services](#api-services)
- [Mock Service Worker (MSW)](#mock-service-worker-msw)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/profile-management-app.git
   cd profile-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Development

- **Start the Development Server**: `npm start`
- **Build the Application**: `npm run build`
- **Run Tests**: `npm test`
- **Lint Code**: `npm run lint`

## Components

- **Profile**: Displays user profile details and allows for editing.
- **Register**: Provides a form for new user registration.
- **Card**: A reusable form component for profile registration and updates.
- **Loader**: A loading spinner shown during data fetching.

## API Services

- **`fetchUser`**: Fetches user profile data from the API.
- **`updateUser`**: Updates user profile data via POST request.

## Mock Service Worker (MSW)

The application uses MSW for API mocking in development.

- **Setup Worker**: Initializes MSW in development environment.
- **Handlers**: Defines mock API endpoints and responses.

### Example Handlers

- **GET /api/user**: Returns user profile data from local storage or a 401 error if not found.
- **POST /api/user**: Updates user profile data and returns the updated profile.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
