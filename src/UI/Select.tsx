interface SelectProps<
	T extends Array<string>,
> extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: T;
	defaultSelected?: T[number];
	defaultOptionText?: string;
	labelText?: string;
	errorText?: string;
}

export function Select<const T extends Array<string>>({
	id,
	options,
	defaultSelected,
	defaultOptionText,
	labelText = "",
	errorText = "",
	...props
}: SelectProps<T>) {
	const hasError = errorText.trim() !== "";

	return (
		<div className="flex flex-col gap-1 mb-4">
			{labelText.trim() && (
				<label
					htmlFor={id}
					className={`md:text-md font-inter tracking-tight text-primary leading-none ${hasError && "text-red-500"}`}
				>
					{labelText}
					{props.required && (
						<span className="text-sm text-red-500 pl-1">*</span>
					)}
				</label>
			)}
			<select
				id={id}
				className={`w-full px-3 py-1.5 text-md text-gray-800 bg-gray-50 border-2 border-gray-300 focus:border-blue-400 outline-0 focus:outline-3 outline-blue-100 rounded-xl leading-none transition-all duration-100 
                    ${hasError && "border-red-300 focus:border-red-300 focus:outline-2 outline-red-100"}
                `}
				defaultValue={defaultSelected ?? defaultOptionText ?? "Select"}
				{...props}
			>
				<option value="Select">{defaultOptionText ?? "Select"}</option>
				{options.map((option) => {
					return (
						<option value={option} key={option}>
							{option}
						</option>
					);
				})}
			</select>
			{hasError && (
				<span className="text-sm text-gray-500 leading-none">
					{errorText}
				</span>
			)}
		</div>
	);
}
