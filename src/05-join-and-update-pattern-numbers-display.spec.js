import d3 from 'd3';
import {
  createMouseEvent,
  setupPlayground,
  setupPlaygroundFromIndexFile
} from './utils';

describe('Join and update pattern : Numbers display', () => {
  let joinAndUpdate;
  beforeEach(() => {
    setupPlaygroundFromIndexFile();
    joinAndUpdate = require('./05-join-and-update-pattern-numbers-display');
  });

  describe('container', () => {
    it('should be exported ', () => {
      expect(joinAndUpdate.container).toBeDefined();
    });

    it('should return the #demo-join-and-update-pattern selection', () => {
      expect(joinAndUpdate.container.attr('id')).toBe(
        'demo-join-and-update-pattern'
      );
    });
  });

  describe('svg', () => {
    it('should be exported ', () => {
      expect(joinAndUpdate.svg).toBeDefined();
    });

    it('should return the svg selection', () => {
      expect(joinAndUpdate.svg.attr('id')).toBe('root');
    });

    it(`should have a width`, () => {
      expect(+joinAndUpdate.svg.attr('width')).toBe(joinAndUpdate.width);
    });

    it(`should have a height`, () => {
      expect(+joinAndUpdate.svg.attr('height')).toBe(joinAndUpdate.height);
    });
  });

  describe('g', () => {
    it('should be exported ', () => {
      expect(joinAndUpdate.g).toBeDefined();
    });

    it(`should have a transform attribute`, () => {
      expect(joinAndUpdate.g.attr('transform')).toBe(
        `translate(45,${joinAndUpdate.height / 2})`
      );
    });
  });

  describe('Update method', () => {
    it('should be exported ', () => {
      expect(joinAndUpdate.update).toBeDefined();
    });

    describe('Enter phase', () => {
      let numbers;

      beforeEach(() => {
        numbers = new Array(5).fill(0).map((val, i) => i);
        setupPlayground();
      });

      it('should add new texts that are not bound to DOM elements', () => {
        joinAndUpdate.update(numbers);

        const els = joinAndUpdate.g.selectAll('text');
        expect(els.size()).toBe(5);
      });

      it('should add new texts with the "new" class name', () => {
        joinAndUpdate.update(numbers);
        joinAndUpdate.update(numbers.concat([7, 8]));

        const els = joinAndUpdate.g.selectAll('text.new');

        expect(els.size()).toBe(2);
      });

      it('should have "dy" attribute of .35em for all texts', () => {
        joinAndUpdate.update(numbers);

        const els = joinAndUpdate.g.selectAll('text');

        els.each(function() {
          const dy = d3.select(this).attr('dy');
          expect(dy).toBe('.35em');
        });
      });

      it('should have text set based on the array value', () => {
        joinAndUpdate.update(numbers);
        const els = joinAndUpdate.g.selectAll('text');

        els.each(function(val, i) {
          const text = d3.select(this).text();
          expect(text).toBe(i.toString());
        });
      });
    });

    describe('Exit phase', () => {
      let numbers;

      beforeEach(() => {
        numbers = new Array(5).fill(0).map((val, i) => i);
        joinAndUpdate.update(numbers);
      });

      it('should remove all texts, that are not bound anymore to DOM elements, when inputs = []', () => {
        joinAndUpdate.update([]);
        const els = joinAndUpdate.g.selectAll('text');
        expect(els.size()).toBe(0);
      });

      it('should remove all texts excepts element bound to 2 when inputs = [2]', () => {
        joinAndUpdate.update([2]);

        const els = joinAndUpdate.g.selectAll('text');
        expect(els.size()).toBe(1);
      });
    });

    describe('Update phase', () => {
      beforeEach(() => {
        joinAndUpdate.update([1]);
      });

      it('should have the "updated" class name', () => {
        joinAndUpdate.update([1, 2, 3]);

        const els = joinAndUpdate.g.selectAll('text.updated');
        expect(els.size()).toBe(1);
      });
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
