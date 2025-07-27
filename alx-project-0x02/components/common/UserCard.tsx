import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  // Generate a color based on user ID for visual variety
  const getAvatarColor = (id: number) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-teal-500',
    ];
    return colors[id % colors.length];
  };

  // Get initials from name
  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Format website URL
  const formatWebsite = (website: string) => {
    if (!website) return '';
    return website.startsWith('http') ? website : `https://${website}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      {/* User Avatar and Basic Info */}
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-16 h-16 ${getAvatarColor(id)} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
          {getInitials(name)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </h3>
          <p className="text-purple-600 text-sm font-medium">
            @{username}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            User ID: {id}
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-3 mb-4">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <a
            href={`mailto:${email}`}
            className="text-sm text-blue-600 hover:text-blue-700 truncate"
          >
            {email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm text-gray-600">{phone}</span>
        </div>

        {/* Website */}
        {website && (
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a
              href={formatWebsite(website)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 truncate"
            >
              {website}
            </a>
          </div>
        )}

        {/* Address */}
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="text-sm text-gray-600">
            <div>{address.street}, {address.suite}</div>
            <div>{address.city}, {address.zipcode}</div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-sm font-medium text-gray-700">{company.name}</span>
        </div>
        <p className="text-xs text-gray-500 italic">
          "{company.catchPhrase}"
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {company.bs}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          className="flex-1 bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => alert(`Viewing profile of ${name} (@${username})`)}
        >
          View Profile
        </button>
        <button
          className="flex-1 bg-gray-100 text-gray-700 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-200 transition-colors"
          onClick={() => window.open(`mailto:${email}`, '_blank')}
        >
          Send Email
        </button>
      </div>

      {/* Visual indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-1">
          <div className="w-2 h-1 bg-purple-300 rounded-full"></div>
          <div className="w-2 h-1 bg-blue-300 rounded-full"></div>
          <div className="w-2 h-1 bg-green-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
