import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './index.module.css';
export default function Button({ children, color = 'dark' }: { children: ReactNode, color: 'dark' | 'light' }) {
	return (
		<button className={cn(styles['button'],
			{
				[styles['dark']] : color == 'dark',
				[styles['light']] : color == 'light'
			}
		)}>
			{children}
		</button>
	);
}