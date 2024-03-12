import { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';

const resources = (req: NextApiRequest, res: NextApiResponse) =>{
    res.send(data);
}

export default resources