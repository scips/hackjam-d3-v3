import d3 from 'd3';
import {
  getDomainFromScale,
  getLinearScaleFunction,
  getLinearWithDomainAndRangeSetup,
  getLinearWithDomainAndRangeSetupAndClamp,
  getLinearWithDomainSetup,
  getSqrtScaleFunction,
  getSqrtWithDomainAndRangeSetup,
  getSqrtWithDomainSetup
} from './07-scale';
import {setupPlaygroundFromIndexFile} from './utils';

describe('Scales', () => {
  beforeEach(() => {
    setupPlaygroundFromIndexFile();
  });

  describe('Linear scales', () => {
    it('should return a linear scale function', () => {
      const fn = getLinearScaleFunction(d3);

      expect(typeof fn).toBe('function');
      expect(typeof fn.domain).toBe('function');
      expect(typeof fn.range).toBe('function');
    });
    it('should return the linear scale function with a domain between 0 and 100', () => {
      const fn = getLinearWithDomainSetup(d3);

      expect(fn(100)).toBe(1);
      expect(fn(50)).toBe(0.5);
      expect(fn(0)).toBe(0);
    });

    it('should return the linear scale function with a 10 to 1000 domain and 0 to 100 range', () => {
      const fn = getLinearWithDomainAndRangeSetup(d3);

      expect(Math.floor(fn(100))).toBe(9);
      expect(fn(10)).toBe(0);
      expect(fn(1000)).toBe(100);
    });

    it('should return the linear scale function with a 10 to 33 domain and 0 to 1 range without allowing input outside the domain', () => {
      const fn = getLinearWithDomainAndRangeSetupAndClamp(d3);

      expect(fn(100)).toBe(1);
      expect(fn(9)).toBe(0);
      expect(fn(10)).toBe(0);
      expect(fn(33)).toBe(1);
    });

    it('should return the domain value of the received scale and input', () => {
      const scale = d3.scale
        .linear()
        .domain([10, 33])
        .range([0, 1])
        .clamp(true);

      expect(getDomainFromScale(scale, 1)).toBe(33);
      expect(getDomainFromScale(scale, 0)).toBe(10);
    });
  });

  describe('Sqrt scales', () => {
    it('should return a sqrt scale function', () => {
      const fn = getSqrtScaleFunction(d3);

      expect(typeof fn).toBe('function');
      expect(typeof fn.domain).toBe('function');
      expect(typeof fn.range).toBe('function');
    });
    it('should return the sqrt scale function with a domain between 100 and 1000', () => {
      const fn = getSqrtWithDomainSetup(d3);

      expect(fn(100)).toBe(0);
      expect(Math.round(fn(500) * 100) / 100).toBe(0.57);
      expect(fn(1000)).toBe(1);
    });

    it('should return the sqrt scale function with a 10 to 1000 domain and 0 to 100 range', () => {
      const fn = getSqrtWithDomainAndRangeSetup(d3);

      expect(Math.floor(fn(100))).toBe(24);
      expect(fn(10)).toBe(0);
      expect(fn(1000)).toBe(100);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
