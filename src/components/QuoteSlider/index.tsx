import { MouseEvent } from 'react';
import Slider from 'react-slick';
import QuoteSlideItem from '../QuoteSlideItem';
import styles from './index.module.css';
function NextArrow({onClick} : {onClick?: (event: MouseEvent) => void}) {
	return (
		<div
			className={styles['next-arrow']}
			onClick={onClick}
		/>
	);
}

function PrevArrow({onClick} : {onClick?: (event: MouseEvent) => void}) {
	return (
		<div
			className={styles['prev-arrow']}
			onClick={onClick}
		/>
	);
}

export default function QuoteSlider() {
	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 1,
		  nextArrow: <div className='next-slick-arrow'><NextArrow/></div>
		,

		prevArrow: <div className='next-slick-arrow'><PrevArrow/></div>
	};
	return (
		<Slider {...settings}>
			<QuoteSlideItem
				quote={`The team at McKinley always delivers thoughtful and 
					professional legal services in a timely manner.`}
				author='John Smith, Tax Law Client'
			/>

			<QuoteSlideItem
				quote={`The team at McKinley always delivers thoughtful and 
					professional legal services in a timely manner.`}
				author='John Smith, Tax Law Client'
			/>

			<QuoteSlideItem
				quote={`The team at McKinley always delivers thoughtful and 
					professional legal services in a timely manner.`}
				author='John Smith, Tax Law Client'
			/>
		</Slider>
	);
}