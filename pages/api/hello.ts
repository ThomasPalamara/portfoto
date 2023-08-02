// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ImageKit from 'imagekit';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  list: any;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const category = !Array.isArray(req.query.category)
    ? req.query.category
    : req.query.category[0];
  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY || '',
    privateKey: process.env.IK_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT || '',
  });

  const list = await imagekit.listFiles({
    skip: 0,
    limit: 50,
    path: category?.replace('-', '_'),
  });

  res.status(200).json({ list });
};
