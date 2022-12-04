
import dbConnect from 'utils/dbConnect';
import Favourites from 'models/Favourites';

export default async function handler(req, res) {
    await dbConnect();

    const test = await Favourites.create(req.body)
    res.status(200).json({
        favourite: req.body,
        message: 'created the item'
    })
}