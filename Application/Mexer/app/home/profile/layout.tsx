import Subnav from '@/components/Home/subnav';
import { MdSpaceDashboard } from 'react-icons/md';

const subnavmenu = [
    {
        name: "Chủ sân",
        href: "/home/profile",
    },
    {
        name: "Tài khoản",
        href: "/home/profile",
    },
        {
        name: "Thông tin sân",
        href: "/home/profile",
    },
];


export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='profile-layout'>
      <div className='profile-header'>
        <p>Thiết Lập Thông Tin</p>
      </div>
      <div className='profile-frame'>
        <div className="sub-sidebar">
          <Subnav items={subnavmenu} />
        </div>
        <div className="profile-content">
          {children}
        </div>
      </div>
    </section>
  );
}
