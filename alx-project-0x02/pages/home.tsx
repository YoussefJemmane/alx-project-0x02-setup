import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { PostFormData } from '@/interfaces';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostFormData[]>([
    {
      title: "Welcome to Our Home Page",
      content: "This is the main content area where you can see various cards and interact with the application."
    },
    {
      title: "Featured Content",
      content: "Explore our dynamic components and see how Next.js works with TypeScript and Tailwind CSS."
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalSubmit = (data: PostFormData) => {
    setPosts([...posts, data]);
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Home - Next.js Project</title>
        <meta name="description" content="Home page showcasing dynamic components and user interactions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏠 Home Page
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to our home page! Here you can see dynamic content, add new posts, 
              and interact with various components.
            </p>
          </div>

          {/* Add Post Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Post
            </button>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                content={post.content}
                className="transform hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Dynamic Content Management
              </h2>
              <p className="text-gray-600 mb-6">
                This page demonstrates dynamic content management with React state. 
                You can add new posts using the modal form, and they will be displayed 
                as cards on this page.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📝 Add Posts</h3>
                  <p className="text-blue-600">Use the modal to add new content dynamically</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🎨 Responsive Design</h3>
                  <p className="text-green-600">Components adapt to different screen sizes</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">⚡ TypeScript</h3>
                  <p className="text-purple-600">Type-safe development with interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default Home;
