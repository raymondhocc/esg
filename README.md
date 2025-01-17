# ESG Analysis Dashboard

This is a React-based ESG (Environmental, Social, and Governance) Analysis Dashboard built with Vite, TypeScript, and TailwindCSS.

## Prerequisites

Before deploying the application, make sure you have the following installed:

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

1. Create a production build:
```bash
npm run build
```

This will generate a `dist` folder containing the optimized production build.

2. Preview the production build locally:
```bash
npm run preview
```

## Deployment Options

### 1. Static Hosting (Recommended)

The application can be deployed to any static hosting service. Here are some popular options:

#### Vercel (Recommended)
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

#### Netlify
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

#### GitHub Pages
1. Add `base` to your `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Create a deployment script in `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run build
npm run deploy
```

### 2. Docker Deployment

1. Create a Dockerfile:
```dockerfile
FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. Build and run the Docker container:
```bash
docker build -t esg-dashboard .
docker run -p 80:80 esg-dashboard
```

## Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
VITE_API_URL=your_api_url_here
```

## Additional Configuration

### TailwindCSS

TailwindCSS configuration is in `tailwind.config.js`. Modify this file to customize:
- Theme
- Colors
- Typography
- Plugins

### TypeScript

TypeScript configuration is in `tsconfig.json`. Adjust compiler options as needed.

## Troubleshooting

1. If nothing displays:
   - Check if all dependencies are installed
   - Verify that the development server is running
   - Check browser console for errors
   - Clear browser cache and reload

2. Build failures:
   - Ensure all TypeScript types are properly defined
   - Check for lint errors: `npm run lint`
   - Verify that all imports are correct

## Support

For issues and feature requests, please create an issue in the repository.
