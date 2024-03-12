export default interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
  image: string;
  priority: number;
  timeToFinish: number;
  status: string;
}