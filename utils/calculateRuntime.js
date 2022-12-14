
import { useRouter } from 'next/router';

import useSWR from 'swr';

const calculateRuntime = async (id) => {
    // const { data, error } = useSWR(id && `/api/runtime/${id}`);

    // if (error) {
    //     return error
    //   }
    //   if (!data) {
    //     return 'no data'
    //   }
    let favourites;
    try {
        const res = await fetch(`http://localhost:3000/api/favourites/all`, {
        method: 'GET'
        })  
        const data = await res.json()
  
        favourites = data.favourites;
    } catch (e) {
        console.log(e)
    }

    const idList = await favourites.map(movie => movie.id)

        // try {
        //     const res = await fetch(`http://localhost:3000/api/runtime/${id}`, {
        //     method: 'GET'
        //     })  
        //     const data = await res.json()
      
        //     return data
        // } catch (e) {
        //     console.log(e)
        // }

    //     const runtimeArray = idList.map(async movie => {
    //         return await fetch(`http://localhost:3000/api/runtime/${movie}`)
    //         .json();
    //   });


    const promises = await Promise.all
    (idList.
    map(movie => fetch(`http://localhost:3000/api/runtime/${movie}`)))
    const runtimesArray = await Promise.all(promises.map(p => p.json()))
  
    return runtimesArray
  
}


export default calculateRuntime