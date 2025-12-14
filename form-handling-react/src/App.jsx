import { useState } from 'react'
import "./App.css"
import RegistrationForm from './components/RegistrationForm'
import formikForm from './components/FormikForm'

function App() {


  return (
    <>
      <RegistrationForm />  
      <formikForm />
    </>
  )
}

export default App
