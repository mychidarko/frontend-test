import React from "react";
import { InputProps, SelectProps, CheckboxProps, TextAreaProps } from "./@types/Input";

export const inputSizes = {
	sm: 32,
	md: 40,
	lg: 48,
	xl: 56,
};

export const TextArea: React.FC<TextAreaProps> = ({
	label,
	value,
	placeholder,
	onChange,
	className = "",
	onBlur,
	name,
	error,
	disabled,
	inputClassName,
	autoFocus,
	...rest
}) => {
	return (
		<div className={`${className} input-container`}>
			{label && <label className="input-label">{label}</label>}
			<textarea
				className={`input ${inputClassName}`}
				value={value as string}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				name={name}
				disabled={disabled}
				autoFocus={autoFocus}
				{...rest}
			/>
			{error && <small className="error-message">{error}</small>}
		</div>
	);
};

export const Input: React.FC<InputProps> = ({
	type = "",
	label,
	value,
	placeholder,
	onChange,
	className = "",
	onBlur,
	name,
	error,
	disabled,
	inputClassName,
	inputPrefix,
	autoFocus,
	...rest
}) => {
	return (
		<div className={`${className} input-container`}>
			{label && <label className="input-label">{label}</label>}
			<div className={`input-container ${inputPrefix && "position:relative"}`}>
				<input
					className={`input ${inputClassName} ${inputPrefix && "-has-prefix"}`}
					value={value as string}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					type={type}
					name={name}
					disabled={disabled}
					autoFocus={autoFocus}
					{...rest}
				/>
				{inputPrefix && (
					<div className="input-prefix__container position:absolute left:_1">
						{inputPrefix}
					</div>
				)}
			</div>
			{error && <small className="error-message">{error}</small>}
		</div>
	);
};

export const Select: React.FC<SelectProps> = ({
	label,
	value,
	onChange,
	className = "",
	onBlur,
	name,
	error,
	disabled,
	inputClassName,
	options = [],
	autoFocus,
	...rest
}) => {
	return (
		<div className={`${className} input-container`}>
			{label && <label className="input-label">{label}</label>}
			<select
				name={name}
				className={`select ${inputClassName}`}
				value={value as string}
				onChange={onChange}
				onBlur={onBlur}
				disabled={disabled}
				autoFocus={autoFocus}
				{...rest}
			>
				{options.map((option: any, index: number) => (
					<option
						key={index}
						value={typeof option === "string" ? option : option.value}
						className="select__option"
					>
						{typeof option === "string" ? option : option.name}
					</option>
				))}
			</select>
			{error && <small className="error-message">{error}</small>}
		</div>
	);
};

export const CheckBox: React.FC<CheckboxProps> = ({
	label,
	value,
	placeholder,
	onChange,
	className = "",
	onBlur,
	name,
	error,
	disabled,
	inputClassName,
	autoFocus,
	id,
	...rest
}) => {
	return (
		<div className={`${className} checkbox-container`}>
			<div className="checkbox-container flex flex:center-start">
				<input
					className={`checkbox ${inputClassName}`}
					value={value as string}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					type="checkbox"
					name={name}
					disabled={disabled}
					autoFocus={autoFocus}
					id={id || `checkbox-${name}`}
					{...rest}
				/>
				{label && <label className="input-label ml:_1" htmlFor={id || `checkbox-${name}`}>{label}</label>}
			</div>
			{error && <small className="error-message">{error}</small>}
		</div>
	);
};

export default Input;
