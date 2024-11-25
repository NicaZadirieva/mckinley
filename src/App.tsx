import Button from './components/Button';
import Card from './components/Card';
import CenterInfoLine from './components/CenterInfoLine';
import LegalServices from './components/LegalServices';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import PhoneNumber from './components/PhoneNumber';
import RequestConsultation from './components/RequestConsultation';
import { isSvg } from './components/shared/iconImage.interface';
import Title from './components/Title';
import Content from './layouts/Content';

function App() {

	return (
    
		<>
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
			<Card id={'1'} iconUrl={{dataSource: '/world-icon.svg', type: isSvg('/world-icon.svg') ? 'svg' : 'image'}} title='Intellectual Property' info={`
				Intellectual Property law deals with laws to protect creators and owners of inventions, 
				writing, music, designs and other works.`}/>

			<Card id={'2'} iconUrl={{dataSource: '/estate-icon.svg', type: isSvg('/estate-icon.svg') ? 'svg' : 'image'}} title='Real Estate' info={`
				Real estate law is a branch of civil law that covers the right to possess, use, and enjoy land.`}/>

			<Card id={'3'} iconUrl={{dataSource: '/tax-law-icon.svg', type: isSvg('/tax-law-icon.svg') ? 'svg' : 'image'}} title='Tax Law' info={`
				Tax law cover income, corporate, excise, luxury, estate and property taxes, to name a few.`}/>
			<Content><LegalServices/></Content>
		</>
	);
}

export default App;
