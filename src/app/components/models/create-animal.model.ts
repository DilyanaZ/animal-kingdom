export class CreateAnimalModel {
    constructor(
        public name: string,
        public age: number, 
        public color: string,
        public type: string,
        public price: number,
        public image: string,
        public breed?: string
    ){}
}

export class AnimalModel {
    public id: string;
    public name: string;
    public age: number;
    public color: string;
    public type: string;
    public price: number;
    public image: string;
  }
  
  export interface Animal {
    id: string;
    name: string;
    age: number;
    color: string;
    type: string;
    price: number;
    image: string;
    reactions: {
      like: [string];
      love: [string];
      haha: [string];
      wow: [string];
      sad: [string];
      angry: [string];
    };
    breed?: string;
  }  