// export class AnimalModel {

//   constructor(
//     public name: string,
//     public age: number,
//     public color: string,
//     public type: string,
//     public price: number,
//     public image: string,
//     public breed?: string
//   ) {}
// }
export interface IAnimal {
  name: string;
  age: number;
  color: string;
  type: string;
  price: number;
  image: string;
  breed?: string;
}

export class CreateAnimal implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public color: string,
    public type: string,
    public price: number,
    public image: string,
    public breed?: string
  ) {}
}
export class Animal {
    public id: string;
    public name: string;
    public age: number;
    public color: string;
    public type: string;
    public price: number;
    public image: string;
    public breed: string;
 }
