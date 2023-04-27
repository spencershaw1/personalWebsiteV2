import { useEffect, useState } from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {

        const updatePosition = () => {
            console.log('scrollPos: ' + scrollPosition.toString);
            console.log('windowScY: ' + window.scrollY);
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, [])
    
    return scrollPosition;
}
 


export default useScrollPosition;