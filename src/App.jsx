import { useState } from 'react'
import './App.module.scss';
import Header from "components/Header/Header"
import Main from 'components/Main/Main'
import Footer from "components/Footer/Footer"

function App() {
  const [theme, setTheme] = useState('light');
  
  function handleTheme () {
    if(theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  console.log(theme)

  return (
    <div className={`App ${theme}`}>
        <Header onToggleTheme={handleTheme}/>
        <Main />
        <Footer />
    </div>  
  );
}

export default App;
