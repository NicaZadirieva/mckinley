import { Input, PhoneNumber, Title } from '../../widgets';

import styles from './index.module.css';
export default function Contacts() {
	return (
		<div className={styles['contacts']}>
			<div className={styles['contacts-left']}>
				<Title className='title' text={'McKinley'} size='h2' color='light'/>
				<div className={styles['contacts-info']}>
					<div className={styles['address']}>2972 Westheimer Road</div>
					<div className={styles['address']}>Denver, CO 80021</div>
					<PhoneNumber className={styles['contact-phone-number']} value='(720) 555-0123'/> 
					<div className={styles['email']}>info.denver@mckinley.com</div>
				</div>
				<div className={styles['social-btns']}>
					<a href='#' className={styles['social-btn']}>
						<img src='/fb-icon.svg' alt='Facebook'/>
                        &nbsp;Facebook
					</a>
					<a href='#' className={styles['social-btn']}>
						<img src='/linkedin-icon.svg' alt='LinkedIn'/>
                        &nbsp;LinkedIn
					</a>
					<a href='#' className={styles['social-btn']}>
						<img src='/twitter-icon.svg' alt='Twitter'/>
                        &nbsp;Twitter
					</a>
				</div>
			</div>
			<div className={styles['contacts-right']}>
				<Title text={`Get legal news, advice, 
                    and best practices delivered to your inbox.`} 
				size='h1' color='light'/>
				<Input
					placeholder='Email Address'
					onSend={(textToAction: string) => console.log(textToAction)}
				/>
			</div>
		</div>
	);
}