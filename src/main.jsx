import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
const root = document.getElementById('root')
// prerendered pages are hydrated; the dev server renders from scratch
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
