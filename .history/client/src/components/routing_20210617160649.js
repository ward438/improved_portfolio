import { Switch, Route } from "react-router-dom";
import Pages from "../pages/pages";
import GetRepos from '../utils/API';

export function Routing() {
    return (
        <Switch>
            <Route path="/" component={Pages} />
            <Route path="/portfolio" component={GetRepos} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    );
}
