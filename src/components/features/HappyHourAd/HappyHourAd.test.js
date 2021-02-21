import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
};

const mockProps = {
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
  it('Should render correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTitle = component.find(select.title).text();
    expect(renderedTitle).toEqual(mockProps.title);
  });
});

const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.countdown).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});
