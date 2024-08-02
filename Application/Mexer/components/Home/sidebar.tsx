'use client';

import Image from "next/image";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import '@/styles/globals.css';
import { useContext } from "react";
import { SidebarContext } from "@/components/Home/sidebarContext";
import { usePathname } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger, User } from "@nextui-org/react";
import ProfileMenu from '@/components/Home/profileMenu';

const sidebarItems = [
  {
    name: "Quản Lý Sân",
    href: "/home",
    icon: MdSpaceDashboard,
  },
  {
    name: "Biểu Giá",
    href: "/home/pricelist",
    icon: MdSpaceDashboard,
  },
];

export default function SideBar() {
  const { isCollapsedSidebar, toggleSidebarCollapseHandler } = useContext(SidebarContext);
  const pathname = usePathname();

  return (
    <aside className="sidebar" data-collapse={isCollapsedSidebar}>
      <div className="sidebar-top">
        <Link href="/home">
          <Image src="/assets/images/logo.svg" width={120} height={20} className="sidebar-logo" alt="logo" priority />
        </Link>
        <button className="collapse-btn" onClick={toggleSidebarCollapseHandler}>
          <Image src="/assets/icons/collapse-button.svg" width={32} height={22} className="collapse-button" alt="collapse button" />
        </button>
      </div>
      <ul className="sidebar-list">
        {sidebarItems.map(({ name, href, icon: Icon }) => (
          <li className={`sidebar-item ${pathname === href ? 'active' : ''}`} key={name}>
            <Link href={href} className="sidebar-link">
              <span className="sidebar-icon">
                <Icon />
              </span>
              <span className="sidebar-name">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Link href="/profile" className="sidebar-bottom">
                <span className="user-avatar-wrapper">
                    <Avatar src="/user-avatar.jpg"  />
                </span>
                <span className="user-name">Thanh Dat Ngo</span>
        </Link> */}
            <Popover className="sidebar-bottom">
                <PopoverTrigger className="user-trigger">
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
                </PopoverTrigger>
                <PopoverContent className="p-1 user-content">
                  <ProfileMenu/>
                </PopoverContent>
            </Popover>
    </aside>
  );
}
