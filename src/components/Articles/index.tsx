import Card from '../Card';
import { isSvg } from '../shared/iconImage.interface';
import Title from '../Title';
import styles from './index.module.css';
export default function Articles() {
	return (
		<>
			<Title text={'Recent Articles'} className={styles['title']} size='h1'
				color='dark'/>
			{/**TODO: сделать api */}
			<div className={styles['main-container']}>
				<Card id={'1'} iconUrl={{dataSource: '/web-design.png', type: isSvg('/web-design.png') ? 'svg' : 'image'}} title='December 13, 2020' info={`
				12 Things About Web Design Your Boss Wants To Know`}/>

				<Card id={'2'} iconUrl={{dataSource: '/history-design.png', type: isSvg('/history-design.png') ? 'svg' : 'image'}} title='December 10, 2020' info={`
				The History Of Web Design`}/>

				<Card id={'3'} iconUrl={{dataSource: '/improve-process.png', type: isSvg('/improve-process.png') ? 'svg' : 'image'}} title='December 10, 2020' info={`
				How to improve Web Design Process`}/>
			</div>
		</>
	);
}