import { Link, Outlet } from 'react-router-dom';
import './index.css'
import './App.css'

function App() {
  return (
    <div className='App'style = {{fontSize: '30px'}}>
      <h1>LINKS</h1>
      <nav
        style={{
          borderBottom:'3px solid black'
          
        }}
        >
          <Link to='/'>Home</Link> - {''}
          <Link to='/links/new_form'>New Link</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
