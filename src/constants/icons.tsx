import React from 'react';

type SvgIconNames = 'servicenow' | 'bell' | 'unlink' | 'globe' | 'lock' | 'edit' | 'delete' | 'check' | 'user' | 'link';

const SVGIcons: Record<SvgIconNames, JSX.Element> = {
    servicenow: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14 0.478516C6.40348 0.478516 0.434784 6.59114 0.434784 14.3708C0.434784 18.4459 2.06262 22.1505 4.59479 24.7438C5.49914 25.6699 7.12696 25.6699 8.21218 24.929C9.65914 23.6324 11.8296 22.8915 14 22.8915C16.3513 22.8915 18.16 23.6324 19.7878 24.929C20.8731 25.8552 22.32 25.6699 23.4052 24.5585C25.9374 21.9653 27.5652 18.4459 27.5652 14.3708C27.3843 6.77637 21.4157 0.478516 14 0.478516ZM13.8191 21.5948C9.65913 21.5948 6.9461 18.4459 6.9461 14.5561C6.9461 10.6662 9.65913 7.51729 13.8191 7.51729C17.9791 7.51729 20.6922 10.6662 20.6922 14.5561C20.6922 18.4459 17.9791 21.5948 13.8191 21.5948Z'
        />
    ),
    bell: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M41.2857 39.2122L9.0898 7L7 9.07347L14.7061 16.7796C13.8245 18.4286 13.351 20.2735 13.351 22.1347V31.9306L10.0857 35.1959V36.8286H34.7551L39.2122 41.2857L41.2857 39.2122ZM16.6163 33.5633V22.1347C16.6163 21.1388 16.7959 20.1592 17.1714 19.2449L31.4898 33.5633H16.6163ZM21.5143 38.4612H28.0449C28.0449 39.3272 27.7009 40.1578 27.0885 40.7701C26.4761 41.3825 25.6456 41.7265 24.7796 41.7265C23.9136 41.7265 23.083 41.3825 22.4707 40.7701C21.8583 40.1578 21.5143 39.3272 21.5143 38.4612ZM18.7224 12.4857C19.5878 11.9306 20.5347 11.5224 21.5143 11.1796C21.5143 11.0163 21.5143 10.8694 21.5143 10.7061C21.5143 9.84011 21.8583 9.00957 22.4707 8.3972C23.083 7.78484 23.9136 7.44082 24.7796 7.44082C25.6456 7.44082 26.4761 7.78484 27.0885 8.3972C27.7009 9.00957 28.0449 9.84011 28.0449 10.7061C28.0449 10.8694 28.0449 11.0163 28.0449 11.1796C32.8939 12.6163 36.2082 17.0735 36.2082 22.1347V29.9714L32.9429 26.7061V22.1347C32.9429 19.9697 32.0828 17.8933 30.5519 16.3624C29.021 14.8315 26.9446 13.9714 24.7796 13.9714C23.5061 13.9714 22.249 14.298 21.1224 14.8857L18.7224 12.4857Z'
        />
    ),
    unlink: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M7 11.4394L9.26166 9.1954L38.8046 38.7383L36.5606 41L28.0264 32.4658L23.4147 37.0774C19.9692 40.5229 14.3681 40.5229 10.9226 37.0774C7.47707 33.6319 7.47707 28.0308 10.9226 24.5853L13.5553 21.9526C13.5376 23.4015 13.7673 24.8503 14.2621 26.2462L13.4316 27.0767C11.3466 29.144 11.3466 32.5011 13.4316 34.5684C15.4989 36.6534 18.856 36.6534 20.9233 34.5684L25.5527 29.9744L22.6903 27.1297C22.6726 27.5537 22.4959 27.9955 22.1779 28.3312C21.4888 29.0203 20.3579 29.0203 19.6688 28.3312C17.8136 26.4582 16.9478 23.9845 17.1068 21.5639L7 11.4394ZM25.9237 9.58412C29.3692 6.13863 34.9704 6.13863 38.4159 9.58412C41.8614 13.0296 41.8614 18.6308 38.4159 22.0763L35.7832 24.709C35.8008 23.2601 35.5711 21.8112 35.0764 20.433L35.9068 19.5849C37.9918 17.5176 37.9918 14.1605 35.9068 12.0932C33.8395 10.0082 30.4824 10.0082 28.4151 12.0932L22.5312 17.977L20.0399 15.468L25.9237 9.58412ZM27.1606 18.3304C27.8497 17.6413 28.9805 17.6413 29.6696 18.3304C32.0903 20.7511 32.8147 24.2142 31.8429 27.271L28.6978 24.1436C28.6095 22.9421 28.097 21.7582 27.1606 20.8394C26.4361 20.1503 26.4361 19.0195 27.1606 18.3304Z'
        />
    ),
    globe: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M7.00002 1.1665C3.79169 1.1665 1.16669 3.7915 1.16669 6.99984C1.16669 10.2082 3.79169 12.8332 7.00002 12.8332C10.2084 12.8332 12.8334 10.2082 12.8334 6.99984C12.8334 3.7915 10.2084 1.1665 7.00002 1.1665ZM11.6667 7.2915C11.4917 7.52484 10.675 7.9915 9.33335 8.22484C9.33335 7.8165 9.33335 7.40817 9.33335 6.99984C9.33335 6.70817 9.33335 6.47484 9.33335 6.2415C10.0334 6.12484 10.7334 5.94984 11.2584 5.7165C11.3167 5.65817 11.4334 5.65817 11.4917 5.59984C11.6084 6.00817 11.6667 6.53317 11.6667 6.99984C11.6667 7.1165 11.6667 7.17484 11.6667 7.2915ZM6.12502 9.5665C6.41669 9.5665 6.70835 9.62484 7.00002 9.62484C7.29169 9.62484 7.58335 9.62484 7.87502 9.5665C7.58335 10.7332 7.23335 11.4332 7.00002 11.6082C6.76669 11.4332 6.35835 10.7332 6.12502 9.5665ZM7.00002 8.45817C6.59169 8.45817 6.24169 8.45817 5.89169 8.39984C5.89169 7.9915 5.83335 7.52484 5.83335 6.99984C5.83335 6.7665 5.83335 6.5915 5.83335 6.35817C6.24169 6.4165 6.59169 6.4165 7.00002 6.4165C7.40835 6.4165 7.75835 6.4165 8.16669 6.35817C8.16669 6.5915 8.16669 6.7665 8.16669 6.99984C8.16669 7.52484 8.10835 7.9915 8.10835 8.39984C7.75835 8.45817 7.40835 8.45817 7.00002 8.45817ZM8.05002 5.1915C7.70002 5.24984 7.35002 5.24984 7.00002 5.24984C6.65002 5.24984 6.30002 5.24984 5.95002 5.1915C6.18335 3.55817 6.70835 2.5665 7.00002 2.33317C7.29169 2.5665 7.81669 3.55817 8.05002 5.1915ZM10.9667 4.54984C10.5584 4.72484 9.97502 4.95817 9.21669 5.07484C9.10002 4.1415 8.86669 3.2665 8.57502 2.62484C9.56669 2.97484 10.3834 3.6165 10.9667 4.54984ZM3.03335 4.54984C3.61669 3.67484 4.43335 2.97484 5.48335 2.62484C5.19169 3.2665 4.95835 4.08317 4.78335 5.07484C4.02502 4.89984 3.44169 4.72484 3.03335 4.54984ZM2.56669 5.59984C2.62502 5.65817 2.68335 5.65817 2.80002 5.7165C3.32502 5.94984 3.96669 6.12484 4.72502 6.2415C4.66669 6.47484 4.66669 6.70817 4.66669 6.99984C4.66669 7.40817 4.66669 7.8165 4.72502 8.22484C3.38335 7.9915 2.56669 7.52484 2.39169 7.2915C2.39169 7.17484 2.39169 7.1165 2.39169 6.99984C2.33335 6.53317 2.39169 6.00817 2.56669 5.59984ZM2.74169 8.8665C3.32502 9.09984 4.08335 9.33317 4.90002 9.44984C5.01669 10.2082 5.25002 10.8498 5.48335 11.3748C4.25835 10.9665 3.26669 10.0332 2.74169 8.8665ZM11.2584 8.8665C10.7334 10.0332 9.74169 10.9665 8.51669 11.3748C8.75002 10.8498 8.98335 10.2082 9.10002 9.44984C9.91669 9.33317 10.675 9.15817 11.2584 8.8665Z'
        />
    ),
    lock: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M10.5 11.6665V6.4165H3.49998V11.6665H10.5ZM10.5 5.24984C11.1416 5.24984 11.6666 5.77484 11.6666 6.4165V11.6665C11.6666 12.3082 11.1416 12.8332 10.5 12.8332H3.49998C2.85831 12.8332 2.33331 12.3082 2.33331 11.6665V6.4165C2.33331 5.77484 2.85831 5.24984 3.49998 5.24984H4.08331V4.08317C4.08331 2.44984 5.36665 1.1665 6.99998 1.1665C8.63331 1.1665 9.91665 2.44984 9.91665 4.08317V5.24984H10.5ZM6.99998 2.33317C6.00831 2.33317 5.24998 3.0915 5.24998 4.08317V5.24984H8.74998V4.08317C8.74998 3.0915 7.99165 2.33317 6.99998 2.33317Z'
        />
    ),
    edit: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M7.17468 3.98398H5.22649C4.44715 3.98398 4.05748 3.98398 3.7598 4.13565C3.49797 4.26907 3.28508 4.48195 3.15167 4.74379C3 5.04146 3 5.43113 3 6.21048V10.1068C3 10.8862 3 11.2759 3.15167 11.5735C3.28508 11.8354 3.49797 12.0482 3.7598 12.1817C4.05748 12.3333 4.44715 12.3333 5.22649 12.3333H9.12286C9.9022 12.3333 10.2919 12.3333 10.5895 12.1817C10.8514 12.0482 11.0643 11.8354 11.1977 11.5735C11.3494 11.2759 11.3494 10.8862 11.3494 10.1068V8.15866M5.78311 9.55022H6.55985C6.78676 9.55022 6.90021 9.55022 7.00698 9.52458C7.10164 9.50186 7.19213 9.46437 7.27513 9.41351C7.36875 9.35614 7.44898 9.27591 7.60943 9.11547L12.0451 4.67976C12.4294 4.29549 12.4294 3.67247 12.0451 3.2882C11.6609 2.90393 11.0378 2.90393 10.6536 3.2882L6.21786 7.72391C6.05741 7.88436 5.97718 7.96458 5.91981 8.0582C5.86895 8.1412 5.83146 8.2317 5.80874 8.32636C5.78311 8.43312 5.78311 8.54658 5.78311 8.77349V9.55022Z'
            strokeOpacity='0.64'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    ),
    delete: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M9.77778 4.86667V4.49333C9.77778 3.97062 9.77778 3.70926 9.68089 3.50961C9.59567 3.33399 9.45969 3.19121 9.29244 3.10173C9.10229 3 8.85338 3 8.35556 3H7.64444C7.14662 3 6.89771 3 6.70756 3.10173C6.54031 3.19121 6.40433 3.33399 6.31911 3.50961C6.22222 3.70926 6.22222 3.97062 6.22222 4.49333V4.86667M7.11111 7.43333V9.76667M8.88889 7.43333V9.76667M4 4.86667H12M11.1111 4.86667V10.0933C11.1111 10.8774 11.1111 11.2694 10.9658 11.5689C10.838 11.8323 10.634 12.0465 10.3831 12.1807C10.0979 12.3333 9.72451 12.3333 8.97778 12.3333H7.02222C6.27549 12.3333 5.90212 12.3333 5.6169 12.1807C5.36602 12.0465 5.16204 11.8323 5.03421 11.5689C4.88889 11.2694 4.88889 10.8774 4.88889 10.0933V4.86667'
            strokeOpacity='0.64'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    ),
    check: (
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M19 0C8.55 0 0 8.55 0 19C0 29.45 8.55 38 19 38C29.45 38 38 29.45 38 19C38 8.55 29.45 0 19 0ZM19 34.2C10.621 34.2 3.8 27.379 3.8 19C3.8 10.621 10.621 3.8 19 3.8C27.379 3.8 34.2 10.621 34.2 19C34.2 27.379 27.379 34.2 19 34.2ZM27.721 10.602L15.2 23.123L10.279 18.221L7.6 20.9L15.2 28.5L30.4 13.3L27.721 10.602Z'
        />
    ),
    user: (
        <path
            d='M8.33333 8.33333C9.80667 8.33333 11 7.14 11 5.66667C11 4.19333 9.80667 3 8.33333 3C6.86 3 5.66667 4.19333 5.66667 5.66667C5.66667 7.14 6.86 8.33333 8.33333 8.33333ZM8.33333 4.33333C9.06667 4.33333 9.66667 4.93333 9.66667 5.66667C9.66667 6.4 9.06667 7 8.33333 7C7.6 7 7 6.4 7 5.66667C7 4.93333 7.6 4.33333 8.33333 4.33333ZM8.33333 9.66667C6.55333 9.66667 3 10.56 3 12.3333V13.6667H13.6667V12.3333C13.6667 10.56 10.1133 9.66667 8.33333 9.66667ZM4.33333 12.3333C4.48 11.8533 6.54 11 8.33333 11C10.1333 11 12.2 11.86 12.3333 12.3333H4.33333Z'
            fill='#323232'
        />
    ),
    link: (
        <path
            d='M11.3333 4.66675H8.66659V6.00008H11.3333C12.4333 6.00008 13.3333 6.90008 13.3333 8.00008C13.3333 9.10008 12.4333 10.0001 11.3333 10.0001H8.66659V11.3334H11.3333C13.1733 11.3334 14.6666 9.84008 14.6666 8.00008C14.6666 6.16008 13.1733 4.66675 11.3333 4.66675ZM7.33325 10.0001H4.66659C3.56659 10.0001 2.66659 9.10008 2.66659 8.00008C2.66659 6.90008 3.56659 6.00008 4.66659 6.00008H7.33325V4.66675H4.66659C2.82659 4.66675 1.33325 6.16008 1.33325 8.00008C1.33325 9.84008 2.82659 11.3334 4.66659 11.3334H7.33325V10.0001ZM5.33325 7.33341H10.6666V8.66675H5.33325V7.33341Z'
            fill='#323232'
        />
    ),
};

export default SVGIcons;
