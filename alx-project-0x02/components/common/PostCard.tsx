import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  // Capitalize first letter of each word in title
  const capitalizeTitle = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };

  // Truncate content if too long
  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-sm font-semibold">
              {userId}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            User {userId}
          </div>
        </div>
        <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
          ID: {id}
        </div>
      </div>

      {/* Post Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
        {capitalizeTitle(title)}
      </h3>

      {/* Post Content */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {truncateContent(body)}
      </p>

      {/* Card Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span>{body.length} chars</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Post #{id}</span>
          </span>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-2">
          <button 
            className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
            onClick={() => alert(`Viewing post ${id} by user ${userId}`)}
          >
            View
          </button>
          <button 
            className="text-gray-500 hover:text-gray-600 text-xs font-medium transition-colors"
            onClick={() => alert(`Sharing post: "${title}"`)}
          >
            Share
          </button>
        </div>
      </div>

      {/* Visual indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-1">
          <div className="w-2 h-1 bg-blue-300 rounded-full"></div>
          <div className="w-2 h-1 bg-green-300 rounded-full"></div>
          <div className="w-2 h-1 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
