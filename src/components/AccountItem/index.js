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
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/36544d1f9fe0788297008688218dde54~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1707127200&x-signature=%2FMPKq2ftvnf2PljzpOT0KunhEiY%3D"
                alt="Name user"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Huỳnh Thủy Tiên</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('user-name')}>HuynhThuytien</span>
            </div>
        </div>
    );
}

export default AccountItem;
