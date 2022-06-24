import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Alert from './components/Alert';
import LatestReleases from './components/LatestReleases';

function App() {
  return (<>
    <MyNav />
    <MyFooter />
    <Alert />
    <LatestReleases />
  </>);
}

export default App;
