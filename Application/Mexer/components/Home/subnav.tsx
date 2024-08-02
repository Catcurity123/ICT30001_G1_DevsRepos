'use client'

import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";

interface SubnavItem {
    name: string;
    href: string;
    onClick?: () => void;
}

interface SubnavProps {
    items: SubnavItem[];
}

const Subnav = ({ items }: SubnavProps) => {
    const router = useRouter();
    const currentPath = usePathname();
    return (
        <nav className="subnav">
        <ul className="subnav-list">
            {items.map(({ name, href, onClick }) => ( // Add onClick prop to mapping
            <li className={`subnav-item ${currentPath === href ? 'active' : ''}`} key={name}>
                <button
                    className={`subnav-link ${href ? '' : 'subnav-link--logout'}`}
                    onClick={() => {
                        if (onClick) {
                            onClick();
                            router.push(href);
                        } else {
                            router.push(href); // Call logout function if no href
                        }
                    }}
                >
              <span className="subnav-name">{name}</span>
            </button>
            </li>
            ))}
        </ul>
        </nav>
    );
};

export default Subnav;
