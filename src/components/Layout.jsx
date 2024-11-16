import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-slate-500">
      <Sidebar />
    <main className="flex-1 bg-slate-500">
      <Outlet />
    </main>
  </div>
  )
}

export default Layout
