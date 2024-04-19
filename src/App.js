import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cabezal from './Components/Cabezal';
import Footer from './Components/Footer';
import Inicio from './Components/Inicio';
import SobreMi from './Components/SobreMi';
import { Provider } from 'react-redux';
import { store } from "./Store/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
