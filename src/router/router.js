import { createBrowserRouter } from "react-router-dom";
import RspView from './../views/RspView';
import App from "../App";

const routes = [
    {
        path: "/",
        element: <App />,
        loader: () => "가위바위보",
        children: [
            {
              path: "/",
              loader: () => "가위바위보",
              element: <RspView/>,
            },
        ]
    },
    {
        path: "/",
        element: <App />,
        loader: () => "로또",
        children: [
            {
              path: "/",
              loader: () => "로또",
              element: <RspView/>,
            },
        ]
    }
]

const router = createBrowserRouter(routes);

export { router, routes};
