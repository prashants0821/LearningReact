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
        //Check if logo is loading
    console.log(header);

    const logo = header.getAllByTestId("logo")
    console.log(logo[0]);

    expect(logo[0].src).toBe("https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj")
    
})

test("Online status should be green on rendering header", () =>{
    
    //Load Header
    const header = render(
        <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
        );
        //Check if online status is loading
  

    const onlineStatus = header.getByTestId("online-status")


    expect(onlineStatus.innerHTML).toBe("Yes")
    
})

test("Cart should have zero items", () =>{
    
    //Load Header
    const header = render(
        <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
        );
        //Check if online status is loading
  

    const cart = header.getByTestId("cart")


    expect(cart.innerHTML).toBe("Cart - 0")
    
})