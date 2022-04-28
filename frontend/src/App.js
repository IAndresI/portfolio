import './App.scss';
import { About, Footer, Preview, Header, Skills, Testimonials, Work, FixedLayout } from './components';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main>
          <Preview />
          <About />
          <Work/>
          <Skills/>
          <Testimonials/>
        </main>
        <Footer/>
      </div>
      <FixedLayout />
    </>
  );
}

export default App;
