export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  location: string;
  ownerId: number;
  prictureId: number;
  statusRent: boolean;
  createdAt?: string;
  updatedAt?: string;
  owner: Owner;
  picture: Picture;
}

export interface Owner {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  cep: string;
}

export interface Picture {
  name: string;
  path: string;
}
