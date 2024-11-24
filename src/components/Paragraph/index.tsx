import cn from 'classnames';
import styles from './index.module.css';
export default function Paragraph({ text, size, color='dark' }: { text: string, size: number, color?: 'dark' | 'light'}) {
	const fontSize = `${size} px`;

	return (
		<p style={{ fontSize }} className={cn(styles['main'], {
			[styles['dark']]: color == 'dark',
			[styles['light']]: color == 'light'
		})}>{text}</p>
	);
}