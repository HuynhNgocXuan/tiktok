import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/82f6a5847466b72a3700c1a34f8cfb91~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&x-expires=1709625600&x-signature=NS%2BTErPXLpdQ0xqCRD4EqvkS0oQ%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('nickname')}>
                    <strong>@ngocxuan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Huỳnh Ngọc Xuân</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
