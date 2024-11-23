import cn from 'classnames';
import styles from './index.module.css';

const mainClassName = styles['main'];
export default function Title({ text, size = 'h2', color = 'dark'}: { text: string, size: 'h1' | 'h2', color: 'dark' | 'light' }) {
	if (size === 'h1') {
		return <h1 className={cn(mainClassName, 
			{
				[styles['dark']]: color == 'dark',
				[styles['light']]: color == 'light'
			},
			styles['h1'])}>{text}</h1>; 
	} else {
		return <h2 className={cn(mainClassName, 
			{
				[styles['dark']]: color == 'dark',
				[styles['light']]: color == 'light'
			},
			styles['h2'])}>{text}</h2>;
	}
}