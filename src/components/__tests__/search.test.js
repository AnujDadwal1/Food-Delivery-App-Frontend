import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Body from "../Body";
import { render,waitFor } from "@testing-library/react";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import {RESTAURANT_DATA} from "../../mocks/data";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{ Promise.resolve(RESTAURANT_DATA);},
     });
});
test("Restaurant should be load on Homepage", async () => {
    const body =
        render(
            <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
            </StaticRouter>
        );
        await waitFor(()=>expect(screen.getByTestId("search-btn"))) 
        const shimmer = body.getByTestId("shimmer");
        expect(shimmer.children.length).toBeInDocument(10);
       console.log(searchBtn)
})