const {expect} = require('chai');
const {average, threshold, iqr} = require('../average');

 var a=[5,6,7,8,9,10,11,12,14,15,16,17,18,19,21,23,24,25,27,31]


it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it('finding iqr', ()=> {
  expect(iqr(a)[0]).to.be.approximately(12.5,0.5);
});

it('ignores outliers in the input', ()=> {
  expect(average(a)).to.be.approximately(15.9 ,0.5);
});

