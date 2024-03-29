import { fromJSON } from 'postcss';
import { Form } from 'react-router-dom';
import './App.css';
import SearchPage from './Component/Body/SearchPage';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/navbar/navbar';
import Navbar2 from './Component/navbar/Navbar2';
import Body from './Component/Body/Body';
import Body2 from './Component/Body/Body2';
import Subscribe from './Component/Body/Subscribe';

function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Body />
      <SearchPage />
      <Body2 />
      <Footer />
    </div>
  );
}

export default App;
