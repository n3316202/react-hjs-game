import { createBrowserRouter } from "react-router-dom";
import RspView from './../views/RspView';
import App from "../App";
import LottoView from './../views/LottoView';

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
        path: "/lotto",
        element: <App />,
        loader: () => "로또",
        children: [
            {
              path: "/lotto",
              loader: () => "로또",
              element: <LottoView/>,
            },
        ]
    }
]

const router = createBrowserRouter(routes);

export { router, routes};
