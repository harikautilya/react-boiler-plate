import { useMediaQuery } from 'react-responsive';

export const isMobile = useMediaQuery({ query: `(max-width: 760px)` });