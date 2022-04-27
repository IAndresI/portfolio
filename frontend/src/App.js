import './App.scss';
import { About, Footer, Header, NavBar, Skills, Testimonials, Work, FixedLayout } from './components';

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Header />
        <About />
        <Work/>
        <Skills/>
        <Testimonials/>
        <Footer/>
      </div>
      <FixedLayout />
    </>
  );
}

export default App;
