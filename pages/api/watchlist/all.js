
import dbConnect from 'utils/dbConnect';
import WatchListMovie from 'models/WatchListMovie';


export default async function handler(req, res) {
    await dbConnect();


    if(req.method === 'POST') {
        const test = await WatchListMovie.create(req.body)
        res.status(200).json({
            favourite: req.body,
            message: 'created the item'
        })
    } else if( req.method === 'GET') {
        const test = await WatchListMovie.find()

        res.status(200).json({
            favourites: test
        })
    } else if(req.method === 'DELETE') {
        const test = await WatchListMovie.remove({id: req.body.id})

        res.status(200).json({
            message: ' deleted the item',
            id: test
        })
    }

   
}