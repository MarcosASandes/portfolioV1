import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cabezal from './Components/Cabezal';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Inicio from './Components/Inicio';
import SobreMi from './Components/SobreMi';

function App() {
  return (
    <div >
      <Cabezal />

      <section className='back-image'>
        <Inicio />
      </section>

      <section>
        <SobreMi />
      </section>


      <Footer />
    </div>
  );
}

export default App;
