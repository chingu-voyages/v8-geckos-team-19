import {keyframes} from 'styled-components';

export const fadeZoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5, 0.5);
        filter: blur(10px);
        }
    to {
        opacity: 1;
        transform: scale(1, 1);
        filter: blur(0px);
        }
`;