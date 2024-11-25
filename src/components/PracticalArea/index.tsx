import Card from '../Card';
import Paragraph from '../Paragraph';
import { isSvg } from '../shared/iconImage.interface';
import Title from '../Title';
import styles from './index.module.css';
export default function PracticalArea() {
	return (
		<>
			<Title text={'Areas of Practice'} className={styles['title']} size='h1'
				color='dark'/>
			<Paragraph text={`Our disciplined approach to resolving your 
            legal issues will produce the best-possible outcome.`}
			size={24}
			/>
			{/**TODO: сделать api */}
			<div className={styles['main-container']}>
				<Card id={'1'} iconUrl={{dataSource: '/world-icon.svg', type: isSvg('/world-icon.svg') ? 'svg' : 'image'}} title='Intellectual Property' info={`
				Intellectual Property law deals with laws to protect creators and owners of inventions, 
				writing, music, designs and other works.`}/>

				<Card id={'2'} iconUrl={{dataSource: '/estate-icon.svg', type: isSvg('/estate-icon.svg') ? 'svg' : 'image'}} title='Real Estate' info={`
				Real estate law is a branch of civil law that covers the right to possess, use, and enjoy land.`}/>

				<Card id={'3'} iconUrl={{dataSource: '/tax-law-icon.svg', type: isSvg('/tax-law-icon.svg') ? 'svg' : 'image'}} title='Tax Law' info={`
				Tax law cover income, corporate, excise, luxury, estate and property taxes, to name a few.`}/>
			</div>
		</>
	);
}