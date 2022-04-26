import './App.scss';
import { About, Footer, Header, NavBar, Skills, Testimonials, Work } from './components';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
