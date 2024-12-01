import styles from './index.module.css';
import { QuoteSlideItemProps } from './QuoteSlideItem.props';
export default function QuoteSlideItem(props: QuoteSlideItemProps) {
	const { quote,  author } = props;

	return (
		<div className={styles['slide-item']}>
			<div className={styles['quote']}>
				{quote}
			</div>
			<div className={styles['author']}>
				{author}
			</div>
		</div>
	);
}