const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = "123";

// function add(x: number, y: number): number {
//     return x + y;
// }

// const add: (x: number, y: number) => number = (x, y) => x + y;
//
// type Add= (x:number, y:number)=> number;
// const add: Add= (x,y) => x + y;
//
// interface Add {
//     (x: number, y: number): number;
// }

// const add: Add = (x, y) => x + y;

// 위 3개는 다 같은 소리이다.

interface A {
    breath: true;
}
interface B extends A {
    breed: true;
}

const b: B = { breath: true, breed: true };
