import fs from 'fs';
import path from 'path';
import {
  querySelectAllElementWithSampleClassName,
  querySelectAllP,
  querySelectDiv,
  querySelectDivWithDemoSelectionId,
  querySelectElementWithSampleClassName,
  querySelectFirstPElement,
  selectAllElementWithSampleClassName,
  selectAllP,
  selectDiv,
  selectDivWithDemoSelectionId,
  selectElementWithSampleClassName,
  selectFirstPElement
} from './02-selection';
import {getFirstArgsOfFirstCall, setupPlayground} from './utils';

const playground = fs.readFileSync(
  path.join(__dirname, '../demo/index.html'),
  'utf8'
);

describe('Selection', () => {
  let d3;

  beforeEach(() => {
    const html = `
      <div id="demo-selection" style="width: 90%;">
          <p id="first"></p>
          <p class="sample"></p>
          <span class="sample"></span>
          <p id="demo"></p>
          <div><p></p></div>
      </div>
    `;
    setupPlayground(html);

    d3 = {
      select: jest.fn(),
      selectAll: jest.fn()
    };
  });

  describe('document.querySelector', () => {
    it('should return a div', () => {
      const el = querySelectDiv();
      expect(el.nodeName).toBe('DIV');
    });

    it('should return the div with the id "demo-selection"', () => {
      const el = querySelectDivWithDemoSelectionId();
      expect(el.id).toBe('demo-selection');
    });

    it('should return an element with the "sample" class name', () => {
      const el = querySelectElementWithSampleClassName();
      expect(el.classList.contains('sample')).toBeTruthy();
    });

    it(
      'should return the first <p> element in the document where ' +
        'the parent is a <div id="demo-selection"> element',
      () => {
        const el = querySelectFirstPElement();
        expect(el.id).toBe('first');
      }
    );
  });

  describe('document.querySelectorAll', () => {
    it('should return all <p>', () => {
      const els = querySelectAllP();

      expect(els.length).toBeGreaterThan(2);
      expect(els[0].id).toBe('first');
    });

    it('should return all element with .sample', () => {
      const els = querySelectAllElementWithSampleClassName();

      expect(els.length).toBe(2);
      expect(els[0].nodeName).toBe('P');
    });
  });

  describe('d3.select', () => {
    it('should return a div', () => {
      const el = selectDiv(d3);

      expect(d3.select).toBeCalled();
      expect(d3.select).toBeCalledWith('div');
    });

    it('should return the div with the id "demo-selection"', () => {
      const el = selectDivWithDemoSelectionId(d3);

      expect(d3.select).toBeCalled();
      expect(getFirstArgsOfFirstCall(d3.select)).toContain('#demo-selection');
    });

    it('should return an element with the "sample" class name', () => {
      const el = selectElementWithSampleClassName(d3);

      expect(d3.select).toBeCalled();
      expect(getFirstArgsOfFirstCall(d3.select)).toContain('.sample');
    });

    it(
      'should return the first <p> element in the document where ' +
        'the parent is a <div id="demo-selection"> element',
      () => {
        selectFirstPElement(d3);

        expect(d3.select).toBeCalled();
        expect(getFirstArgsOfFirstCall(d3.select)).toContain(
          '#demo-selection > p'
        );
      }
    );
  });

  describe('d3.selectAll', () => {
    it('should return all <p>', () => {
      selectAllP(d3);

      expect(d3.selectAll).toBeCalled();
      expect(getFirstArgsOfFirstCall(d3.selectAll)).toContain('p');
    });

    it('should return all element with .sample', () => {
      selectAllElementWithSampleClassName(d3);

      expect(d3.selectAll).toBeCalled();
      expect(getFirstArgsOfFirstCall(d3.selectAll)).toContain('.sample');
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
