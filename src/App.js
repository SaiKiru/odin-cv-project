import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CV from './components/CV';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='cv-document-container'>
        <CV />
      </div>
      <Footer />
    </div>
  );
}

export default App;
