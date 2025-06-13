import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Works from './components/Works/Works'
import Experience from './components/Experience/Experience'
import Blogs from './components/Blogs/Blogs'
import Testimonials from './components/Testimonials/Testimonials'
import Faqs from './components/Faqs/Faqs'



export const App = () => {
  return (
    <section className='container m-auto'>
      <Header />
      <Banner />
      <About />
      <Works />
      <Experience />
      <Blogs />
      <Testimonials />
      <Faqs />
    </section>
  )
}

