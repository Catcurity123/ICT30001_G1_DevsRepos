import Subnav from '@/components/Home/subnav';
import { User } from '@nextui-org/react';
import {logout} from "@/app/auth/action";



export default function ProfileMenu() {
    
    const handleLogout = async () => {
        await logout();
    }
    const profilemenu = [
        {
            name: "Thiết lập hồ sơ",
            href: "/home/profile",
        },
        {
            name: "Hỗ trợ",
            href: "/home/support",
        },
        {
            name: "Đăng xuất",
            href: "/login",
            onClick: handleLogout,
        },

    ];

    return (
        <div className="profile-menu">
            <div className="user-trigger">
                <User
                    as="button"
                    name="Sân cầu lông Phạm Kha"
                    description="Cơ sở 1"
                    classNames={{
                        name: "custom-user-name",
                        description: "custom-user-description"
                    }}
                    avatarProps={{
                        src: "/assets/images/user-avatar.jpg"
                    }}
                />
            </div>
            <hr/>
            <div className="profile-menu-nav">
                <Subnav items={profilemenu} />
            </div>
        </div>
    );
}