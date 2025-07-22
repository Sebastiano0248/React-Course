import logo from '../assets/investment-calculator-logo.png'

function Header() {
  return (
    <header id="header">
      <h1>React Investment Calculator</h1>
      <img src={logo} alt="Money Bag" />
    </header>
  )
}

export default Header