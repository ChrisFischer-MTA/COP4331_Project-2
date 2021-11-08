import '../styles/styles.css';
import NavBar from '../NavBar';

export default function Thing() {
  return (
    <div className="page">
		<NavBar/>
      	<h2>Thing</h2>
		<p>Hello, <em>this</em> is the home page.</p>
    </div>
  );
}
