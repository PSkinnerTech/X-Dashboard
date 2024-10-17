import { NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
  appKey: process.env.X_API_KEY!,
  appSecret: process.env.X_API_SECRET!,
  accessToken: process.env.X_ACCESS_TOKEN!,
  accessSecret: process.env.X_ACCESS_SECRET!,
});

export async function GET() {
  try {
    console.log('Attempting to fetch user data');
    const me = await client.v2.me({
      'user.fields': ['public_metrics', 'profile_image_url', 'description']
    });
    console.log('User data fetched:', me);

    // Fetch profile banner URL using v1.1 API
    const userV1 = await client.v1.verifyCredentials();
    const profileBannerUrl = userV1.profile_banner_url;

    return NextResponse.json({ 
      data: {
        ...me.data,
        profile_banner_url: profileBannerUrl
      } 
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
  }
}
