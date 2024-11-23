import cn from 'classnames';
import styles from './index.module.css';
export default function PhoneNumber({value, color = 'dark'} : {value: string, color : 'dark' | 'light'}) {
	return (
		<div className={cn(styles['phone-number'], {
			[styles['dark']]: color == 'dark',
			[styles['light']]: color == 'light'
		})}>
			{value}
		</div>
	);
}