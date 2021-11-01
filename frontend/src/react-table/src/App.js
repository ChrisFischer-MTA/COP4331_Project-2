import './App.css';

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]


function App() {
    return (
        <div className="App">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                <tr>
                    <th>Anom</th>
                    <td>19</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <th>Megha</th>
                    <td>19</td>
                    <td>Female</td>
                </tr>
                <tr>
                    <th>Subham</th>
                    <td>25</td>
                    <td>Male</td>
                </tr>
            </table>
        </div>
    );
}

export default App;
