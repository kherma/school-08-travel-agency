import React from 'react';
import OrderOption from './OrderOption';
import { shallow } from 'enzyme';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('Should render without crashing', () => {
    const component = shallow(<OrderOption type="type" name="name" />);
    expect(component).toBeTruthy();
  });
  it('Should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('Should render correct name', () => {
    const expectedName = 'Sample name';
    const component = shallow(
      <OrderOption name={expectedName} type="dropdown" />
    );
    expect(component.find('.title').text()).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          {...mockProps}
          {...mockPropsForType[type]}
          setOrderOption={mockSetOrderOption}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        it('Should contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('Should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('select')
            .simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
      case 'icons':
        it('Should contains correct icons', () => {
          const select = renderedSubcomponent
            .find('Icon')
            .not('[name="times-circle"]');
          expect(select.length).toBe(2);
          expect(select.at(0).prop('name')).toBe(mockProps.values[0].icon);
          expect(select.at(1).prop('name')).toBe(mockProps.values[1].icon);
        });
        it('Should contains divs with class icon', () => {
          const select = renderedSubcomponent.find('div.icon');
          expect(select.length).toBe(3);
        });
        it('Should run setOrderOption function on change', () => {
          renderedSubcomponent.find('div.icon').last().simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      case 'checkboxes':
        it('Should contains inputs with type of checkbox', () => {
          const select = renderedSubcomponent.find('input[type="checkbox"]');
          expect(select.length).toBe(mockProps.values.length);
          expect(select.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(select.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('Should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find(`input[value="${testValue}"]`)
            .simulate('change', { currentTarget: { checked: true } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: [mockProps.currentValue, testValue],
          });
        });
        break;
      case 'number':
        it('Should contains input with type of number', () => {
          const select = renderedSubcomponent.find('input[type="number"]');
          expect(select.length).toBe(1);
          expect(select.prop('value')).toBe(
            mockPropsForType.number.currentValue
          );
        });
        it('Should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('input[type="number"]')
            .simulate('change', { currentTarget: { value: testValueNumber } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValueNumber,
          });
        });
        break;
      case 'text':
        it('Should contains select and options', () => {
          const select = renderedSubcomponent.find('input[type="text"]');
          expect(select.length).toBe(1);
        });
        it('Should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('input[type="text"]')
            .simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      case 'date':
        it('Should render DatePicker compoennt', () => {
          const select = renderedSubcomponent.find(DatePicker);
          expect(select.prop('selected')).toBe(mockProps.currentValue);
        });
        it('Should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
    }
  });
}
