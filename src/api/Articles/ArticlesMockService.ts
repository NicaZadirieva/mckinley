import { isSvg } from '../../shared';
import { IArticle } from './IArticle';

const mockArticles: IArticle[] = [
	{ 
		id: '1',
		iconUrl: { 
			dataSource: '/web-design.png', 
			type: isSvg('/web-design.png') ? 'svg' : 'image'
		},
		title: 'December 13, 2020',
		info: '12 Things About Web Design Your Boss Wants To Know'
	},
	{ 
		id: '2',
		iconUrl: { 
			dataSource: '/history-design.png', 
			type: isSvg('/history-design.png') ? 'svg' : 'image' 
		},
		title: 'December 10, 2020',
		info: 'The History Of Web Design'
	},
	{
		id: '3',
		iconUrl: { 
			dataSource: '/improve-process.png', 
			type: isSvg('/improve-process.png') ? 'svg' : 'image'
		},
		title: 'December 10, 2020',
		info: 'How to improve Web Design Process'
	}

];




export default class ArticlesMockService {
	static async getArticles() {
		// Simulating API call delay for demonstration purposes
		await new Promise(resolve => setTimeout(resolve, 2000));
		return mockArticles;
	}
}