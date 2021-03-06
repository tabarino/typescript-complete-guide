import _ from 'lodash';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Product } from './product.model';

declare var GLOBAL: string;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

const products = [{ title: 'A Carpet', price: 29.99 }, { title: 'A Book', price: 12.99 }];
// const p1 = new Product('A Book', 12.99);
// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation()); 
}

const newProd = new Product('', 5.99);
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.error(errors);
    return;
  }
  console.log(newProd.getInformation());
});
