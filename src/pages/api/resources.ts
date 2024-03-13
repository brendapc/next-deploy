import { NextApiResponse, NextApiRequest } from 'next';
 
const resources = async (req: NextApiRequest, res: NextApiResponse) =>{
  const dataRes = await fetch("http://localhost:3001/api/resources");
  const data = await dataRes.json();

  res.send(data);
}
export default resources