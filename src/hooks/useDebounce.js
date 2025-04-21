import { useEffect, useState } from 'react';
function useDebounce(value, delay) {
    const [deBounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return deBounceValue;
}

export default useDebounce;
