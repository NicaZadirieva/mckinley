import cs from 'classnames';
import { ChangeEvent, useRef, useState } from 'react';
import styles from './index.module.css';
import { InputProps } from './Input.props';

/**
 * @callback requestCallback
 * @param {string} textToAction - (byDefault='') text to do action with
 * @returns {any}
 */

/**
 * Util Input component 
 * @param {requestCallback} onSend - callback to do request after submit
 * @param {Object} ref (optional, byDefault=null) - to be focused after submit
 * @param {string} placeholder - 
 * @returns {component} Input 
 * 
*/

export default function Input(props: InputProps) {
	const { placeholder } = props as InputProps;
	const [text, setText] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	const clearAndFocusAfterSubmit = () => {
		if(inputRef?.current) {
			inputRef.current.value = '';
			inputRef.current.focus();
		}
	};

	const onClick = () => {
		if (typeof text == 'string') {
			(props as InputProps).onSend(text);
			clearAndFocusAfterSubmit();
		}
	};

	const onChange = (e : ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		setText(target.value);
	};

	return (
		<div className={cs(styles['input-container'])}>
			<input ref={inputRef} value={text} onChange={onChange} placeholder={placeholder} name='textToAction' className={cs(styles['input'])} />
			<img  className={styles['icon']} src='/arrow-input-icon.svg' alt='Стрелка отправить' onClick={onClick}/>
		</div>
	);
};

