export default interface IItem {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  rating: number;
  imageURL: string;
}

export interface IFormItem {
  id: number;
  name: string;
  description: string;
  color: string;
  status: string;
  addInfo: string[];
  imageURL: string;
}
