import {React} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
 return (
 <>
 <header style={styles.header}>
 <div style={styles.div}>
 <h1>React ToDo App</h1>
 <nav>
 <Link to="/" style={styles.link}>Home</Link>
 <Link to="/about" style={styles.link}>About</Link>
 </nav>
 </div>
 <h2 className="text-center">ToDo List</h2>
 <input type="text" placeholder="add task to do" required />
 <button className="add" style={styles.button}>Add</button><br />
 <input type="text" value="To Work" style={styles.input} /><br />
 <input type="text" value="To Swim" style={styles.input} />
 </header>
 </>
 );
};

const styles = {
header: {
 textAlign: 'center',
 padding: '20px', 
 background: '#D3D3D3', 
 color: 'black',
 width: '250px',
 margin: '0 auto',
 borderRadius: '10px', 
 },
 link: {
 color: 'blue',
 textDecoration: 'none',
 cursor: 'pointer',
 padding: '5px',
 },
 input: {
 width: '200px', 
 borderRadius: '25px',
 padding: '5px', 
 margin: '5px 0',
 border: '1px solid #ccc', 
 },
 button: {
 padding: '8px 16px', 
 backgroundColor: 'blue', 
 color: 'white', 
 border: 'none', 
 borderRadius: '5px', 
 cursor: 'pointer', 
 },
 division:{
     backgroundColor:'fff',
 }
};

export default Header;