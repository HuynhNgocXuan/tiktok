import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy offset={[50, 10]} placement="top-start" interactive delay={[800, 0]} render={renderPreview}>
                <div className={cx('item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eb375bdbe0dbdcafa6307c36494bde51.jpeg?lk3s=a5d48078&x-expires=1709798400&x-signature=PHyqOW0DG3xsJAKq49OQ3pMMfcc%3D"
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
            </Tippy>
        </div>
    );
}

export default AccountItem;
