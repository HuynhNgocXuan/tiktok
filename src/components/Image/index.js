import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.errorImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleErrorImage = () => {
        setFallBack(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleErrorImage}
        />
    );
});

export default Image;
