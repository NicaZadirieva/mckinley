export interface IconImage {

    /**
     * (svg/image) type of icon to display
     **/
    type:  'svg' | 'image';

    /**
     * url
     */
    dataSource: string;
}


export function isSvg(imageUrl: string): boolean {
	return imageUrl.endsWith('.svg');
};