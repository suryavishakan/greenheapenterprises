import React from 'react'

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#101212] to-[#08201D] text-white">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4">🎉 Thank You!</h1>
        <p className="text-lg">Your message has been sent. We'll get back to you soon!</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition">
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default ThankYou