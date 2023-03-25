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

export interface IErrors {
  nameError: string;
  descriptionError: string;
  dateError: string;
  colorError: string;
  inStockError: string;
  infoError: string;
  imageError: string;
}
