import { ReactNode } from 'react';
import styles from './index.module.css';
export default function MenuItem({ children, linkUrl } : {children: ReactNode, linkUrl: string}) {
	return (
		<a href={linkUrl} className={styles['menu-item']} aria-label="Ссылка">
			<ul>
				{children}
			</ul>
		</a>
	);
}