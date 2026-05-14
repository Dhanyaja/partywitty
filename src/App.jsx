import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventListing from './pages/EventListing'
import FeedBids from './pages/FeedBids'
import BuyDrinks from './pages/BuyDrinks'
import OrderSummary from './pages/OrderSummary'
import VerificationIntro from './pages/VerificationIntro'
import FaceVerification from './pages/FaceVerification'
import VerificationSuccess from './pages/VerificationSuccess'
import ShowVibe from './pages/ShowVibe'
import GoTonight from './pages/GoTonight'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/event-listing" element={<EventListing />} />
        <Route path="/feed" element={<FeedBids />} />
        <Route path="/buy-drinks" element={<BuyDrinks />} />
        <Route path="/order-summary" element={<OrderSummary />} />


        <Route path="/verification" element={<VerificationIntro />} />
        <Route path="/face-verification" element={<FaceVerification />} />
        <Route path="/verification-success" element={<VerificationSuccess />} />
        <Route path="/dashboard" element={<ShowVibe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
