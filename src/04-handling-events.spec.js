import d3 from 'd3';
import {listenClickOnAllButtons, listenInputEvent} from './04-handling-events';
import {createMouseEvent, setupPlayground} from './utils';

describe('Handling events', () => {
  let listener;
  beforeEach(() => {
    const html = `
      <div id="demo-handling-events" style="width: 90%;">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <input type="text" id="writer"/>
      </div>
    `;
    setupPlayground(html);

    listener = jest.fn();
  });

  it('should listen the click event on all button of <div id="demo-handling-events" />', () => {
    listenClickOnAllButtons(d3, listener);

    const event = createMouseEvent('click');

    document.querySelectorAll('#demo-handling-events button').forEach(el => {
      el.dispatchEvent(event);
    });
    expect(listener.mock.calls.length).toBe(3);
  });

  it('should listen the click event on all button of <div id="demo-handling-events" />', () => {
    listenClickOnAllButtons(d3, listener);

    const event = createMouseEvent('click');

    document.querySelectorAll('#demo-handling-events button').forEach(el => {
      el.dispatchEvent(event);
    });
    expect(listener.mock.calls.length).toBe(3);
  });

  it('should listen the input event on <input type="text" id="writer"/>', () => {
    listenInputEvent(d3, listener);

    document.querySelector('#writer').dispatchEvent(new Event('input'));
    expect(listener.mock.calls.length).toBe(1);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
