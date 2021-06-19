import { Switch, Route } from "react-router-dom";
import {Pages, Portfolio} from "../pages/pages";


export function Routing() {
    return (
        <Switch>            
            <Route path="/improved_portfolio" component={Portfolio} />
            <Route path="/improved_portfolio" component={Pages} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    );
}
