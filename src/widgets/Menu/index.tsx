import { ReactNode } from 'react';
import styles from './index.module.css';
export default function Menu({ children }: { children : ReactNode}) {
	return (
		<nav className={styles['menu-container']}>
			<ul className={styles['menu']}>
				{children}
			</ul>
		</nav>
	);
}