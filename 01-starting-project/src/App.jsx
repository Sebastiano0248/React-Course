import Header from './components/Header.jsx'
import UserInputs from './components/UserInputs.jsx'
import Results from './components/Results.jsx'

import { useState } from "react";

const defaultValues = [
    "Initial Investment",
    "Annual Investment",
    "Expected Return",
    "Duration"
]

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userData.duration > 0;

  return (
    <>
      <Header />
      <UserInputs userData={userData} setUserData={setUserData} defaultValues={defaultValues} />
      {!inputIsValid && <p className="center">Please enter a duration greator than zero.</p>}
      {inputIsValid &&<Results userData={userData} defaultValues={defaultValues} />}
    </>
  )
}

export default App
