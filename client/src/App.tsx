import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar';

// export default function App() {
//   return (
//     <>
//       <div>
//         <h1>Hello World!</h1>
//       </div>
//     </>
//   );
// }

const App: React.FC = () => {
  // Define links for the Navbar
  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <Router>
      <div>
        {/* Navbar component */}
        <Navbar links={navLinks} />
      </div>
    </Router>
  );
};

// Define other components (Home, About, Portfolio, Contact) here

export default App;
