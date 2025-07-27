import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: React.FC = () => {
  const handleButtonClick = (buttonType: string) => {
    alert(`You clicked the ${buttonType} button!`);
  };

  return (
    <>
      <Head>
        <title>About - Next.js Project</title>
        <meta name="description" content="Learn more about our Next.js project and its features" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📋 About This Project
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about our Next.js project, its features, and the technologies we've implemented.
            </p>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              🚀 Project Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  What We Built
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Next.js application with Pages Router</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for responsive design</li>
                  <li>• Reusable React components</li>
                  <li>• Dynamic content management</li>
                  <li>• API integration for external data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Interactive card components</li>
                  <li>• Modal dialogs for user input</li>
                  <li>• Navigation between pages</li>
                  <li>• Button components with variants</li>
                  <li>• Post and user data display</li>
                  <li>• Responsive mobile design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Button Examples */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              🎨 Button Component Examples
            </h2>
            <p className="text-gray-600 mb-6">
              Our reusable Button component supports different sizes and shapes. 
              Here are some examples:
            </p>

            {/* Button Size Examples */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Different Sizes
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  size="small"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('small')}
                >
                  Small Button
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('medium')}
                >
                  Medium Button
                </Button>
                <Button
                  size="large"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('large')}
                >
                  Large Button
                </Button>
              </div>
            </div>

            {/* Button Shape Examples */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Different Shapes
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  size="medium"
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('rounded-sm')}
                >
                  Sharp Corners
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('rounded-md')}
                >
                  Medium Rounded
                </Button>
                <Button
                  size="medium"
                  shape="rounded-full"
                  onClick={() => handleButtonClick('rounded-full')}
                >
                  Fully Rounded
                </Button>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              🛠️ Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">⚛️</div>
                <h3 className="font-semibold text-blue-800">Next.js</h3>
                <p className="text-sm text-blue-600">React framework for production</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">📘</div>
                <h3 className="font-semibold text-blue-800">TypeScript</h3>
                <p className="text-sm text-blue-600">Type-safe JavaScript</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold text-cyan-800">Tailwind CSS</h3>
                <p className="text-sm text-cyan-600">Utility-first CSS framework</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-green-800">ESLint</h3>
                <p className="text-sm text-green-600">Code linting and formatting</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Explore More?
              </h2>
              <p className="mb-6 opacity-90">
                Check out our other pages to see more components and features in action!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="medium"
                  shape="rounded-md"
                  onClick={() => window.location.href = '/home'}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Visit Home Page
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  onClick={() => window.location.href = '/posts'}
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  View Posts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
