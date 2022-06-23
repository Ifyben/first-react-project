import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Alert from './components/Alert';

function App() {
  return (<>
    <MyNav />
    <MyFooter />
    <Alert />

  </>);
}

export default App;
