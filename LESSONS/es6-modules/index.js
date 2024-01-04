// ES6 Module -> an externl file that contains reusable code
//               that can be imported into other Javascript files.
//               write reusable code for many different apps.
//               Can contain variables, classes, function ... and more
//               Introducted as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm^3`);