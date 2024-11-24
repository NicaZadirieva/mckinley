import Button from './components/Button';
import CenterInfoLine from './components/CenterInfoLine';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import PhoneNumber from './components/PhoneNumber';
import RequestConsultation from './components/RequestConsultation';
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
		</>
	);
}

export default App;
