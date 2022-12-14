import React from 'react';
import {mount, ReactWrapper} from 'enzyme';

// Mock data
import {
    modalFooterConfirmHandler as confirmHandler,
    modalFooterHideHandler as hideHandler,
    confirmBtnText,
    cancelBtnText,
    modalFooterProps,
} from '@Constants/mockData/modal';

import ModalFooter from '.';

describe('Modal Footer', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ModalFooter {...modalFooterProps}/>);
    });

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    });

    it('Should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should apply the passed "className" prop', () => {
        expect(component.hasClass(modalFooterProps.className)).toBeTruthy();
    });

    it('Should render the confirm button correctly with default text', () => {
        expect(component.find('.modal__confirm-btn').text().includes('Confirm')).toBeTruthy();
    });

    it('Should render the cancel button correctly with default text', () => {
        expect(component.find('.modal__cancel-btn').text().includes('Cancel')).toBeTruthy();
    });

    it('Should apply the class to confirm button', () => {
        expect(component.find('.modal__confirm-btn').hasClass(modalFooterProps.confirmBtnClassName)).toBeTruthy();
    });

    it('Should call the "onClick" handler when the confirm button is clicked', () => {
        component.find('.modal__confirm-btn').simulate('click');
        expect(confirmHandler).toHaveBeenCalledTimes(1);
    });

    it('Should call the "onClick" handler when the cancel button is clicked', () => {
        component.find('.modal__cancel-btn').simulate('click');
        expect(hideHandler).toHaveBeenCalledTimes(1);
    });
});

describe('Modal Footer - disabled footer buttons', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(
            <ModalFooter
                {...modalFooterProps}
                cancelDisabled={true}
                confirmDisabled={true}
            />,
        );
    });

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    });

    it('Should not call the "onClick" handler when the confirm button is clicked', () => {
        component.find('.modal__confirm-btn').simulate('click');
        expect(confirmHandler).toHaveBeenCalledTimes(0);
    });

    it('Should not call the "onClick" handler when the cancel button is clicked', () => {
        component.find('.modal__cancel-btn').simulate('click');
        expect(hideHandler).toHaveBeenCalledTimes(0);
    });
});

describe('Modal Footer - skip rendering the buttons', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(<ModalFooter/>);
    });

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    });

    it('Should not render the confirm button when "onConfirm" prop isn\'t passed', () => {
        expect(component.find('.modal__confirm-btn').exists()).toBeFalsy();
    });

    it('Should not render the cancel button when "onHide" prop isn\'t passed', () => {
        expect(component.find('.modal__cancel-btn').exists()).toBeFalsy();
    });
});

describe('Modal Footer - correctly render the passed button text props for confirm and cancel buttons', () => {
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        component = mount(
            <ModalFooter
                {...modalFooterProps}
                confirmBtnText={confirmBtnText}
                cancelBtnText={cancelBtnText}
            />,
        );
    });

    afterEach(() => {
        component.unmount();
        jest.clearAllMocks();
    });

    it('Should render the confirm button text correctly', () => {
        expect(component.find('.modal__confirm-btn').text().includes(confirmBtnText)).toBeTruthy();
    });

    it('Should render the cancel button text correctly', () => {
        expect(component.find('.modal__cancel-btn').text().includes(cancelBtnText)).toBeTruthy();
    });
});
