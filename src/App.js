import {Route, Switch} from "react-router-dom"
import Dashboard from "./layouts/Dashboard/Dashboard"
import EmployerDashboard from "./layouts/Dashboard/EmployerDashboard";
import "./App.css"
import Navi from "./layouts/Navi";

function App() {
    return (
        <div className="App-header">
            <Navi />
           
            <Switch>
                <Route path="/employer" component={EmployerDashboard}/>
                <Route component={Dashboard}/>
            </Switch>
         
        </div>
    );
}

export default App;
