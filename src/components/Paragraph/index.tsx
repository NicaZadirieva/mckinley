import styles from './index.module.css';
export default function Paragraph({ text, size }: { text: string, size: number}) {
	const fontSize = `${size} px`;

	return (
		<p style={{ fontSize }} className={styles['main']}>{text}</p>
	);
}