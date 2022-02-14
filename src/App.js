import {Route, Routes} from "react-router-dom";

import "./App.css";
import {Header, PosterPreview} from "./components";
import {MoviesPage} from "./Containers";

function App() {


    return (
        <div className={"pages"}>

            <Routes>
                <Route path={"/"} element={<Header/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={"movies"} element={<MoviesPage/>}>
                        <Route path={"posterPreview"} element={<PosterPreview/>}/>
                    </Route>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
