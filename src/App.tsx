import './App.css'
import '@sendbird/uikit-react/dist/index.css'


import React, { useEffect } from 'react'

import io from 'socket.io-client';


import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'
import GroupChannelList from '@sendbird/uikit-react/GroupChannelList'
import GroupChannel from '@sendbird/uikit-react/GroupChannel'

import { APP_ID, USER_ID, NICKNAME } from './const'

const socket = io('http://localhost:3000'); // backend socket.io server

socket.on('connect', () => {
  console.log('connected to backend server');
});
function App() {
  const [currentChannelUrl, setCurrentChannelUrl] = React.useState<string>()

  useEffect(() => {
    // Listen for profanity events
    socket.on('profanity_alert', ({ sender, censoredMessage }) => {
      console.log('profanity_alert', sender, censoredMessage);
      if (alert.length === 0) {
        alert(`⚠️ Profanity Filter Triggered\n${sender} said: "${censoredMessage}"`);
      }

    });
  }, []);

  return (
    <div className="App">
      <SendbirdProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
        <>
          <div className="sendbird-app__channellist-wrap">
            <GroupChannelList
              selectedChannelUrl={currentChannelUrl}
              onChannelCreated={(channel) => {
                setCurrentChannelUrl(channel.url)
              }}
              onChannelSelect={(channel) => {
                setCurrentChannelUrl(channel?.url)
              }}
            />
          </div>
          <div className="sendbird-app__conversation-wrap">
            <GroupChannel channelUrl={currentChannelUrl!} />
          </div>
        </>
      </SendbirdProvider>
    </div>
  )
}

export default App
