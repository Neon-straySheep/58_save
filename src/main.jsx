import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router';
import { Mypost } from './Mypost.jsx';
import { Form } from './Form.jsx';
import { Recent } from './Recent.jsx';
import { UserProvider } from './provider/UserContext.jsx';
import { PostProvider } from './provider/PostContext.jsx';
import { GoodProvider } from './provider/Good.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <PostProvider>
        <GoodProvider>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/mypost" element={<Mypost />} />
            <Route path="/posts/new" element={<Form />} />
            <Route path="/recent" element={<Recent />} />
          </Routes>
          </BrowserRouter>
        </GoodProvider>
      </PostProvider>
    </UserProvider>
  </StrictMode>,
)
