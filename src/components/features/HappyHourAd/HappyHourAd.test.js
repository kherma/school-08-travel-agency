import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
};

const mockPorps = {
  title: 'Lorem ipsum title',
  countdown: 'Lorem ipsum countdown',
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
  it('Should render correct title & countdown', () => {
    const component = shallow(<HappyHourAd {...mockPorps} />);
    const renderedTitle = component.find(select.title).text();
    const renderedCountdown = component.find(select.countdown).text();
    expect(renderedTitle).toEqual(mockPorps.title);
    expect(renderedCountdown).toEqual(mockPorps.countdown);
  });
});
