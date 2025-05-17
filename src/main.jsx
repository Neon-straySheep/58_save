import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router';
import { Mypost } from './Mypost.jsx';
import { Form } from './Form.jsx';
import { UserProvider } from './provider/UserContext.jsx';
import { PostProvider } from './provider/PostContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <PostProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mypost" element={<Mypost />} />
          <Route path="/posts/new" element={<Form />} />
        </Routes>
        </BrowserRouter>
      </PostProvider>
    </UserProvider>
  </StrictMode>,
)
