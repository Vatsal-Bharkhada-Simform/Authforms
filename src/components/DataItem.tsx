export function DataItem({
	title,
	value,
}: {
	title: string;
	value: string | number;
}) {
	return (
		<div className="flex gap-2 text-base">
			<span className="font-semibold flex-1 truncate">{title}</span>
			<span className="flex-3 truncate">{value ?? ""}</span>
		</div>
	);
}
