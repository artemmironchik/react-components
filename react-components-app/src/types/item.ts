export default interface IItem {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Record<string, string>;
  location: Record<string, string>;
  image: string;
  url: string;
  created: string;
}

export interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
}

export interface IFullCard extends ICard {
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  created: string;
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
