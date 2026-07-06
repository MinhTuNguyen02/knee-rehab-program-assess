# Knee Rehab Program - Assessment App

Next.js frontend for patient knee assessment.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to view the app.

## Production Deployment (Render)
- Use **Web Service** (Not Static Site).
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Set `NEXT_PUBLIC_API_URL` to your production backend URL.
