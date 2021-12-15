const {expect} = require('chai');
const {average, threshold} = require('../average');

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

it('testing lower bound', ()=> {
  var a=[30,31,31,32,33,35,48,56,62,70,88,130]
  expect(threshold(a)[0]).equal(-11)
});

it('testing upper bound', ()=> {
    var a=[30,31,31,32,33,35,48,56,62,70,88,130]
    expect(threshold(a)[1]).equal(101)
});

it('ignores outliers in the input', ()=> {
  var a=[30,31,31,32,33,35,48,56,62,70,88,130]
  expect(average(a)).to.be.approximately(46.9, 0.1);
});