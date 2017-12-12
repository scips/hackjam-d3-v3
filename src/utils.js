import fs from 'fs';
import path from 'path';

export const setupPlaygroundFromIndexFile = () => {
  const playground = fs.readFileSync(
    path.join(__dirname, `../demo/index.html`),
    'utf8'
  );
  document.write(playground);
  document.close();
};

export const setupPlayground = html => {
  document.write(html);
  document.close();
};

export const getFirstArgsOfFirstCall = mockFn => {
  return mockFn.mock.calls[0][0];
};

export const createMouseEvent = typename => {
  return new MouseEvent(typename, {
    view: window,
    bubbles: true,
    cancelable: true
  });
};
