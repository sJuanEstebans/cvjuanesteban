import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCarousel from './components/homeCarousel.js';




function App() {

  return (
    <div className="App">
      
      <div className='row m-0 carousel h-100'>
        <div className='col-md-12 col-xs-12 p-0'>
          <HomeCarousel />
        </div>
      </div>

    </div>
  );
}

export default App;
