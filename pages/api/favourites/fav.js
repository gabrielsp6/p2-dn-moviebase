
import dbConnect from 'utils/dbConnect';
import Favourites from 'models/Favourites';

export default async function handler(req, res) {
    await dbConnect();


    if(req.method === 'POST') {
        const test = await Favourites.create(req.body)
        res.status(200).json({
            favourite: req.body,
            message: 'created the item'
        })
    } else if( req.method === 'GET') {
        const test = await Favourites.find()

        res.status(200).json({
            favourites: test
        })
    } else if(req.method === 'DELETE') {
        const test = await Favourites.remove({id: req.body.id})

        res.status(200).json({
            message: ' deleted the item',
            id: test
        })
    }

   
}