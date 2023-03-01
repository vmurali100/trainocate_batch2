// var myName: string = "Murali";
// var age: number = 43;
// var isJSCovered: boolean = true;
// function calculate(a: number, b: number): number {
//   return a + b;
// }
// var total = calculate(10,20);
// console.log(total)
// console.log(myName);
// var calculateNos = (a: number, b?: number ): number => {
//   return b ? a+b : a
// };
// var total = calculateNos(10,40);
// console.log(total)
// var calculateGivenNos = (...numbers:number[]) => {
//     return numbers.reduce((a,b)=>a+b)
// };
// var totalOfAllNos = calculateGivenNos(1,4,6,7);
// console.log(totalOfAllNos)
var calculate = function (a, b) {
    if (a === void 0) { a = 20; }
    return b ? a + b : a;
};
var total = calculate(30, 44);
console.log(total);
// class Car {
//   private brand: string;
//   private model: string;
//   private year: number;
//   constructor(brand: string, model: string, year: number) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   public getBrand(): string {
//     return this.brand;
//   }
//   public setBrand(brand: string): void {
//     this.brand = brand;
//   }
//   public getModel(): string {
//     return this.model;
//   }
// }
// var myCar = new Car("VOLVO","ABC",2023);
// myCar.setBrand("AUDI")
// console.log(myCar.getBrand())
// interface Person {
//   fname: string;
//   lname: string;
//   email:string;
// }
// var person: Person = {
//   fname: "Ram",
//   lname: "Krishna",
//   email:"sss@gmail.comkkmkmkm"
// };
// function returnAPerson(): Person {
//   return {
//     fname: "Savindar",
//     lname: "Sing",
//     email:"savindar@gamil.com"
//   };
// }
