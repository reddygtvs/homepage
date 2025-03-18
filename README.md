# Tushar's Personal Homepage

This repository contains the source code for my personal website and blog, showcasing my portfolio, projects, and web development blog posts.

## Features

- Responsive design that works well on all devices
- MDX-powered blog with syntax highlighting
- Project portfolio with links and descriptions
- Emphasis on clean UI
- Built with React, TypeScript and Tailwind CSS

## Technology Stack

- React 18 with TypeScript
- React Router v6
- Tailwind CSS
- MDX for blog content
- Vite for fast builds
- Vitest and React Testing Library for testing
- Deployed on Cloudflare Pages

## Project Structure

```
src/
├── assets/        # Static assets (images, icons, pdfs)
├── blogs/         # MDX blog posts
├── components/    # Reusable UI components
├── features/      # Feature-based modules for blog and projects
├── lib/           # Utility functions
├── styles/        # Global styles
└── test/          # Test utilities
```

## Development

### Prerequisites

- Node.js 18 or higher
- npm 8 or higher

### Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/reddygtvs/homepage.git
   cd homepage
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The site will be available at http://localhost:5173.

### Available Scripts

- `npm start` - Runs the development server
- `npm test` - Runs tests in watch mode
- `npm run build` - Builds the application for production
- `npm run serve` - Previews the production build

## Adding Blog Posts

The blog uses MDX files with frontmatter. To add a new post:

1. Create a new .mdx file in the src/blogs directory
2. Add frontmatter with title, date, description, and slug
3. Write your content using markdown

Example:

```
---
title: "Building an Accessible Autocomplete Component"
date: "2023-12-15"
description: "A step-by-step guide to creating an accessible autocomplete component in React"
slug: "accessible-autocomplete-component"
---
```

## Testing

Run tests with:

```
npm test
```

For coverage reports:

```
npm run test:coverage
```

## Deployment

For deployment:

1. Build the application:

   ```
   npm run build
   ```

2. The static build files can then be manually deployed to any hosting service of your choice (like Cloudflare Pages, Vercel, Netlify, etc.).
