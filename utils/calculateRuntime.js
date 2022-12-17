
const calculateRuntime = async (id) => {
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

    const promises = await Promise.all
    (idList.
    map(movie => fetch(`http://localhost:3000/api/runtime/${movie}`)))
    const runtimesArray = await Promise.all(promises.map(p => p.json()))
  
    return runtimesArray
  
}


export default calculateRuntime