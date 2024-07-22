import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';

export default function AboutMe() {
	const detail1 =
		'Experienced in the dynamic world of NodeJS, Go, Pandas, and R, I am a Senior Developer ready to bring your projects to life. With a passion for innovation and a knack for problem-solving, I am thriving in the fast-paced world of competition with you.';
	const detail2 = 'Let us collaborate and create something extraordinary together!';
	const detailJP_1 = '初めまして。王定と申します。CanadaのCalgary市に在住しています。';
	const detailJP_2 =
		'NodeJS、Go、Pandas、Rの経験豊富なシニア開発者として、あなたのプロジェクトを実現する準備ができています。イノベーションへの情熱と問題解決の才能を持ち、競争の激しい世界であなたと一緒に成長していきたいと考えています。共に素晴らしいものを創り上げましょう！';
	const detailJP_3 =
		'海外（中国含む）に進出した日本の多くの企業の素晴らしいお客様と、長年の親密な提携関係を結び、ウェブサイト、モバイルアプリなどのソフトウェア開発分野で豊富な経験を持つキャリアを誇りたいと思います。';
	const detailJP_4 = '宜しくお願い致します。';

	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	//-- When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	return (
		<Fade>
			<Element name="about-me" className="relative z-10" />
			<div className="mb-48">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					{mounted && (theme === 'dark' ? 'About Me' : '私について')}
					{!mounted && 'Loading...'}
				</h3>
				<div className="mx-4 flex flex-col items-center justify-around rounded-xl border-2 border-cyan-400 bg-cyan-100 p-8 dark:border-0 dark:bg-gray-800 sm:mx-10 md:flex-row">
					<Image
						src="/codeguru.jpg"
						alt="Dennis Wang (王定)"
						width={480}
						height={0}
						style={{ height: 'auto' }}
						className="mb-10 w-full max-w-[280px] rounded-full border-4 border-cyan-500 grayscale filter transition duration-300 hover:filter-none dark:border-cyan-700 md:mb-0"
					/>
					<p className="flex w-full max-w-2xl items-center text-center text-base md:mb-0 md:ml-10 md:text-lg">
						{mounted &&
							(theme === 'dark' ? (
								<>
									{detail1}
									<br />
									{detail2}
								</>
							) : (
								<>
									{detailJP_1}
									<br />
									{detailJP_2}
									<br />
									{detailJP_3}
									<br />
									{detailJP_4}
								</>
							))}
					</p>
				</div>
			</div>
		</Fade>
	);
}
