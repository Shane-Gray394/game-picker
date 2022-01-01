import { connectToDatabase } from '../../util/mongodb';

const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      const data = req.body;
      const { db } = await connectToDatabase();
      const gamesCollection = db.collection('boardgames');
      const result = await gamesCollection.insertOne(data);
      res.status(201).json({ message: 'Game inserted' });
      break;
    }
    case 'PUT': {
      return updateBoardgame(req, res);
    }
    case 'DELETE': {
      try {
        const { db } = await connectToDatabase();
        await db.collection('boardgames').deleteOne({
          _id: new ObjectId(req.body),
        });
        return res.json({
          message: 'Game deleted successfully',
          success: true,
        });
      } catch (error) {
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
    }
  }
}
