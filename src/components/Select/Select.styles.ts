import styled from 'styled-components';

import Colors from '@Styles/colorsForJs.module.scss';

import {InputProps} from './Select';

export const Wrapper = styled.div({
    position: 'relative',
});

// Styles for the label
export const Label = styled.label<InputProps>(({leadingIcon}) => {
    return {
        ...(leadingIcon ? {left: '24px', margin: '0 10px'} : {left: '12px'}),
        padding: '0 4px',
        position: 'absolute',
        color: Colors.centerChannel_64,
        fontSize: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        transitionDuration: '0.1s',
        pointerEvents: 'none',
    };
});

// Styles for the input
export const Input = styled.input<InputProps>(({leadingIcon}) => {
    return {
        ...(leadingIcon ? {padding: '11px 36px'} : {padding: '11px 32px 11px 16px'}),
        width: '100%',
        fontSize: '14px',
        lineHeight: '16px',
        color: Colors.centerChannel,
        border: `1px solid ${Colors.centerChannel_16}`,
        borderRadius: '4px',
        cursor: 'pointer',
        boxSizing: 'border-box',

        '&:focus': {
            outline: `2px solid ${Colors.primary}`,
        },

        '&:focus + label': {
            color: Colors.primary,
        },

        '&:focus + label , &:not(:placeholder-shown) + label': {
            top: 0,
            left: '10px',
            fontSize: '10px',
        },
    };
});

// Styles for the leading icon
export const LeadingIcon = styled.div({
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '16px',
    transform: 'translateY(-50%)',
});

// Styles for the trailing icon
export const TrailingIcon = styled.div({
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    right: '16px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    boxSizing: 'border-box',

    '& .mm-icon': {
        pointerEvents: 'none',
    },
});