import styles from './App.module.css';

import TextInput from './components/TextInput.jsx';

function App() {
  return (
    <div className={styles.appContainer}>
      <TextInput maxLength={125}/>
    </div>
  )
  }
export default App
