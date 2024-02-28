import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
//
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    CoinIcon,
    CreativeIcon,
    FavoriteIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MailIcon,
    MessageIcon,
    MoonIcon,
    ProfileIcon,
    QuestionIcon,
    SettingIcon,
    VideoIcon,
} from '~/components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <CreativeIcon />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
        to: '/live',
    },
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'pi',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    code: 'Čes',
                    title: 'Čeština (Česká republika)',
                },
                {
                    code: '한',
                    title: '한국어 (대한민국)',
                },
                {
                    code: '简',
                    title: '简体中文',
                },
                {
                    code: 'Ne',
                    title: 'Nederlands (Nederland)',
                },
                {
                    code: 'Ma',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    code: 'Itali',
                    title: 'Italiano (Italia)',
                },
                {
                    code: 'In',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'pi',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    code: 'Čes',
                    title: 'Čeština (Česká republika)',
                },
                {
                    code: '한',
                    title: '한국어 (대한민국)',
                },
                {
                    code: '简',
                    title: '简体中文',
                },
                {
                    code: 'Ne',
                    title: 'Nederlands (Nederland)',
                },
                {
                    code: 'Ma',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    code: 'Itali',
                    title: 'Italiano (Italia)',
                },
                {
                    code: 'In',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <MoonIcon />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'Xem hồ sơ',
            to: '/@hnx',
        },
        {
            icon: <FavoriteIcon />,
            title: 'Yêu thích',
            to: '/feedbac',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <VideoIcon />,
            title: 'LIVE Studio',
            to: '/studio',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-home')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text>
                                <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPlus} />
                                Tải lên
                            </Button>

                            <Tippy delay={[0, 50]} placement="bottom" content="Tin nhắn">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} placement="bottom" content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <MailIcon className={cx('mail-icon')} />
                                    <span className={cx('badge')}>6</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon style={{ marginRight: 8 }} icon={faPlus} />
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://th.bing.com/th/id/OIP.BY4DB8IiXumaa9v5Wiz0fgHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                                alt="Huỳnh Ngọc Xuân"
                                // fallback="https://th.bing.com/th/id/OIP.nMRgVa3LJEhpNBo8CEQZswHaE7?w=276&h=184&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
