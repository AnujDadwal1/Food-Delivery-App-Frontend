import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
test("logo should load on readering header ", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header /></Provider>
        </StaticRouter>
    );
   const logo = header.getAllByTestId("logo");
   console.log(logo);
   expect(logo[0].src).toBe("http://localhost/dummy.png")
})

test("Online status should be green readering header ", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header /></Provider>
        </StaticRouter>
    );
   const Onlinestatus = header.getByTestId("online-status");
   expect(Onlinestatus.innerHTML).toBe("🟢")
})

test("Online status should be green readering header ", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header /></Provider>
        </StaticRouter>
    );
   const Onlinestatus = header.getByTestId("online-status");
   expect(Onlinestatus.innerHTML).toBe("🟢")
})

test("Cart should have 0 items readering header ", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header /></Provider>
        </StaticRouter>
    );
   const cart  = header.getByTestId("cart");
   expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart</a> - 0 items")
})