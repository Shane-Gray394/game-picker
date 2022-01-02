import { connectToDatabase } from 'util/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const wishlist = await db.collection('wishlist').find({}).toArray();
      res.json(wishlist);
      break;
  }
}
