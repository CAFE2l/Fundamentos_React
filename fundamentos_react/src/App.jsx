import styles from './App,module.css';

import TextInput from './components/TextInput.jsx';
function App() {
  return (
<div className={styles.appContainer}>
      <TextInput placeholder={"Oq está acontecendo?"} maxLength={125}/>
    
</div>
  )
}

export default App
