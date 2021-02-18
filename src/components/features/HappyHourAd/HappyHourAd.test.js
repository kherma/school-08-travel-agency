import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
};

describe('Compoennt HappyHourAd', () => {
  it('Should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('Should contains title and countdown elements', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toBeTruthy();
    expect(component.exists(select.countdown)).toBeTruthy();
  });
});
