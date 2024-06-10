import './App.css';
import { useState } from 'react';
import Buttons from './buttons';
import './buttons.css'
import Navbar from './navbar';
import Intro from './intro';

const items = [
  "banana",
  "apple",
  "orange"
];

function App() {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className="App">
      <Navbar/>
      <Intro/>

      <Buttons 
      showDropdown={showDropdown} 
      setShowDropdown={() => setShowDropdown(!showDropdown)}
      items = {items}
      />
    </div>
  );
}

export default App;
