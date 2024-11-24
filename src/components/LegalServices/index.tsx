import Button from '../Button';
import Paragraph from '../Paragraph';
import Title from '../Title';
import styles from './index.module.css';

const PARAGRAPH_TEXT = `One size does not fit all 
when it comes to your legal needs. 
We craft a team and strategy specific to your desired outcome.`;

export default function LegalServices() {
	return (

		<div className={styles['legal-services']}>
			<div className={styles['about']}>
				<Title text='Personalized Legal Services'
					size='h2'
					className='title'
					color='light'/>
				<Paragraph text={PARAGRAPH_TEXT} size={19} color='light'/>
				<Button color='light' className='button'>About Our Firm</Button>
			</div>
		</div>
	);
}