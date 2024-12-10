import cn from 'classnames';
import styles from './index.module.css';
export default function Paragraph({ text, size, color='dark', className }: { text: string, className?: string, size: number, color?: 'dark' | 'light'}) {
	const fontSize = `${size} px`;

	return (
		<p style={{ fontSize }} className={cn(styles['main'], className, {
			[styles['dark']]: color == 'dark',
			[styles['light']]: color == 'light'
		})}>{text}</p>
	);
}