import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

describe('Compoennt HappyHourAd', () => {
  it('Should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
});
