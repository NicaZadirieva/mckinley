
import { useCallback, useEffect, useState } from 'react';
import { ArticlesMockService, IArticle } from '../../api/Articles';
import { isSvg } from '../../shared';
import { Card, Paragraph, Title } from '../../widgets';
import styles from './index.module.css';
export default function PracticalArea() {
	const [articles, setArticles] = useState<IArticle[] | null>(null);

	const getArticles = useCallback(async () => {
		try {
			const response : IArticle[] = await Promise.all([
				ArticlesMockService.getArticleById('4'),
				ArticlesMockService.getArticleById('5'),
				ArticlesMockService.getArticleById('6')
			]) as IArticle[];
			setArticles(response);
		} catch (err) {
			console.error('Failed to fetch articles:', err);
			setArticles([]);
		}
	}, []);

	// Fetch articles from API and set to state
	useEffect(() => {
		getArticles();
	});

	if (articles === null){
		return <p>Loading...</p>;
	};

	if (articles !== null && articles.length == 0){
		return (
			<div className={styles['not-found']}>
				<p>No articles found.</p>
			</div>
		);
	}
	return (
		<>
			<Title text={'Areas of Practice'} className={styles['title']} size='h1'
				color='dark'/>
			<Paragraph text={`Our disciplined approach to resolving your 
            legal issues will produce the best-possible outcome.`}
			size={24}
			/>
			
			<div className={styles['main-container']}>
				{articles.map((article: IArticle) => {
					return <Card key={article.id} id={article.id} iconUrl={{dataSource: article.iconUrl.dataSource, type: isSvg(article.iconUrl.dataSource) ? 'svg' : 'image'}} title={article.title} info={article.info}/>;
				})}
			</div>
		</>
	);
}