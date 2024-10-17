# X Profile Dashboard

This project demonstrates how to use the X API (formerly Twitter API) to fetch and display your own account's profile data. It's a simple Next.js application that serves as a learning tool for developers looking to integrate the X API into their projects.

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
   git clone https://github.com/yourusername/x-profile-dashboard.git
   cd x-profile-dashboard
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

The application provides a simple interface with a button to fetch your X account's profile data. Here's how to use it:

1. Click the "Get My Profile Data" button.
2. The application will fetch your profile data from the X API.
3. Once loaded, you'll see a dashboard displaying the following information:
   - Your display name
   - Your username (handle)
   - Follower count
   - Following count
   - Tweet count
   - Number of lists you're on
   - Like count

This dashboard gives you a quick overview of your X account's key metrics.

## Understanding the X API Free Plan

This project utilizes the following endpoint from the X API Free Plan:

### User Lookup

- Endpoint: `GET /2/users/me`
- Rate Limit: 25 requests / 24 hours (PER USER)
- Fields retrieved: id, name, username, public_metrics (followers_count, following_count, tweet_count, listed_count, like_count)

## Project Structure

- `src/app/page.tsx`: The main React component that handles the UI and API requests.
- `src/app/api/getUserData/route.ts`: The API route that interacts with the X API to fetch the user data.
- `next.config.mjs`: Configuration file for Next.js, including environment variable setup.

## Learning Objectives

This project serves as a starting point for developers to:

1. Understand how to set up and use the X API with a free plan.
2. Learn about API rate limits and how to work within them.
3. Implement a simple Next.js application with API routes.
4. Handle authentication and secure API key usage in a web application.
5. Display and format user data from the X API.

## Customization and Further Development

You can extend this project by:

1. Adding error handling for rate limit exceeded scenarios.
2. Implementing caching to store the data and reduce API calls.
3. Adding more X API endpoints to fetch additional user data or tweets.
4. Creating a more comprehensive dashboard with data visualization.
5. Implementing user authentication to allow multiple users to view their own data.

## Troubleshooting

If you encounter issues:

1. Ensure your X API credentials are correct in the `.env.local` file.
2. Check the console logs in your browser's developer tools for any error messages.
3. Verify that you haven't exceeded the API rate limits.

## Resources

- [X API Documentation](https://developer.x.com/en/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
