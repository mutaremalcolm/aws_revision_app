//Hook for handling outside clicks
import { useEffect } from "react";

export const useOutsideClick = (
    refs: React.RefObject<HTMLElement>[],
    callback: () => void
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            //Check if the click was outside all given refs
            const clickedOutside = refs.every(ref =>
                !ref.current || !ref.current.contains(event.target as Node)
            );

            if (clickedOutside) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [refs, callback])
};