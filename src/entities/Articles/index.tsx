
import { useCallback, useEffect, useState } from 'react';
import { ArticlesMockService, IArticle } from '../../api/Articles';
import { isSvg } from '../../shared';
import Card from '../../widgets/Card';
import Title from '../../widgets/Title';
import styles from './index.module.css';
export default function Articles() {
	const [articles, setArticles] = useState<IArticle[]>([]);

	const getArticles = useCallback(async () => {
		try {
			const response : IArticle[] = await ArticlesMockService.getArticles();
			setArticles(response);
		} catch (err) {
			console.error('Failed to fetch articles:', err);
		}
	}, []);

	// Fetch articles from API and set to state
	// TODO: сделать loader
	useEffect(() => {
		getArticles();
	});
	return (
		<>
			<Title text={'Recent Articles'} className={styles['title']} size='h1'
				color='dark'/>

			<div className={styles['main-container']}>
				{articles.map((article: IArticle) => {
					return <Card key={article.id} id={article.id} iconUrl={{dataSource: article.iconUrl.dataSource, type: isSvg(article.iconUrl.dataSource) ? 'svg' : 'image'}} title={article.title} info={article.info}/>;
				})}
			</div>
		</>
	);
}