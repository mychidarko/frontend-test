export interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	size?: any;
	label?: string;
	placeholder?: string;
	name?: string;
	id?: string;
	defaultValue?: string;
	type?: "text" | "password" | "date" | "email" | "number" | "file" | "tel";
	display?: "flex" | "block";
	error?: string;
	showErrorMessage?: boolean;
	className?: string;
	disabled?: boolean;
	autocomplete?: "off" | "on" | "new-password";
	max?: number;
	min?: number;
	isRequired?: boolean;
	inputClassName?: string;
	inputPrefix?: any;
}

export interface TextAreaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	size?: any;
	label?: string;
	placeholder?: string;
	name?: string;
	id?: string;
	defaultValue?: string;
	display?: "flex" | "block";
	error?: string;
	showErrorMessage?: boolean;
	className?: string;
	disabled?: boolean;
	max?: number;
	min?: number;
	isRequired?: boolean;
	inputClassName?: string;
}

export interface SelectProps
	extends React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	size?: any;
	label?: string;
	name?: string;
	id?: string;
	defaultValue?: string;
	type?: "text" | "password" | "date" | "email" | "number" | "checkbox";
	display?: "flex" | "block";
	error?: string;
	showErrorMessage?: boolean;
	className?: string;
	disabled?: boolean;
	max?: number;
	min?: number;
	isRequired?: boolean;
	inputClassName?: string;
	inputPrefix?: any;
	options: SelectOption[] | string[];
}

export interface CheckboxProps
	extends Omit<InputProps, "box" | "type" | "inputPrefix"> {}

export interface SelectOption {
	name: string;
	value: string;
}
