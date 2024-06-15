'use client';
import React, { ReactNode, RefObject } from "react";

interface Props {
    children: ReactNode;
    triggerOnce?: boolean;
    onTrigger?: () => void;
}
export function ViewportObserver(props: Props) {
    const [triggerCount, setTriggerCount] = React.useState(0);
    const [hasTriggered, setHasTriggered] = React.useState(false);
    function handleIntersection() {

    }
    const callback: IntersectionObserverCallback = (entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) => {
        entries.forEach((value, index, array) => {
            if(value.isIntersecting) {
                void targetRef.current?.offsetWidth;
                value.target.classList.add('animate');
                setHasTriggered(true);
                setTriggerCount(count => count+1);

                props.onTrigger?.();
                console.log(value.target);
                console.log(value.target.className);
            }
        })
    };
    const fullObserverCallback: IntersectionObserverCallback = (entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) => {
        entries.forEach((value, index, array) => {
            if(!value.isIntersecting) {
                if(props.triggerOnce) {
                    if(hasTriggered) {
                        console.log('TEST')
                    } else {
                        value.target.classList.remove('animate');
                    }
                } else {
                    value.target.classList.remove('animate');
                }
            }
        })
    };
    const observer = new IntersectionObserver( callback, {threshold: 0.25, rootMargin: '50% 0% 50% 0%'});
    const fullObserver = new IntersectionObserver(fullObserverCallback, {root: null, threshold: 1, rootMargin: '50% 0% 50% 0%'});
    const targetRef: RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    React.useLayoutEffect(() => {
        observer.observe(targetRef.current as Element);
        //fullObserver.observe(targetRef.current as Element)
        return () => {
            observer.unobserve(targetRef.current as Element);
            //fullObserver.unobserve(targetRef.current as Element);
        }
    }, []);
    return(
        <div className={'IntersectionObserver-target'} ref={targetRef}>
            {props.children}
        </div>
    );
}