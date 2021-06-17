import { Switch, Route } from "react-router-dom";
import {Pages, Portfolio} from "../pages/pages";


export function Routing() {
    return (
        <Switch>
            <Route path="/" component={Pages} />
            <Route path="/portfolio" component={Portfolio} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    );
}
