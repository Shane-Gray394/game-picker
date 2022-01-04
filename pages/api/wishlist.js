import { connectToDatabase } from 'util/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const wishlist = await db.collection('wishlist').find({}).toArray();
      res.json(wishlist);
      break;
    case 'POST':
      const data = req.body;
      const wishlistData = db.collection('wishlist');
      const result = await wishlistData.insertOne(data);
      res.status(201).json({ message: 'Game inserted' });
      break;
  }
}
