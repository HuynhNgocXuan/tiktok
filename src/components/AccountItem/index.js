import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
//
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/67c8523a196569babc59d9a898d8fd85~c5_300x300.webp?lk3s=a5d48078&x-expires=1707357600&x-signature=E2PKfqDUuLXz5o%2FzObwndsLtK1Q%3D"
                alt="Name user"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Lâm Thanh Thảo</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('user-name')}>Bemeo28</span>
            </div>
        </div>
    );
}

export default AccountItem;
