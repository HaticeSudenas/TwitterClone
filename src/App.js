import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
       <RouterProvider router={routes}/>

    </div>
  );
}

export default App;
