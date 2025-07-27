import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
  error?: string;
}

const Users: React.FC<UsersPageProps> = ({ users, error }) => {

  // Loading component
const ErrorMessage = ({ message }: { message: string }) => (
    <div className="text-center py-12">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
        <div className="text-red-600 text-2xl mb-2">⚠️</div>
        <h3 className="text-red-800 font-semibold mb-2">Error Loading Users</h3>
        <p className="text-red-600">{message}</p>
      </div>
    </div>
  );
return (
    <>
      <Head>
        <title>Users - Next.js Project</title>
        <meta name="description" content="Browse through our user directory fetched from JSONPlaceholder API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              👥 Users Directory
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our community members! Browse through user profiles fetched from the JSONPlaceholder API. 
              Each user is displayed using our custom UserCard component.
            </p>
          </div>

          {/* API Info Banner */}
          <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="text-purple-600 text-xl">🌐</div>
              <div>
                <h3 className="font-semibold text-purple-800">User Data Source</h3>
                <p className="text-purple-700 text-sm">
                  User information fetched from{' '}
                  <a 
                    href="https://jsonplaceholder.typicode.com/users" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-purple-900"
                  >
                    JSONPlaceholder Users API
                  </a>{' '}
                  - Sample user data for testing and development
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          {(!error && users.length > 0) ? (
            <>
              {/* Users Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {users.map((user) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    address={user.address}
                    phone={user.phone}
                    website={user.website}
                    company={user.company}
                  />
                ))}
              </div>

              {/* Statistics */}
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  📊 User Statistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{users.length}</div>
                    <div className="text-sm text-purple-800">Total Users</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {new Set(users.map(u => u.address.city)).size}
                    </div>
                    <div className="text-sm text-blue-800">Cities</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {users.filter(u => u.website).length}
                    </div>
                    <div className="text-sm text-green-800">Have Websites</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {new Set(users.map(u => u.company.name)).size}
                    </div>
                    <div className="text-sm text-orange-800">Companies</div>
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  🎉 Fun Facts About Our Users
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">📧 Email Domains</h3>
                    <p className="text-sm opacity-90">
                      Most common domain: {
                        users.reduce((acc, user) => {
                          const domain = user.email.split('@')[1];
                          acc[domain] = (acc[domain] || 0) + 1;
                          return acc;
                        }, {} as Record<string, number>){" "}&& Object.entries(
                          users.reduce((acc, user) => {
                            const domain = user.email.split('@')[1];
                            acc[domain] = (acc[domain] || 0) + 1;
                            return acc;
                          }, {} as Record<string, number>){" "}.sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'
                    }
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🏢 Company Catchphrases</h3>
                  <p className="text-sm opacity-90">
                    Each user's company has a unique catchphrase that describes their business philosophy!
                  </p>
                </div>
              </div>
            </div>
          </>
          ) : (
            <ErrorMessage message={error || 'No users to display'} />
          )}
        </div>
      </main>
    </>
);
};

// Static site generation with getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      return {
        props: {
          users: [],
          error: 'Failed to fetch users'
        }
      };
    }
    
    const users: UserProps[] = await response.json();
    
    return {
      props: {
        users
      },
      // Enable ISR - revalidate every 60 seconds
      revalidate: 60
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    
    return {
      props: {
        users: [],
        error: 'Failed to fetch users'
      }
    };
  }
};

export default Users;
