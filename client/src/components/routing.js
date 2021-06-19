import { Switch, Route } from "react-router-dom";
import {Pages, Portfolio} from "../pages/pages";


export function Routing() {
    return (
        <Switch>            
            <Route path="/" component={Portfolio} />
            <Route path="/portfolio" component={Pages} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    );
}
