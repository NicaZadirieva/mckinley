import cn from 'classnames';
import styles from './index.module.css';
export default function PhoneNumber({value, color, className} : {value: string, color?: 'dark' | 'light', className?: string}) {
	return (
		<div className={cn(className, styles['phone-number'], {
			[styles['dark']]: color == 'dark',
			[styles['light']]: color == 'light'
		})}>
			{value}
		</div>
	);
}