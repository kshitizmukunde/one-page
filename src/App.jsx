import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import Banner from './components/Banner/Banner'
import About from './components/About/About'



export const App = () => {
  return (
    <section className='container m-auto'>
      <Header />
      <Banner />
      <About />
    </section>
  )
}

