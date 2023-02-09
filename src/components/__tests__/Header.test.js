import { render } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux';
import store from '../../utils/store';
import {StaticRouter, staticRouter} from "react-router-dom/server"

test("Logo should load on rendering header", () =>{
    
    //Load Header
    const header = render(
        <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
        );
    console.log(header);

    const logo = header.getAllByTestId("logo")
    console.log(logo);

    expect(logo.children).toBe("https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj")
    //Check if logo is loading
})