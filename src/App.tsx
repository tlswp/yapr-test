import './App.css';
import Beginning from './sections/Beginning';
import Continue from './sections/Continue';
import Guide from './sections/Guide';
import Hero from './sections/Hero';
import Love from './sections/Love';

function App() {
  return (
    <div className=" px-4 md:mx-auto container xl:max-w-7xl ">
      <Hero />
      <Beginning />
      <Love />
      <Continue />
      <Guide />
    </div>
  );
}

export default App;
