import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import { useTheme } from 'next-themes';
import { Element } from 'react-scroll';

interface Project {
	index: number;
	image: string;
	image_dark: string;
	description: string;
	descriptionJP: string;
	name: string;
	tech: string;
	demo_link: string;
	github_link: string;
	hover_gif_dark: string;
	hover_gif_light: string;
}

export default function Projects() {
	const [modalImg, setModalImg] = useState<string | undefined>(undefined);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	//-- When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setModalImg(undefined);
			}
		};
		window.addEventListener('keydown', closeOnEscapeKey);
		return () => window.removeEventListener('keydown', closeOnEscapeKey);
	}, []);

	useEffect(() => {
		if (modalImg === undefined) {
			setShowModal(false);
		} else {
			setShowModal(true);
		}
	}, [modalImg]);

	const projects: Project[] = [
		{
			index: 0,
			image: '/project_thumbnails/light/kaguaruoo.jpg',
			image_dark: '/project_thumbnails/dark/kaguaruoo.jpg',
			description: 'Web Application',
			descriptionJP: 'Webアプリケーション',
			name: 'KagoAruoo JP',
			tech: 'Ruby on Rails, Coffee Script, PostgreSQL, WordPress',
			demo_link: '#',
			github_link: 'https://kaguaruoo.com/en',
			hover_gif_dark: '/project_gifs/dark/kaguaruoo.jpg',
			hover_gif_light: '/project_gifs/light/kaguaruoo.jpg',
		},
		{
			index: 1,
			image: '/project_thumbnails/light/clinics.jpg',
			image_dark: '/project_thumbnails/dark/clinics.jpg',
			description: 'Web & Mobile Application',
			descriptionJP: 'Web・Mobileアプリ',
			name: 'CLINICS（クリニクス）',
			tech: 'React, Next.js, Styled-Components, Node.js, Firebase',
			demo_link: '#',
			github_link: 'https://clinics-app.com/',
			hover_gif_dark: '/project_gifs/dark/clinics.jpg',
			hover_gif_light: '/project_gifs/light/clinics.jpg',
		},
		{
			index: 2,
			image: '/project_thumbnails/light/myschoolconnect.jpg',
			image_dark: '/project_thumbnails/dark/myschoolconnect.png',
			description: 'iOS / Android Application',
			descriptionJP: 'iOS・Androidアプリ',
			name: 'MY SCHOOL CONNECT AU',
			tech: 'React-Native, PHP, WordPress, jQuery, Mobile App Development',
			demo_link: '#',
			github_link: 'https://myschoolconnect.com.au/',
			hover_gif_dark: '/project_gifs/dark/myschoolconnect.png',
			hover_gif_light: '/project_gifs/light/myschoolconnect.jpg',
		},
		{
			index: 3,
			image: '/project_thumbnails/light/kindy.jpg',
			image_dark: '/project_thumbnails/dark/kindy.jpg',
			description: 'Web & Mobile Application',
			descriptionJP: 'Web・Mobileアプリ',
			name: 'Kindy JP',
			tech: 'React, Angular, Ionic Framework, Node.js, LoopBack, MongoDB, AWS, CI/CD, NewRelic',
			demo_link: '#',
			github_link: 'https://kindy-app.jp/',
			hover_gif_dark: '/project_gifs/dark/kindy.jpg',
			hover_gif_light: '/project_gifs/light/kindy.jpg',
		},
		{
			index: 4,
			image: '/project_thumbnails/light/drapefit.jpg',
			image_dark: '/project_thumbnails/dark/drapefit.jpg',
			description: 'Web Application',
			descriptionJP: 'Webアプリケーション',
			name: 'Drape Fit Inc. US',
			tech: 'React, Express, Node.js, MongoDB, AWS, PHP, cPanel, Angular, Java',
			demo_link: 'https://www.drapefit.com/',
			github_link: 'https://github.com/devmaster518/drapefit-bestfit-mern',
			hover_gif_dark: '/project_gifs/dark/drapefit.jpg',
			hover_gif_light: '/project_gifs/light/drapefit.jpg',
		},
		{
			index: 5,
			image: '/project_thumbnails/light/spoken.jpg',
			image_dark: '/project_thumbnails/dark/spoken.jpg',
			description: 'Web Application',
			descriptionJP: 'Webアプリケーション',
			name: 'Spoken',
			tech: 'Next.js, Express, GraphQL, PostgreSQL, Docker, Algolia',
			demo_link: '#',
			github_link: 'https://www.spoken.io/',
			hover_gif_dark: '/project_gifs/dark/spoken.jpg',
			hover_gif_light: '/project_gifs/light/spoken.jpg',
		},
		{
			index: 6,
			image: '/project_thumbnails/light/ape.jpg',
			image_dark: '/project_thumbnails/dark/ape.jpg',
			description: 'Web3 Marketplace',
			descriptionJP: 'Web3マーケットプレイス',
			name: 'ApeWorld WOV Marketplace',
			tech: 'React, Web3, Ether.js, GraphQL, NFT, ABI',
			demo_link: '#',
			github_link: 'https://github.com/devmaster518/ape-world-wov-marketplace',
			hover_gif_dark: '/project_gifs/dark/ape.jpg',
			hover_gif_light: '/project_gifs/light/ape.jpg',
		},
		{
			index: 7,
			image: '/project_thumbnails/light/healthcare.jpg',
			image_dark: '/project_thumbnails/dark/healthcare.jpg',
			description: 'Web Application',
			descriptionJP: 'Webアプリケーション',
			name: 'Health Care Plus',
			tech: 'React, React-Toastify, FontAwesome',
			demo_link: 'https://health-care-plus.vercel.app/',
			github_link: 'https://github.com/devmaster518/health-care-plus',
			hover_gif_dark: '/project_gifs/dark/healthcare.jpg',
			hover_gif_light: '/project_gifs/light/healthcare.jpg',
		},
		{
			index: 8,
			image: '/project_thumbnails/light/pyscraping.jpg',
			image_dark: '/project_thumbnails/dark/pyscraping.jpg',
			description: 'Python Web Scraping',
			descriptionJP: 'Python Webスクレイピング',
			name: 'Amazon eCommerce Scraper',
			tech: 'Python, Scrapy, Selenium, ASIN, CSV',
			demo_link: '#',
			github_link: 'https://github.com/devmaster518/amazon-ecommerce-py-scraper',
			hover_gif_dark: '/project_gifs/dark/pyscraping.jpg',
			hover_gif_light: '/project_gifs/light/pyscraping.jpg',
		},
		{
			index: 9,
			image: '/project_thumbnails/light/420portal.png',
			image_dark: '/project_thumbnails/dark/420portal.png',
			description: 'Mobile Application',
			descriptionJP: 'Mobileアプリ',
			name: '420 Portal App',
			tech: 'Ionic, iOS, Android, Angular, Laravel, Nuxt',
			demo_link: '#',
			github_link: 'https://github.com/devmaster518/420portal-app-android',
			hover_gif_dark: '/project_gifs/dark/420portal.png',
			hover_gif_light: '/project_gifs/light/420portal.png',
		},
	];

	return (
		<>
			<Element name="projects" className="relative" />
			<div className="mb-48">
				<h2 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					{mounted && (theme === 'dark' ? 'Projects' : 'プロジェクト')}
					{!mounted && 'Loading...'}
				</h2>
				<div className="mx-0 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:mx-4 lg:grid-cols-3">
					{projects.map((project) => {
						return (
							<div
								key={project.index}
								className={`group m-6 flex flex-col items-center justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700`}
							>
								<Fade bottom>
									<div className="relative flex h-full items-center justify-center">
										<Image
											src={theme === 'light' ? project.image : project.image_dark}
											alt={project.name}
											width={300}
											height={0}
											style={{ height: 'auto' }}
											title="Click to enlarge"
											onClick={() => {
												setModalImg(theme === 'dark' ? project.image_dark : project.image);
											}}
											className={`absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0`}
										/>
										<Image
											src={theme === 'light' ? project.hover_gif_light : project.hover_gif_dark}
											alt={project.name}
											width={300}
											height={0}
											style={{ height: 'auto' }}
											unoptimized={true}
											className={`mb-4 h-auto max-h-56 w-full rounded-lg object-contain`}
										/>
									</div>
									<div className={`w-full`}>
										<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">
											{mounted && (theme === 'dark' ? project.description : project.descriptionJP)}
										</p>
										<p className="my-1 text-xl font-medium">{project.name}</p>
										<p className="my-1 text-sm text-orange-500">{project.tech}</p>
										<div className="flex justify-between">
											<Link
												className="text-sm"
												href={project.demo_link}
												aria-label="Visit Demo"
												onClick={
													project.demo_link === '#'
														? (e) => {
																e.preventDefault();
															}
														: (e) => {
																e.preventDefault();
																window.open(project.demo_link, '_blank');
															}
												}
											>
												{project.demo_link === '#' ? '' : 'Visit'}
												<span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
											</Link>
											<Link
												href={project.github_link}
												rel="noreferrer"
												title={project.github_link.includes('github.com') ? 'GitHub' : 'Website'}
												target="_blank"
											>
												{project.github_link.includes('github.com') ? (
													<AiFillGithub className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
												) : (
													<AiOutlineLink className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-125 dark:text-white" />
												)}
											</Link>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</div>
			<div
				id="modal"
				className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${
					showModal ? 'flex' : 'hidden'
				}
				`}
				onClick={() => {
					setModalImg(undefined);
				}}
			>
				<div className="flex items-center justify-center sm:m-10 lg:m-20">
					{/* eslint-disable @next/next/no-img-element */}
					<img id="modal-img" alt="" src={modalImg ? modalImg : ''} className="max-h-[90dvh]" />
				</div>
			</div>
		</>
	);
}
