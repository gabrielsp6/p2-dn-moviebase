import History from 'models/History';
import dbConnect from 'utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  if(method === 'PUT') {
        const newDate = await History.findOneAndUpdate(
            { id: req.body.id },
            {
              $set: {
                date: req.body.date,
              },
            }
          );
        res.status(200).json(newDate);
    } 
    
}
