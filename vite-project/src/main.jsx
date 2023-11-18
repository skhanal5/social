import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import PostView from "./components/PostView.jsx"
import AddPost from './components/AddPost.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App/>} />
        <Route index={false} path="/topic/:symbol" element={<PostView/>} />
        <Route index={false} path="/post" element={<AddPost/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
