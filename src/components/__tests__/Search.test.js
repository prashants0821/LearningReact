import { render , waitFor , fireEvent} from '@testing-library/react';
import Body from '../Body';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATAS } from '../../mocks/data';
import "@testing-library/react"

global.fetch = jest.fn(()=>{
  return  Promise.resolve({
        json: () =>{

        Promise.resolve(RESTAURANT_DATAS);
    },
    });
});

test("Shimmer should load on Homepage" , async () =>{
   const body = render(
    <StaticRouter>
        <Provider store={store}>
            <Body/>
        </Provider>
        </StaticRouter>
    );

//     console.log(body);
await waitFor(() => expect(body.getByTestId("search-btn")))
const input = body.getByTestId("search-input");

fireEvent.chsmgr(input, {target
:{
    value : "food",
},
});
const searchBtn = body.getByTestId("search-btn");
fireEvent.click("searchBtn");

const resList = body.getByTestId("res-list-fg");
expect(resList.children.length).toBe()

console.log(resList);
    
})
// test("Search results on Homepage" , () =>{
//     const body = render(
//      <StaticRouter>
//          <Provider store={store}>
//              <Body/>
//          </Provider>
//          </StaticRouter>
//      );
 
//  //     console.log(body);
 
//  const search = body.getByTestId("search-btn");
//  })