import styles from './index.module.css';
/**
 * util component for Circles
 * * display row with 7 circles inside
 * @returns 
 */
export default function Circles() {
	return (
		<div className={styles['circle-container']}>
			<div className={styles['circle']}></div>
			<div className={styles['circle']}></div>
			<div className={styles['circle']}></div>
			<div className={styles['circle']}></div>
			<div className={styles['circle']}></div>
			<div className={styles['circle']}></div>
			<div className={styles['circle']}></div>
		</div>
	);
}