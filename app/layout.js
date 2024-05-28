// app/layout.jsx
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Navbar from "@/app/components/Navbar";
import Notifications from "@/app/components/Notifications";
import './styles/globals.css';

const Layout = ({ children }) => {
  return (
      <html lang="en">
      <body>

        <Navbar/>
        <Notifications />
        <main>{children}</main>
      </body>
      </html>
  );
};

export default Layout;

