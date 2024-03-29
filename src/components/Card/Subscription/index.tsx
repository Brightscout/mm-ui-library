import React, {useMemo} from 'react';

// Components
import {PrivateChannelType} from '@Constants';

import BaseCard from '@Components/Card/Base';
import Popover from '@Components/Popover';
import MenuButtons from '@Components/Buttons/MenuButtons';
import {EventIcon} from '@Components/Icons';
import Tooltip from '@Components/Tooltip';

// Constants

type SubscriptionCardProps = {
    header: string | JSX.Element;
    label?: string;
    cardBody?: SubscriptionCardBody;
    description?: string;
    channel?: ChannelData | null;
    onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    editIcon?: JSX.Element;
    deleteIcon?: JSX.Element;
    className?: string;
}

const SubscriptionCard = ({
    header,
    label,
    cardBody,
    description,
    onDelete,
    onEdit,
    channel,
    editIcon,
    deleteIcon,
    className = '',
}: SubscriptionCardProps) => {
    const buttonMenuPopover = useMemo(() => (
        <Popover
            popoverBody={
                <MenuButtons
                    buttons={[
                        {
                            icon: editIcon ?? 'fa fa-pencil-square-o',
                            text: 'Edit',
                            onClick: onEdit,
                        },
                        {
                            icon: deleteIcon ?? 'fa fa-trash-o',
                            text: 'Delete',
                            onClick: onDelete,
                            className: 'error-text',
                        },
                    ]}
                />
            }
            className='subscription-card__popover'
        >
            <button className='style--none subscription-card__menu-btn plugin-btn'>
                <i className='fa fa-ellipsis-v'/>
            </button>
        </Popover>
    ), [onEdit, onDelete]);

    return (
        <BaseCard className={`subscription-card margin-bottom-15 ${className}`}>
            <>
                <div className='margin-bottom-10 d-flex justify-content-between'>
                    <Tooltip tooltipContent={header}>
                        <p className='margin-0 wt-500 text-ellipsis'>
                            {header}
                        </p>
                    </Tooltip>
                    {buttonMenuPopover}
                </div>
                {channel && (
                    <div className='subscription-card__channel margin-bottom-12 d-flex align-items-center'>
                        <i className={`channel-icon margin-right-5 ${channel.type === PrivateChannelType ? 'icon icon-lock-outline' : 'icon icon-globe'}`}/>
                        <span className='subscription-card__channel-text font-14 text-ellipsis'>{channel.display_name}</span>
                    </div>
                )}
                {label && <div className='subscription-card__label padding-v-2 padding-h-5 text-capitalize font-10 wt-600 margin-bottom-10 channel-text d-inline-block border-radius-4'>{label}</div>}
                {(cardBody || description) && (
                    <ul className='subscription-card__body padding-0 margin-0 font-14'>
                        <div className='d-flex'>
                            {!!cardBody?.list?.length && <EventIcon/>}
                            <div className='flex-column'>
                                {cardBody?.list?.map((listItem: string | JSX.Element, index: number) => (
                                    <li
                                        key={index}
                                        className='subscription-card__body-item subscription-card__body-item--list font-12'
                                    >
                                        {listItem}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className='margin-top-10'>{cardBody?.filters}</div>
                        <div className='margin-top-10'>
                            {cardBody?.labelValuePairs?.map((bodyItem) => (
                                <li
                                    key={bodyItem.label}
                                    className='text-ellipsis subscription-card__body-item margin-bottom-10'
                                >
                                    <span className='subscription-card__body-header wt-600 margin-right-10'>{bodyItem.label + ':'}</span>
                                    <span className='subscription-card__body-text'>{bodyItem.value}</span>
                                </li>
                            ))}
                        </div>
                        {description && (
                            <li
                                className='subscription-card__body-item'
                            >
                                {description}
                            </li>
                        )}
                    </ul>
                )}
            </>
        </BaseCard>
    );
};

export default SubscriptionCard;
