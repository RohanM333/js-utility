// Debounce
export const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

// Throttle
export const throttle = (fn, delay) => {
    const lastTime = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime < delay) return;
        lastTime = now;
        fn(...args);
    };
};

// A memoize decorator function 
// capable of handling multiple parameters 
export const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if (JSON.stringify(args) in cache) {
            console.log(cache); 
            return cache[JSON.stringify(args)];
        }
        const result = fn(...args);
        cache[JSON.stringify(args)] = result;
        return result;
    }
}

// Sanitize input without regex (no need to sanitize in jsx)
const sanitizeInput = (inputValue) => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
}

const dirtyInput = "<script>alert('xss attack')</script>&othervalues";
const cleanInput = sanitizeInput(dirtyInput);
log(cleanInput);

