import './assets/css/styles.scss';
import {PageHeader} from "./components";

function App() {
    return (
        <div className="container" style={{background: 'purple'}}>
            <div className="row">
                <div className="col-6" style={{background: 'red', height: '100vh'}}><PageHeader/></div>
                <div className="col-6" style={{background: 'blue'}}>world</div>
            </div>
        </div>
    )
}

export default App
