import { FormHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends FormHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    
    /**
     * (optional)
     * additional CSS class for icon (used for setting icon image)
     * */
    iconClassName?: string;

    /**
     * callback to do request after submit
     * @param textToAction user's input
     */
    onSend: (textToAction: string) => void;

    /**
     * input's placeholder
     */
    placeholder: string;
}

export interface InputFormField extends HTMLFormControlsCollection {
    textToAction: HTMLFormElement;
}