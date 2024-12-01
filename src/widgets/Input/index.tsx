import cs from 'classnames';
import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';
import styles from './index.module.css';
import { InputProps } from './Input.props';

/**
 * @callback requestCallback
 * @param {string} textToAction - (byDefault='') text to do action with
 * @returns {any}
 */
/**TODO: оформить ref - выставить фокус у элемента формы */
/**
 * Util Input component 
 * @param {requestCallback} onSend - callback to do request after submit
 * @param {string} iconClassName additional CSS class for icon (used for setting icon image)
 * @param {Object} ref (optional, byDefault=null) - to be focused after submit
 * @returns {component} Input 
 * 
*/

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const {className, iconClassName, placeholder} = props as InputProps;
	const [text, setText] = useState<string>('');
	const onClick = () => {
		if (typeof text == 'string') {
			(props as InputProps).onSend(text);
		}
	};

	const onChange = (e : ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		setText(target.value);
	};

	return (
		<div className={cs(styles['input-container'])}>
			<input value={text} onChange={onChange} placeholder={placeholder} name='textToAction' ref={ref} className={cs(styles['input'], className)} />
			<img  className={cs(styles['icon'], iconClassName)} src='/arrow-input-icon.svg' alt='Стрелка отправить' onClick={onClick}/>
		</div>
	);
});

export default Input;