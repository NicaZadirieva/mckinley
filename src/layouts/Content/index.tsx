import { ReactNode } from 'react';

export default function Content({ children } : {children: ReactNode}) {
	return (
		<div className='restrict-content-size'>
			{children}
		</div>
	);
}