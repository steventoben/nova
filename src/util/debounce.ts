interface DebouncedFunction extends Function {
    _timeoutId?: number;
    //_tId: ReturnType<typeof setTimeout>
}
export function debounce(fn: DebouncedFunction, time: number) {
    window.clearTimeout(fn._timeoutId);
    fn._timeoutId = window.setTimeout(function () {
        fn();
    }, time);
}