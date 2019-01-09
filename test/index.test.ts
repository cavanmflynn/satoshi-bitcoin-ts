import { expect } from 'chai';
import { toBitcoin, toSatoshi } from '../src';

describe('toBitcoin', () => {
  it('converts simple integer amounts', () => {
    expect(toBitcoin(100000000)).to.equal(1);
    expect(toBitcoin(123456789012345)).to.equal(1234567.89012345);
  });
  it('converts simple string amounts', () => {
    expect(toBitcoin('100000000')).to.equal(1);
    expect(toBitcoin('123456789012345')).to.equal(1234567.89012345);
  });

  it('converts to Bitcoin, not to Satoshi', () => {
    expect(toBitcoin(98765)).to.not.equal(9876500000000);
  });

  it('converts and handles corner case rounding', () => {
    expect(toBitcoin(46)).to.equal(.00000046);
  });

  it('handles TypeError input', () => {
    expect(toBitcoin.bind(this, true)).to.throw('toBitcoin must be called on a number or string');
    expect(toBitcoin.bind(this, 1.1)).to.throw('toBitcoin must be called on a whole number or string format whole number');
  });
});

describe('toSatoshi', () => {
  it('converts simple integer amounts', () => {
    expect(toSatoshi(0.00000001)).to.equal(1);
    expect(toSatoshi(98765)).to.equal(9876500000000);
  });
  it('converts simple string amounts', () => {
    expect(toSatoshi('0.00000001')).to.equal(1);
    expect(toSatoshi('98765')).to.equal(9876500000000);
  });

  it('converts to Satoshi, not to Bitcoin', () => {
    expect(toSatoshi(123456789012345)).to.not.equal(1234567.89012345);
  });

  it('converts and handles corner case rounding', () => {
    expect(toSatoshi(4.6)).to.equal(460000000);
  });

  it('handles TypeError input', () => {
    expect(toSatoshi.bind(this, true)).to.throw('toSatoshi must be called on a number or string');
  });
});
