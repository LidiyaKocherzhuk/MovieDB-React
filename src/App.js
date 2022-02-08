import {useEffect} from "react";

import {apiService} from "./services/api.service";

function App() {

  useEffect(() => {
      fetchMovies()
  }, [])

  const fetchMovies = async () => {

      const {data} = await apiService.getMovies()

      console.log(data)

  }

  return (
    <div>

    </div>
  );
}

export default App;
