import { NextApiResponse, NextApiRequest } from 'next';
 
const resources = async (req: NextApiRequest, res: NextApiResponse) =>{
  const dataRes = await fetch("https://content-manager-app-api-zeta.vercel.app/api/resources");
  const data = await dataRes.json();

  res.send(data);
}
export default resources