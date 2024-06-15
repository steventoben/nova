import { debounce } from '@/util/debounce';
import React, { useRef, DependencyList, MutableRefObject } from 'react';


export interface IPosition {
    x: number;
    y: number;
}

interface IScrollProps {
    prevPos: IPosition;
    currPos: IPosition;
    prevTime: number;
    currTime: number;
}

type ElementRef = MutableRefObject<HTMLElement | undefined>;

const isBrowser = typeof window !== `undefined`;
const zeroPosition = { x: 0, y: 0 };

const getClientRect = (element?: HTMLElement) => element?.getBoundingClientRect();

const getScrollPosition = ({
                               element,
                               useWindow,
                               boundingElement,
                           }: {
    element?: ElementRef;
    boundingElement?: ElementRef;
    useWindow?: boolean;
}) => {
    if (!isBrowser) {
        return zeroPosition;
    }

    if (useWindow) {
        return { x: window.scrollX, y: window.scrollY };
    }

    const targetPosition = getClientRect(element?.current || document.body);
    const containerPosition = getClientRect(boundingElement?.current);

    if (!targetPosition) {
        return zeroPosition;
    }

    return containerPosition
        ? {
            x: (containerPosition.x || 0) - (targetPosition.x || 0),
            y: (containerPosition.y || 0) - (targetPosition.y || 0),
        }
        : { x: targetPosition.left, y: targetPosition.top };
};

export const useScrollPosition = (
    effect: (props: IScrollProps) => void,
    wait?: number,
    deps?: DependencyList,
    element?: ElementRef,
    useWindow?: boolean,
    boundingElement?: ElementRef,
): void => {
    //const {emitScrollEvent} = useTracking();
    const position = useRef(getScrollPosition({ useWindow, boundingElement }));

    const timing = React.useRef(0);

    const initScroll = React.useRef(true);
    let throttleTimeout: number | null = null;
    const timeoutRef = React.useRef<number|null>(null);

    const startOfStream = React.useRef(true);

    const callBack = (isStartOfScroll?: boolean) => {
        //console.log('Scroll state: start? = ' + initScroll.current);
        const currPos = getScrollPosition({ element, useWindow, boundingElement });
        const currTime = performance.now();
        effect({ prevPos: position.current, currPos, prevTime: timing.current, currTime });
        //console.log('after effect');
        position.current = currPos;
        timing.current = currTime;
        throttleTimeout = null;
        timeoutRef.current = null;
        //console.log('*********** END SCROLL ***********');
        //emitScrollEvent({scrollState: 'stopped'});
        startOfStream.current = true;
        /*const stopped = debounce(() => {
            console.log(position.current + ' ***********');
        }, 500);
        stopped();
        initScroll.current = false;
        const a = debounce(() => {
            console.log('____________________');
            console.log('*********** END SCROLL ***********');
        }, 500);
        if(!initScroll.current) {
            a();
        }*/
    };

    React.useLayoutEffect(() => {
        //console.log('using layout effect');
        if (!isBrowser) {
            return undefined;
        }

        const handleScroll = () => {
          //  console.log('Handle Scroll');
            if (wait) {
                let b = true;
                //if (throttleTimeout === null) {
                if (timeoutRef.current === null) {
                    b = false;
            //        console.log('ThrottleTimeout null, setting it to timeout');
                    //throttleTimeout = window.setTimeout(callBack, wait, b);
                    timeoutRef.current = window.setTimeout(callBack, wait, b);

                } else {
              //      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$');
                }
            } else {
                //console.log('E');
                callBack(true);
            }
        };
        /*const f = () => {
            console.log('started scrolling');
            debounce(handleScroll, 500)();
        }*/
        function an() {
            if(startOfStream.current) {
                console.log('Scroll stream start');
                //emitScrollEvent({scrollState: 'start'});
                startOfStream.current = false;
            }
            debounce(handleScroll, 500);
        }
        /*fromEvent(window, 'scroll').pipe(
            debounceTime(500)
        ).subscribe()*/

            console.log('add event listener B');

            window.addEventListener('scroll', handleScroll);
            //window.addEventListener('scroll', an);

        return () => {
            console.log('Returning layout effect');
                console.log('removing event listener B')
                window.removeEventListener('scroll', an);
            console.log('throttle timeout: ' + throttleTimeout);
            console.log('throttle timeout: ' + timeoutRef.current);
            //if (throttleTimeout) {
            console.log('clearing timeout');
            //clearTimeout(throttleTimeout as unknown as number);
            clearTimeout(timeoutRef.current as unknown as number);
            //}
        };
    }, deps);
};

useScrollPosition.defaultProps = {
    wait: null,
    deps: [],
    element: false,
    useWindow: false,
    boundingElement: false,
};
/*

function debounce(fn: Function, timeout: number) {
    let timer: number | undefined;
    return (args?: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, args);
        }, timeout) as unknown as number;
    };
}
interface DebouncedFunction extends Function {
    //_timerId: number;
    timeoutId: ReturnType<typeof setTimeout>
}
function de(fn: any, time: number) {
    clearTimeout(fn._tId);
    fn._tId = setTimeout(function () {
        fn();
    }, time);
}
*/