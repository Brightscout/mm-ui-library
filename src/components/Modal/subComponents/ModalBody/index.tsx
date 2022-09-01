import React from 'react';
import {Modal as RBModal} from 'react-bootstrap';

type ModalBodyProps = {
    children?: JSX.Element;
    className?: string;
}

const ModalBody = ({
    children,
    className = '',
}: ModalBodyProps) : JSX.Element => (
    <>
        {children && (
            <RBModal.Body className={`modal__body ${className}`}>
                {children}
            </RBModal.Body>
        )}
    </>
);

export default ModalBody;
