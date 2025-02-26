import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import SiteIndex from '.';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteIndex/>
  </StrictMode>,
)
