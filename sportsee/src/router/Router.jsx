import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Dashboard from '../routes/Dashboard'
//import UserSelect from '../routes/UserSelect'
//import ErrorPage from '../routes/ErrorPage'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserSelect />} />
          <Route path="/:userId" element={<Dashboard />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router