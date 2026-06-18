type Variant = "PRIMARY" | "SECONDARY" | "DANGER";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: Variant;
}

const buttonClassNames: Record<Variant, string> = {
	PRIMARY:
		"bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-1.5 rounded-xl text-md transition-all duration-300 shadow-primary",
	SECONDARY:
		"bg-blue-50 hover:bg-blue-100 text-blue-600 cursor-pointer px-4 py-1.5  border border-blue-100 rounded-xl text-md transition-all duration-300",
	DANGER: "bg-red-100 hover:bg-red-200 text-red-700 cursor-pointer px-4 py-1.5  border border-red-200 rounded-xl text-md transition-all duration-300",
};

export default function Button({
	variant,
	className = "",
	...props
}: ButtonProps) {
	return (
		<button
			className={`${buttonClassNames[variant]} ${className}`}
			{...props}
		>
			{props.children}
		</button>
	);
}
