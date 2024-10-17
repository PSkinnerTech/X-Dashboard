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
    const me = await client.v2.me({ 'user.fields': ['public_metrics'] });
    console.log('User data fetched:', me);

    const followerCount = me.data.public_metrics?.followers_count || 0;
    console.log('Follower count:', followerCount);

    return NextResponse.json({ followerCount });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
  }
}
