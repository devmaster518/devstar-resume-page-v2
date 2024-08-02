import { FcDocument } from 'react-icons/fc';
import { FaGithubSquare, FaTelegram } from 'react-icons/fa';
import { AiFillSkype, AiOutlineWhatsApp } from 'react-icons/ai';
import { PiMapPinAreaDuotone } from 'react-icons/pi';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function LandingPage() {
	const line1 =
		'Experienced in the dynamic world of JavaScript, Python, and Go, I am a seasoned developer ready to bring your projects to life.';
	const line1JP =
		'JavaScript、Python、GoLangの経験豊富なシニア開発者として、あなたのプロジェクトを実現する準備ができています。';
	const line2 =
		'With a passion for innovations and a knack for professional solutions, I am living in the fast-paced world of competition with you.';
	const line2JP =
		'イノベーションへの情熱と問題解決の才能を持ち、競争の激しい世界であなたと一緒に成長していきたいと考えています。';

	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const titles = [
		'Seasoned NodeJS Engineer',
		'Senior Python Guru',
		'Enthusiastic GoLang Developer',
		'Smart Data Scraper',
		'Robust Solution Provider',
		'Fast Learner',
	];
	const titlesJP = [
		'熟練したNodeJSエンジニア',
		'シニアPythonグル',
		'熱心なGoLang開発者',
		'スマートデータスクレーパー',
		'堅牢なソリューションプロバイダー',
		'学びが早い人',
	];
	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [titles.length]);

	return (
		<div className="min-h-[100dvh] w-full md:flex md:items-center md:justify-center">
			<div className="px-10 pt-10 text-center">
				<h1 className="py-2 text-3xl font-medium text-cyan-700 dark:text-cyan-600 sm:text-4xl md:text-5xl">
					Dennis Wang
				</h1>

				{mounted ? (
					<TextTransition springConfig={presets.default} className="flex items-center justify-center">
						<p className="py-2 text-xl font-medium sm:text-2xl">
							{theme === 'dark' ? titles[titleIndex % titles.length] : titlesJP[titleIndex % titles.length]}
						</p>
					</TextTransition>
				) : (
					<p className="py-2 text-xl font-medium sm:text-2xl">{titles[titleIndex % titles.length]}</p>
				)}

				{mounted ? (
					<motion.h3
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 1 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.02,
								},
							},
						}}
						className="py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg"
					>
						{theme === 'dark'
							? line1.split('').map((char, index) => {
									return (
										<motion.span
											key={char + '-' + index}
											variants={{
												hidden: { opacity: 0, y: 50 },
												visible: {
													opacity: 1,
													y: 0,
												},
											}}
										>
											{char}
										</motion.span>
									);
								})
							: line1JP.split('').map((char, index) => {
									return (
										<motion.span
											key={char + '-' + index}
											variants={{
												hidden: { opacity: 0, y: 50 },
												visible: {
													opacity: 1,
													y: 0,
												},
											}}
										>
											{char}
										</motion.span>
									);
								})}

						<br />

						{theme === 'dark'
							? line2.split('').map((char, index) => {
									return (
										<motion.span
											key={char + '-' + index}
											variants={{
												hidden: { opacity: 0, y: 50 },
												visible: {
													opacity: 1,
													y: 0,
												},
											}}
										>
											{char}
										</motion.span>
									);
								})
							: line2JP.split('').map((char, index) => {
									return (
										<motion.span
											key={char + '-' + index}
											variants={{
												hidden: { opacity: 0, y: 50 },
												visible: {
													opacity: 1,
													y: 0,
												},
											}}
										>
											{char}
										</motion.span>
									);
								})}
					</motion.h3>
				) : (
					<div className="py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
						{' '}
						<br />{' '}
					</div>
				)}
				<div className="flex justify-center gap-16 py-2 text-4xl text-gray-600">
					<a
						href="https://docs.google.com/document/d/1qmlWFQvxh7iSg71ZF5clbCY8D2i576Dm/edit?usp=drive_link&ouid=108510853676302554797&rtpof=true&sd=true"
						target="_blank"
						aria-label="Resume"
						rel="noreferrer"
						className="group hover:cursor-pointer hover:text-black dark:hover:text-white"
					>
						<FcDocument />
						<p className="invisible text-xs group-hover:visible">Resume</p>
					</a>
					<a
						href="https://github.com/devmaster518"
						target="_blank"
						aria-label="GitHub"
						rel="noreferrer"
						className="group hover:cursor-pointer hover:text-black dark:hover:text-white"
					>
						<FaGithubSquare />
						<p className="invisible text-xs group-hover:visible">GitHub</p>
					</a>
					<a
						href="https://www.google.com/maps?q=Calgary,+Alberta+T2A+0A1,+CA"
						target="_blank"
						aria-label="Location"
						rel="noreferrer"
						className="group hover:cursor-pointer hover:text-black dark:hover:text-white"
					>
						<PiMapPinAreaDuotone />
						<p className="invisible text-xs group-hover:visible">Location</p>
					</a>
				</div>
				<div className="flex justify-center gap-16 py-2 text-4xl text-gray-600">
					<a
						href="skype:live:.cid.bb94bd4153e9b409?chat"
						target="_blank"
						rel="noreferrer"
						aria-label="Skype"
						className="group hover:cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-500"
					>
						<AiFillSkype />
						<p className="invisible text-xs group-hover:visible">Skype</p>
					</a>
					<a
						href="https://t.me/codeguru827/"
						target="_blank"
						rel="noreferrer"
						aria-label="Telegram"
						className="group hover:cursor-pointer hover:text-cyan-800 dark:hover:text-cyan-600"
					>
						<FaTelegram />
						<p className="invisible text-xs group-hover:visible">Telegram</p>
					</a>
					<a
						href="https://wa.me/33780871076"
						target="_blank"
						rel="noreferrer"
						aria-label="Whatsapp"
						className="group hover:cursor-pointer hover:text-green-800 dark:hover:text-green-500"
					>
						<AiOutlineWhatsApp />
						<p className="invisible text-xs group-hover:visible">Whatsapp</p>
					</a>
				</div>
			</div>

			<div className="px-10 py-20 md:px-0">
				<video
					autoPlay
					loop
					muted
					className="w-100 mx-auto rounded-full border-4 border-cyan-500"
					poster="/coding_anim_thumb.jpg"
				>
					<source src="/coding_anim.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
}
