import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data: PostProps[] = await response.json();
        // Limit to first 12 posts for better UX
        setPosts(data.slice(0, 12));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  // Error component
  const ErrorMessage = ({ message }: { message: string }) => (
    <div className="text-center py-12">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
        <div className="text-red-600 text-2xl mb-2">⚠️</div>
        <h3 className="text-red-800 font-semibold mb-2">Error Loading Posts</h3>
        <p className="text-red-600">{message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Posts - Next.js Project</title>
        <meta name="description" content="Browse through our collection of posts fetched from JSONPlaceholder API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📝 Posts Collection
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of posts fetched from the JSONPlaceholder API. 
              Each post is displayed using our reusable PostCard component.
            </p>
          </div>

          {/* API Info Banner */}
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="text-blue-600 text-xl">🌐</div>
              <div>
                <h3 className="font-semibold text-blue-800">API Integration</h3>
                <p className="text-blue-700 text-sm">
                  Data fetched from{' '}
                  <a 
                    href="https://jsonplaceholder.typicode.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-900"
                  >
                    JSONPlaceholder API
                  </a>{' '}
                  - A free testing API for developers
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          {loading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} />}
          
          {!loading && !error && posts.length > 0 && (
            <>
              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {posts.map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    userId={post.userId}
                  />
                ))}
              </div>

              {/* Statistics */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  📊 Statistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{posts.length}</div>
                    <div className="text-sm text-green-800">Posts Loaded</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {new Set(posts.map(p => p.userId)).size}
                    </div>
                    <div className="text-sm text-blue-800">Unique Users</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round(posts.reduce((acc, post) => acc + post.body.length, 0) / posts.length)}
                    </div>
                    <div className="text-sm text-purple-800">Avg. Characters</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Posts Found</h3>
              <p className="text-gray-500">No posts were retrieved from the API.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Posts;
