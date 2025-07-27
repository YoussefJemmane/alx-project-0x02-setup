# Next.js Project Setup and Basics

## Introduction

This repository contains a comprehensive Next.js project setup and demonstration of basic Next.js concepts. The project showcases fundamental Next.js features including routing, component creation, TypeScript integration, and Tailwind CSS styling.

## What You'll Learn

- Setting up a Next.js project with TypeScript and Tailwind CSS
- Basic routing using the Pages Router
- Creating reusable components (Cards, Buttons, Modals)
- Implementing dynamic content and user interactions
- API data fetching and display
- Component-based architecture and best practices

## Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
└── styles/
    └── globals.css
```

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## Getting Started

1. Clone this repository
2. Navigate to the `alx-project-0x02` directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev -- -p 3000
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features Implemented

- ✅ Next.js project setup with TypeScript and Tailwind CSS
- ✅ Basic routing with multiple pages
- ✅ Reusable components (Card, Button, Modal)
- ✅ Navigation and layout components
- ✅ API data fetching for posts and users
- ✅ TypeScript interfaces for type safety
- ✅ Responsive design with Tailwind CSS

## Pages Overview

### 1. **Home Page** (`/`)
- Welcome page with project overview
- Technology stack information
- Navigation to other pages

### 2. **Home Page** (`/home`)
- Dynamic content management
- Interactive card components
- Modal for adding new posts
- Demonstrates state management

### 3. **About Page** (`/about`)
- Project information and features
- Button component examples
- Different button sizes and shapes
- Technology stack details

### 4. **Posts Page** (`/posts`)
- API integration with JSONPlaceholder
- PostCard components
- Loading states and error handling
- Statistics dashboard

### 5. **Users Page** (`/users`)
- User data from external API
- UserCard components
- User profile information display

## Components Overview

### Layout Components
- **Header**: Navigation component with active link highlighting

### Common Components
- **Card**: Reusable content card with title and content props
- **Button**: Configurable button with different sizes and shapes
- **PostModal**: Modal dialog for user input with form validation
- **PostCard**: Display component for post data from API
- **UserCard**: Display component for user information

## TypeScript Interfaces

All components use TypeScript interfaces for type safety:
- `CardProps` - Card component properties
- `ButtonProps` - Button component properties
- `PostProps` - Post data structure
- `UserProps` - User data structure
- `PostModalProps` - Modal component properties

## Learning Objectives

This project demonstrates:
- Modern React development with Next.js
- Component-based architecture
- TypeScript for type safety
- API integration and data fetching
- Responsive web design principles
- Code organization and best practices
- Form handling and user interactions

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev -- -p 3000

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Browser Support

This project supports all modern browsers and is responsive across different screen sizes.

---

*This project is part of the ALX Software Engineering Program - Next.js Project Setup and Basics*
