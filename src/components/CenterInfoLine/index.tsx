import styles from './index.module.css';

export default function CenterInfoLine({ text }: { text: string }) {
	return (
		<div className={styles['info-line']}>
			{text}
		</div>
	);
};