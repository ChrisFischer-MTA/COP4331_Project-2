import '../styles/styles.css';
import NavBar from '../NavBar';

function hi() {
	document.getElementById('hi').style.display = "none";
	alert("I am a nice button.");

}
function bye() {
	document.getElementById('bye').style.display = "none";
	alert("I am a nicer button.");

}

export default function Service() {
  return (
    <div className="page">
		<NavBar/>
		<h1>Alright</h1>

      	<h2 id="hi">Service</h2>
      	<h2 id="bye">Hiii</h2>

		<button onClick={hi}>hello</button>
		<button onClick={bye}>bye</button>
    </div>
  );
}
