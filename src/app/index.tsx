import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Articles, Content, LegalServices, NeedConsultation, PracticalArea, QuoteSlider, RequestConsultation } from '../entities';

import { useRef } from 'react';
import { Button, CenterInfoLine, Menu, MenuItem, PhoneNumber, Title } from '../widgets';
import Input from '../widgets/Input';

function App() {
	const inputRef = useRef(null);
	return (
    
		<>
			<Input
				placeholder='Email Address'
				ref={inputRef}
				onSend={(textToAction: string) => console.log(textToAction)}
			/>
    	<CenterInfoLine text={'We have moved into our brand new downtown office at the corner of Broadway and Bellview'}/>
			<Content> 
			
				<Menu>
					<Title text={'McKinley'} size='h2' color='dark'/>
					<MenuItem linkUrl='/'>Services</MenuItem>
					<MenuItem linkUrl='/'>About</MenuItem>
					<MenuItem linkUrl='/'>Articles</MenuItem>
					<MenuItem linkUrl='/'>Contact</MenuItem>
					<div className='flex'>
						<PhoneNumber color='dark' value='(123) 456-7890'/>
						<Button color='dark'>Request Consultation</Button>
					</div>
				</Menu>
			</Content>
			
			<RequestConsultation/>
			<Content><PracticalArea/></Content>
			<Content><LegalServices/></Content>
			<Content><QuoteSlider/></Content>
			<Content><Articles/></Content>
			<NeedConsultation title='Need professional legal advice?' 
				description='Get a free consultation with our legal experts'
			/>

		</>
	);
}

export default App;
