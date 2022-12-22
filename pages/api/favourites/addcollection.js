
import dbConnect from 'utils/dbConnect';
import Favourites from 'models/Favourites';

// api used for whole favourite list 
export default async function handler(req, res) {
    await dbConnect();

    const items = req.body
    if(req.method === 'POST') {
        const test = await Favourites.insertMany(items.list)
        res.status(200).json({
            favourite: req.body,
            message: 'added the list '
        })
    } else if(req.method === 'DELETE') {
        const test = await Favourites.deleteMany(
                {$or: items.list}
            )
        res.status(200).json({
            favourite: req.body,
            message: 'deleted this list '
        })
    } 
   
}