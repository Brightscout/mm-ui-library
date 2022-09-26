import React from 'react';
import {shallow} from 'enzyme';

import LinearLoader from '.';

describe('Linear Loader', () => {
    it('Should render correctly', () => {
        const component = shallow(<LinearLoader/>);
        expect(component).toMatchSnapshot();
    });
});
