import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pages from "../pages/pages";
import GetRepos from '../utils/API';

export function Routing() {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/" component={Pages} />
                <Route path="/portfolio" component={GetRepos} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </Router>
    );
}
