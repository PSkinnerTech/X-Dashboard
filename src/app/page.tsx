'use client';

import { useState } from 'react';
import Image from 'next/image';

interface UserData {
  id: string;
  name: string;
  username: string;
  profile_image_url: string;
  profile_banner_url?: string;
  description?: string;
  public_metrics: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
  };
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/getUserData');
      const result = await response.json();
      console.log('Fetched data:', result);

      if (response.ok && result.data) {
        setUserData(result.data);
        console.log('Set userData:', result.data);
      } else {
        setError(result.error || 'An error occurred');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-gray-600">My X Profile Data</h1>
        <button
          onClick={fetchUserData}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get My Profile Data'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {userData && (
          <div className="mt-4">
            {userData.profile_banner_url && (
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={userData.profile_banner_url}
                  alt="Profile Banner"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            )}
            <div className="flex items-center mb-4">
              <Image
                src={userData.profile_image_url.replace('_normal', '')}
                alt="Profile Picture"
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-bold text-black">{userData.name}</p>
                <p className="text-gray-300">@{userData.username}</p>
              </div>
            </div>
            {userData.description && (
              <p className="text-gray-600 mb-4">{userData.description}</p>
            )}
            <ul className="mt-2 space-y-1 text-gray-500">
              <li>Followers: <span className="font-bold">{userData.public_metrics.followers_count}</span></li>
              <li>Following: <span className="font-bold">{userData.public_metrics.following_count}</span></li>
              <li>Tweets: <span className="font-bold">{userData.public_metrics.tweet_count}</span></li>
              <li>Listed: <span className="font-bold">{userData.public_metrics.listed_count}</span></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
