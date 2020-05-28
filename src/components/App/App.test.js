import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import App from './index';
import Banner from '../Banner';
import Header from '../Header';


const setup = (propOverrides) => {
  const renderer = createRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  return output;
};

const output = setup();

describe('components', () => {
  describe('<App />', () => {
    it('should render and have <div>', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('App');
    });
    const firstElement = output.props.children;
    it('should render <main> element as only child and have content', () => {
      expect(firstElement.type).toBe('main');
    });
    const firstElementChild = firstElement.props.children;
    it('should render <div> element as firstElementChild and have content', () => {
      expect(firstElementChild.type).toBe('div');
      expect(firstElementChild.props.className).toBe('main_div');
    });
  });
});
