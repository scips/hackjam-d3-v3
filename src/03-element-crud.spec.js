import d3 from 'd3';
import {
  addPToDivDemoSelectionElementCrudWithoutAppendMethod,
  appendInTheFirstPositionToDivDemoSelectionElementCrud,
  appendPToDivDemoSelectionElementCrud,
  appendSpanToAllLink,
  applyBtnAndBtnLgClass,
  checkCheckMe,
  getColorOfIAmBlue,
  getDisabledStatus,
  getHrefOfHackagesLink,
  getTheInnerHtmlOfD3Link,
  getTheInnerTextOfHackagesLink,
  removeBtnClass,
  removeDivDemoSelectionElementCrud,
  selectAllLinkAndAddLinkClass,
  setBackgroundColorRed,
  setHrefOfD3Link,
  setTheInnerHtmlOfD3Link,
  setTheInnerTextOfHackagesLink,
  toggleChecked
} from './03-element-crud';
import {setupPlayground} from './utils';

describe('Element CRUD', () => {
  beforeEach(() => {
    const html = `
      <div id="demo-selection-element-crud" style="width: 90%;">
          <h1>hj</h1>
          <a id="hackages-link" href="https://hackages.io/">Hackages</a>
          <a id="d3-link"><span>D3</span></a>
          <p id="i-am-red"> I should have a background color 'red'</p>
          <p id="i-am-blue" style="color:blue;"> da ba dee da ba daa </p>
          <input type="checkbox" id="toggleChecked">Toggle me </input>
          <input type="checkbox" id="check-me"> I should be checked</input>
          <button disabled="true" id="disabled-button"> I should not be disabled</button>
          <input type="submit" class="btn"/>
          <button id="style-me"></button>
      </div>
    `;
    setupPlayground(html);
  });

  describe('selection.attr', () => {
    it('should return the href of <a id="hackages-link"/> ', () => {
      const href = getHrefOfHackagesLink(d3);
      expect(href).toBe('https://hackages.io/');
    });

    it('should set "https://d3js.org/" to the href of <a id="d3-link"/> ', () => {
      const link = 'https://d3js.org/';
      const selection = setHrefOfD3Link(d3)(link);

      expect(selection.attr('href')).toBe(link);
    });

    it('should select all <a /> and add them the "link" class', () => {
      selectAllLinkAndAddLinkClass(d3);

      document.querySelectorAll('a').forEach(function(el) {
        expect(el.classList.contains('link')).toBeTruthy();
      });
    });

    it('should toggle the checked state of <input type="checkbox" id="toggleChecked" />', () => {
      // document.querySelector('#toggleChecked').setAttribute('checked', true);
      let selection = toggleChecked(d3);
      expect(selection.attr('checked')).toEqual('true');

      selection = toggleChecked(d3);
      expect(selection.attr('checked')).toEqual('false');
    });
  });

  describe('selection.style', () => {
    it('should set the background-color red to <p id="i-am-red"/>', () => {
      const selection = setBackgroundColorRed(d3);
      expect(selection.style('background-color')).toBe('red');
    });

    it('should get the color style of <p style="color:blue;" id="i-am-blue" > da ba dee da ba daa </p>', () => {
      const color = getColorOfIAmBlue(d3);

      expect(color).toBe('blue');
    });
  });

  describe('selection.property', () => {
    it('should get the disabled state of <button disabled="true" id="disabled-button"/> ', () => {
      const disabled = getDisabledStatus(d3);

      expect(disabled).toBe(true);
    });

    it('should check <input type="checkbox" id="check-me"/> ', () => {
      const selection = checkCheckMe(d3);

      expect(selection.property('checked')).toBe(true);
    });
  });

  describe('selection.classed', () => {
    it('should remove the "btn" class on <input type="submit" class="btn"/> ', () => {
      const selection = removeBtnClass(d3);

      expect(selection.classed('btn')).toBe(false);
    });

    it('should apply the "btn btn-lg" class on <button id="style-me"/> ', () => {
      const selection = applyBtnAndBtnLgClass(d3);

      expect(selection.attr('class')).toBe('btn btn-lg');
    });
  });

  describe('selection.text && selection.html', () => {
    it('should get the innerText of <a id="hackages-link" />', () => {
      const text = getTheInnerTextOfHackagesLink(d3);

      expect(text).toBe('Hackages');
    });

    it('should get the innerHTML of <a id="d3-link" />', () => {
      const html = getTheInnerHtmlOfD3Link(d3);

      expect(html).toBe('<span>D3</span>');
    });

    it('should set the innerText of <a id="hackages-link" /> to D3', () => {
      const selection = setTheInnerTextOfHackagesLink(d3);

      expect(selection.text()).toBe('D3');
    });

    it('should set the innerHTML of <a id="d3-link" /> to hackages', () => {
      const selection = setTheInnerHtmlOfD3Link(d3);

      expect(selection.html()).toBe('hackages');
    });
  });

  describe('selection.append && selection.insert', () => {
    it('should append a <p id="appended"/> to <div id="demo-selection-element-crud" />', () => {
      appendPToDivDemoSelectionElementCrud(d3);

      expect(
        document.querySelector('#demo-selection-element-crud').lastChild.id
      ).toBe('appended');
    });

    it('should append a <span class="appended-to-link"/> to all <a/>', () => {
      appendSpanToAllLink(d3);

      expect(document.querySelectorAll('.appended-to-link').length).toBe(2);
    });

    it('should append a <p id="appended"/> to <div id="demo-selection-element-crud" /> without using .append', () => {
      addPToDivDemoSelectionElementCrudWithoutAppendMethod(d3);

      expect(
        document.querySelector('#demo-selection-element-crud').lastChild.id
      ).toBe('appended');
    });

    it('should append a <h2/> to <div id="demo-selection-element-crud" /> in the first position', () => {
      appendInTheFirstPositionToDivDemoSelectionElementCrud(d3);
      const t = document.querySelector('#demo-selection-element-crud')
        .firstElementChild;
      expect(
        document.querySelector('#demo-selection-element-crud').firstElementChild
          .nodeName
      ).toBe('H2');
    });
  });

  describe('selection.remove', () => {
    it('should remove <div id="demo-selection-element-crud" />', () => {
      removeDivDemoSelectionElementCrud(d3);

      expect(document.querySelector('#demo-selection-element-crud')).toBeNull();
    });
  });

  // Event handling

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
