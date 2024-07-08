export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<div className="flex flex-col items-center justify-center border-t-2 border-cyan-400 bg-cyan-100 py-5 text-gray-700 dark:border-0 dark:bg-gray-900 dark:text-white sm:flex-row">
			&copy;{year}&nbsp;&nbsp;Dennis W. Guru
		</div>
	);
}
