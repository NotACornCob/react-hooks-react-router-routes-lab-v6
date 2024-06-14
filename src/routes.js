import "./index.css";
import Home from "./pages/Home";
import Actors from "./pages/Actors"
import Directors from "./pages/Directors"
import Movie from "./pages/Movie"


const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
        path: "/actors",
        element: <Actors />
    },
    {
        path: "/directors",
        element: <Directors />
    },
    {
        path: "/Movie/:id",
        element: <Movie />
    }
  ];

export default routes; 