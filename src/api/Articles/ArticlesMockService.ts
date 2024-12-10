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
	},
	{
		id: '4',
		iconUrl: {
			dataSource: '/world-icon.svg',
			type: isSvg('/world-icon.svg')? 'svg' : 'image'
		},
		title: 'Intellectual Property',
		info: `Intellectual Property law deals with laws to protect creators and owners of inventions, 
				writing, music, designs and other works.`
	},
	{
		id: '5',
		iconUrl: {
			dataSource: '/estate-icon.svg',
			type: isSvg('/estate-icon.svg')? 'svg' : 'image'
		},
		title: 'Real Estate',
		info: `Real estate law is a branch of civil law that covers the right 
        to possess, use, and enjoy land.`
	},
	{
		id: '6',
		iconUrl: {
			dataSource: '/tax-law-icon.svg',
			type: isSvg('/tax-law-icon.svg')? 'svg' : 'image'
		},
		title: 'Tax Law',
		info: `Tax law cover income, corporate, excise, luxury, estate and property taxes, 
        to name a few.`
	}

];

export default class ArticlesMockService {
	static async getArticles() {
		// Simulating API call delay for demonstration purposes
		await new Promise(resolve => setTimeout(resolve, 2000));
		return mockArticles.slice(0, 3);
	}

	static async getArticleById(id: string) {
		// Simulating API call delay for demonstration purposes
		await new Promise(resolve => setTimeout(resolve, 2000));
		return mockArticles.find(article => article.id === id);
	}
}