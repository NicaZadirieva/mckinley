import cn from 'classnames';
import { ReactNode } from 'react';
export default function Content({ children, className } : {children: ReactNode, className?: string}) {
	return (
		<div className={cn('restrict-content-size', className)}>
			{children}
		</div>
	);
}