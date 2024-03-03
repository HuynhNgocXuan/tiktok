import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    CompassActiveIcon,
    CompassIcon,
    GroupUserActiveIcon,
    GroupUserIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserFollowingActiveIcon,
    UserFollowingIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<UserFollowingIcon />}
                    activeIcon={<UserFollowingActiveIcon />}
                />
                <MenuItem
                    title="Bạn bè"
                    to={config.routes.friends}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserActiveIcon />}
                />
                <MenuItem
                    title="Khám phá"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    title="Hồ sơ"
                    to={config.routes.profile}
                    icon={
                        <Image
                            className={cx('user-avatar')}
                            src="https://th.bing.com/th/id/OIP.BY4DB8IiXumaa9v5Wiz0fgHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                            alt="Huỳnh Ngọc Xuân"
                            // fallback="https://th.bing.com/th/id/OIP.nMRgVa3LJEhpNBo8CEQZswHaE7?w=276&h=184&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                        />
                    }
                    activeIcon={
                        <Image
                            className={cx('user-avatar')}
                            src="https://th.bing.com/th/id/OIP.BY4DB8IiXumaa9v5Wiz0fgHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                            alt="Huỳnh Ngọc Xuân"
                            // fallback="https://th.bing.com/th/id/OIP.nMRgVa3LJEhpNBo8CEQZswHaE7?w=276&h=184&c=7&r=0&o=5&dpr=1.6&pid=1.7"
                        />
                    }
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
