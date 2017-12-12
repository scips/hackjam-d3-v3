import * as d3 from 'd3';
import {functionThatReturnsFunction, getD3} from './01-getting-started';

describe('Getting started', () => {
  beforeEach(() => {});

  describe('getD3', () => {
    it('should return d3 object when calling getD3 function', () => {
      expect(getD3()).toBeTruthy();
    });

    it('should return d3 object with version 3.5.17 when calling getD3 function', () => {
      expect(getD3().version).toBe('3.5.17');
    });
  });

  describe('functionThatReturnsFunction', () => {
    it('should return a function when calling it', () => {
      expect(typeof functionThatReturnsFunction()).toEqual('function');
    });
    it('should return the d3 object passed in parameter when calling the returned function', () => {
      expect(functionThatReturnsFunction(d3)()).toBe(d3);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
