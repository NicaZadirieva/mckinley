
import { Button, Paragraph, Title } from '../../widgets';
import styles from './index.module.css';
export default function NeedConsultation({title, description}: {title: string, description: string}) {
	return (
		<div className={styles['need-consultation']}>
			<Title size='h1' color='dark' text={title}/>
			<Paragraph color='dark' size={23} text={description}/>

			<Button className={styles['button']} color='dark'>Request Consultation</Button>
		</div>
	);
}