import cn from 'classnames';
import Paragraph from '../Paragraph';
import { IconImage } from '../shared/iconImage.interface';
import Title from '../Title';
import styles from './index.module.css';
export default function Card({ id, iconUrl, title, info } : { id: string, iconUrl: IconImage, title: string, info: string}) {
	const PARAGRAPH_SIZE = iconUrl.type == 'svg' ? 20 : 22;
	return (
		<div className={
			cn({
				[styles['svg-card']]: iconUrl.type === 'svg',
				[styles['image-card']]: iconUrl.type === 'image',
				[styles['card']]: true
			})}>
			<img src={iconUrl.dataSource} alt={title} className={
				cn({
					[styles['svg-icon']]: iconUrl.type === 'svg',
					[styles['image-icon']]: iconUrl.type === 'image'
				})} />
			<div className={styles['main-content']}>
				<Title className={styles['title']} text={title} color='dark' size='h2'/>
				<Paragraph className={styles['paragraph']} text={info} color='dark' size={PARAGRAPH_SIZE}/>
			</div>
			<a href='#' className={styles['learn-more-btn']}>
				<Paragraph className={styles['paragraph']} text='Learn more' size={19}/>
				<div className={styles['arrow-icon']}></div>
			</a>
		</div>
	);
} 