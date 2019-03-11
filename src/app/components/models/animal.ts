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
