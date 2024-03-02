Next.js-Full-Stack-App is a full-stack Next.js 14 project for a blog website. It utilizes Next.js 14, App Router, Server Actions, MongoDB, and Auth.js for authentication.

## Features

- **Authentication**: Users can register, login, and logout. Additionally, authentication is supported via GitHub profiles.
- **Authorization**: Route blocks prevent unauthorized users from accessing restricted pages.
- **Admin Panel**: An admin panel is available where admins can manage posts and users. Admins have the ability to create and delete posts, as well as add or remove users.
- **Post Creation**: Admins can create posts, while regular users cannot.
- **Pages**: The website includes the following pages:
  - Homepage
  - About page
  - Contact page
  - Blog page
  - Register page
  - Login page
  - Admin page

## Technologies Used

- **Next.js 14**: The React framework used for building the application.
- **App Router**: For managing routes within the application.
- **Server Actions**: Enables server-side actions for user authentication and authorization.
- **MongoDB**: A NoSQL database used for storing application data.
- **Auth.js**: Provides authentication support, including integration with GitHub for login.
- **React**: A JavaScript library for building user interfaces.

## Usage

To run the project locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up MongoDB database configuration.
4. Run the development server with `npm run dev`.

## License

This project is licensed under the [MIT License](LICENSE).
