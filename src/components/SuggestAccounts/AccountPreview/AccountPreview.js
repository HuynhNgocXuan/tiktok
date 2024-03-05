import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0334541c8bc49dfbecf22ba6584148df~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709805600&x-signature=2wtFuhmOvdBk1uM1p%2Fqcg3c68%2BU%3D"
                    alt=""
                />
                <Button outline>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>@ngocxuan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Huỳnh Ngọc Xuân</p>
                <p className={cx('following-amount')}>
                    <strong className={cx('value')}>215.3K</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>22M</strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
