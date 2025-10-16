import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Workers from './pages/Workers'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'

// PageWrapper handles animations for each page
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}     // Start slightly down & invisible
    animate={{ opacity: 1, y: 0 }}      // Animate to fully visible
    exit={{ opacity: 0, y: -30 }}       // Exit upwards & fade out
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
)

const App = () => {
  const location = useLocation() // Track current route for AnimatePresence

  return (
    <div className="mx-4 sm:mx-[10%]">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <Nav />
                <Home />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Workers */}
          <Route
            path="/workers"
            element={
              <PageWrapper>
                <Nav />
                <Workers />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Workers with speciality */}
          <Route
            path="/workers/:speciality"
            element={
              <PageWrapper>
                <Nav />
                <Workers />
                <Footer />
              </PageWrapper>
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={
              <PageWrapper>
                <Nav />
                <About />
                <Footer />
              </PageWrapper>
            }
          />

          {/* MyProfile */}
          <Route
            path="/myProfile"
            element={
              <PageWrapper>
                <Nav />
                <MyProfile />
                <Footer />
              </PageWrapper>
            }
          />

          {/* MyAppointments */}
          <Route
            path="/myAppointments"
            element={
              <PageWrapper>
                <Nav />
                <MyAppointments />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Login */}
          <Route
            path="/login"
            element={
              <PageWrapper>
                <Nav />
                <Login />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Nav />
                <Contact />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Appointment */}
          <Route
            path="/appointment/:workId"
            element={
              <PageWrapper>
                <Nav />
                <Appointment />
                <Footer />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
