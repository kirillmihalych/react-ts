export interface IAddress {
  street: string
  city: string
  zipcode: string
}

export interface IUser {
  name: string
  id: number
  email: string
  address: IAddress
}

export interface ITodo {
  id: number
  title: string
  completed: boolean
}
