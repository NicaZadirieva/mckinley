import Button from '../Button';
import Paragraph from '../Paragraph';
import Title from '../Title';
import styles from './index.module.css';

const PARAGRAPH_TEXT = `We understand the difficulties and stress 
that your legal issues bring. 
Our team is committed to providing you with the individual attention, 
communication, and dedication you deserve.`;
export default function RequestConsultation() {
	return (
		<div className={styles['request-consult']}>
			<div className={styles['left']}>
				<div className={styles['gap-16']}>
					{/**TODO: сделать отдельным компонентом */}
					<div className={styles['circle-container']}>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
					</div>
					<div className={styles['circle-container']}>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
						<div className={styles['circle']}></div>
					</div>
					
                        
				</div>
				<div className={styles['main-content']}>
					<Title className={styles['title']} text='Corporate Legal Representation' 
						size='h1' color='dark'/>
					<Paragraph text={PARAGRAPH_TEXT} size={24}/>
					<Button className='button' color='dark'>Request Consultation</Button>
				</div>
					
				
				
			</div>
			
			<div className={styles['right']}>
				<img className={styles['img']} src='/house.png' alt='Изображение здания'/>
			</div>

		</div>
	);
}