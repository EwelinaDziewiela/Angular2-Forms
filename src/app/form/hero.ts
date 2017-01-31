export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}

let myHero = new Hero(8, 'Lucy', 'Can make any figure possible due to gummy bones', 'Kitty');

