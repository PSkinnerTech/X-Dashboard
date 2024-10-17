'use client';

import { useState } from 'react';

export default function Home() {
  const [followerCount, setFollowerCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFollowerCount = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/getFollowerCount');
      const data = await response.json();

      if (response.ok) {
        setFollowerCount(data.followerCount);
      } else {
        setError(data.error || 'An error occurred');
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
        <h1 className="text-2xl font-bold mb-4">My X Follower Count</h1>
        <button
          onClick={fetchFollowerCount}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get My Follower Count'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {followerCount !== null && (
          <p className="mt-4 text-lg">
            My follower count: <span className="font-bold">{followerCount}</span>
          </p>
        )}
      </div>
    </div>
  );
}
