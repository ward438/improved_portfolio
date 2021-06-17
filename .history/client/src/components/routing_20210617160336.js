import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pages from "../pages/pages";
import GetRepos from '../utils/API';




export function Routing() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" component={Pages} />
                    <Route path="/portfolio" component={GetRepos} />
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return Pages;
}

function Portfolio() {
    return <GetRepos />;
}

function Users() {
    return <h2>Users</h2>;
}
