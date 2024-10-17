# X Profile Data Fetcher

This project demonstrates how to use the X API (formerly Twitter API) to fetch profile data, including follower count, profile image, and banner image of your own account. It's a simple Next.js application that serves as a learning tool for developers looking to integrate the X API into their projects.

## Prerequisites

Before you begin, ensure you have the following:

1. Node.js installed on your machine
2. A X Developer account (you can sign up at [https://developer.x.com](https://developer.x.com))
3. Basic (free) plan access to the X API
4. An app created in the X Developer Portal with the following credentials:
   - API Key
   - API Secret
   - Access Token
   - Access Secret

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/x-profile-data-fetcher.git
   cd x-profile-data-fetcher
   ```

2. Install dependencies:
   ```
   bun install
   ```
   Note: This project uses Bun, but you can also use npm, yarn, or pnpm if you prefer.

3. Create a `.env.local` file in the root directory and add your X API credentials:
   ```
   X_API_KEY=your_api_key
   X_API_SECRET=your_api_secret
   X_ACCESS_TOKEN=your_access_token
   X_ACCESS_SECRET=your_access_secret
   ```

4. Start the development server:
   ```
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

The application provides a simple interface with a button to fetch your X account's profile data. Click the "Get My Profile Data" button to retrieve and display the following information:

- Profile image
- Banner image (if available)
- Username and display name
- Follower count
- Following count
- Tweet count
- Listed count
- Like count

## Understanding the X API Free Plan

This project utilizes the following endpoints from the X API Free Plan:

### Users Lookup

- Endpoint: `GET /2/users/me`
- Rate Limit: 25 requests / 24 hours (PER USER)
- No tweet cap or special attributes

### Profile Images and Banners

The profile image and banner image URLs are obtained through the Users Lookup endpoint. However, due to limitations in the v2 API, we use a combination of v2 and v1.1 endpoints to fetch all the required data:

- v2 API: Used to fetch most user data, including the profile image URL.
- v1.1 API: Used to fetch the profile banner URL, which is not directly available in v2.

## Project Structure

- `src/app/page.tsx`: The main React component that handles the UI and API requests.
- `src/app/api/getUserData/route.ts`: The API route that interacts with the X API to fetch user data.
- `next.config.mjs`: Configuration file for Next.js, including environment variable setup and image domain configuration.

## Learning Objectives

This project serves as a starting point for developers to:

1. Understand how to set up and use the X API with a free plan.
2. Learn about API rate limits and how to work within them.
3. Implement a simple Next.js application with API routes.
4. Handle authentication and secure API key usage in a web application.
5. Work with both v2 and v1.1 X API endpoints to fetch comprehensive user data.
6. Display and style profile images and banner images in a web application.

## Further Development

You can extend this project by:

- Adding more X API endpoints to fetch additional user data.
- Implementing tweet posting functionality.
- Creating a more comprehensive dashboard for X account statistics.
- Adding error handling and loading states for a better user experience.

## Resources

- [X API Documentation](https://developer.x.com/en/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
