import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Next.js Project Setup - Welcome</title>
        <meta name="description" content="Welcome to our Next.js project with TypeScript and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Welcome to Next.js!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              This is a Next.js project with TypeScript and Tailwind CSS. 
              Explore the different pages to see various components and features in action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  🚀 Getting Started
                </h2>
                <p className="text-gray-600">
                  Navigate through our pages to explore different Next.js features and components.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  💻 Technologies
                </h2>
                <ul className="text-gray-600 text-left">
                  <li>• Next.js with Pages Router</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• ESLint for code quality</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-500 text-sm">
                Visit <span className="font-mono bg-gray-100 px-2 py-1 rounded">/home</span> and{' '}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">/about</span> to see more features!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
