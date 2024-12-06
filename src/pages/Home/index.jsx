import { useEffect, useState } from "react";
import api from "../../services/api";

//ULR DA API: https://api.themoviedb.org/3/movie/550?api_key=b0a0c8bfa3379431090ea52c3bb2110e

export default function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes() {
        const response = await api.get("movie/now_playing",{
            params:{
                api_key:"b0a0c8bfa3379431090ea52c3bb2110e",
                language:"pt-BR",
                page: 1,
            }
        })
        console.log(response)
        
    }
    loadFilmes();

  },[])

  return (
    <div>
      <h1>BEM VINDO HOME</h1>
    </div>
  );
}
