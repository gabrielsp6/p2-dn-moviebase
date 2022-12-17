
const calculateGenres = async (id) => {
    let favourites;
    try {
        const res = await fetch(`http://localhost:3000/api/watchlist/all`, {
        method: 'GET'
        })  
        const data = await res.json()
  
        favourites = data.favourites;
    } catch (e) {
        console.log(e)
    }
    if(!favourites) {
        return {
            'response' : 'add movie'
        }
    }

    const idList = await favourites.map(movie => movie.id)

    const promises = await Promise.all
    (idList.
    map(movie => fetch(`http://localhost:3000/api/genre/${movie}`)))
    const genresArray = await Promise.all(promises.map(p => p.json()))


    const arrayOfGenresWithId = []

    genresArray.forEach( el => {
        arrayOfGenresWithId.push(...el)
    })
    let arrayOfGenresNoId = arrayOfGenresWithId.map(movie => movie.name)


    const occurrences = arrayOfGenresNoId.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    
    let maxOccurenceValue = 0;
    let maxOccurenceKey = '';

    let secondMaxOccurenceValue = 0;
    let secondMaxOccurenceKey = '';

    let thirdMaxOccurenceValue = 0;
    let thirdMaxOccurenceKey = '';

    let fourthMaxOccurenceValue = 0;
    let fourthMaxOccurenceKey = '';

    let totalGenres = 0;

    for(const [key,value] of Object.entries(occurrences)) {
        // console.log(`${key} : ${value}`)
        if(value > maxOccurenceValue) {
            maxOccurenceValue = value
            maxOccurenceKey = key.toString()
        }
        totalGenres = totalGenres + value;
    }

    for(const [key,value] of Object.entries(occurrences)) {
        // console.log(`${key} : ${value}`)
        if(value > secondMaxOccurenceValue && maxOccurenceKey !== key) {
            secondMaxOccurenceValue = value
            secondMaxOccurenceKey = key.toString()
        }
    }

    for(const [key,value] of Object.entries(occurrences)) {
        // console.log(`${key} : ${value}`)
        if(value > thirdMaxOccurenceValue && maxOccurenceKey !== key && secondMaxOccurenceKey !== key) {
            thirdMaxOccurenceValue = value
            thirdMaxOccurenceKey = key.toString()
        }
    }

    for(const [key,value] of Object.entries(occurrences)) {
        // console.log(`${key} : ${value}`)
        if(value > fourthMaxOccurenceValue && maxOccurenceKey !== key && secondMaxOccurenceKey !== key && thirdMaxOccurenceKey !== key) {
            fourthMaxOccurenceValue = value
            fourthMaxOccurenceKey = key.toString()
        }

    }

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
     } 

    // return {
    //     [maxOccurenceKey]: maxOccurenceValue,
    //     [secondMaxOccurenceKey]: secondMaxOccurenceValue,
    //     [thirdMaxOccurenceKey]: thirdMaxOccurenceValue,
    //     [fourthMaxOccurenceKey]: fourthMaxOccurenceValue
        
    // }
    // return totalGenres;
    // if( maxOccurenceKey && secondMaxOccurenceKey && thirdMaxOccurenceKey && fourthMaxOccurenceKey)
    // return {
    //     [maxOccurenceKey]: String(percentage(maxOccurenceValue, totalGenres)).slice(0,2),
    //     [secondMaxOccurenceKey]: percentage(secondMaxOccurenceValue, totalGenres),
    //     [thirdMaxOccurenceKey]: percentage(thirdMaxOccurenceValue, totalGenres),
    //     [fourthMaxOccurenceKey]: percentage(fourthMaxOccurenceValue, totalGenres)

    // }

    if( maxOccurenceKey && secondMaxOccurenceKey && thirdMaxOccurenceKey && fourthMaxOccurenceKey)
    return {
        [maxOccurenceKey]: String(percentage(maxOccurenceValue, totalGenres)).slice(0,2),
        [secondMaxOccurenceKey]: String(percentage(secondMaxOccurenceValue, totalGenres)).slice(0,2),
        [thirdMaxOccurenceKey]: String(percentage(thirdMaxOccurenceValue, totalGenres)).slice(0,2),
        [fourthMaxOccurenceKey]: String(percentage(fourthMaxOccurenceValue, totalGenres)).slice(0,2)

    }


    
}


export default calculateGenres