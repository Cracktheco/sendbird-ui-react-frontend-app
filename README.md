# Sendbird UIKit React TypeScript Frontend App

A React app built with Sendbird UIKit and Socket.io that displays real-time chat and profanity alerts triggered by the backend.

## Tech Stack

- React (TypeScript)
- Sendbird UIKit React
- Socket.io-client
- Vite (or Create React App)

## Getting Started

1. Clone the repo
   ```bash
  git clone https://github.com/Cracktheco/sendbird-ui-react-frontend-app.git
  cd sendbird-ui-react-frontend-app
   ```

2. Install dependencies 
```bash
npm install
```

3. Update src/const.ts with your Sendbird details:

export const APP_ID = 'your_sendbird_app_id';
export const USER_ID = 'test_user';
export const NICKNAME = 'Test User';

4. Run the app

```bash
npm start
```
App will be available at: http://localhost:3001
Make sure your backend is running on http://localhost:3000