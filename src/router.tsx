import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './screens/Login';
import { ItemList } from './screens/ItemList';
import { ItemDetail } from './screens/ItemDetail'

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/ItemList" component={ItemList}/>
            <Route path="/ItemDetail" component={ItemDetail}/>
        </BrowserRouter>
    );
}