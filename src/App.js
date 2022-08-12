
import './index.css';
import Nav from './components/Nav';
import Card from './components/Card';
import places from './data';
import "@fontsource/inter";

function App() {
  return (
    <>
       <div className='container'>
       <Nav />
       {places.map((place) => (
         <Card 
            key={place.id}
            place={place}
         />
       ))}
       </div>
    </>
  );
}

export default App;
