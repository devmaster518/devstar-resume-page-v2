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
			description: 'Web Application - Real Estate, AirBnb',
			descriptionJP: 'Webアプリケーション / 不動産・AirBnb',
			name: 'KagoAruoo JP',
			tech: 'Ruby on Rails, Coffee Script, PostgreSQL, PHP, WordPress, Google Maps',
			demo_link: '#',
			github_link: 'https://kaguaruoo.com/en',
			hover_gif_dark: '/project_gifs/dark/kaguaruoo.jpg',
			hover_gif_light: '/project_gifs/light/kaguaruoo.jpg',
		},
		{
			index: 1,
			image: '/project_thumbnails/light/clinics.jpg',
			image_dark: '/project_thumbnails/dark/clinics.jpg',
			description: 'Web & Mobile Application - Health & Medical Care',
			descriptionJP: 'Web・Mobileアプリ / ヘルス・メディカルケア',
			name: 'CLINICS（クリニクス） JP',
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
			description: 'React Native - iOS/Android',
			descriptionJP: 'React Native / iOS・Androidアプリ',
			name: 'MY SCHOOL CONNECT AU',
			tech: 'React-Native, PHP, WordPress, jQuery, Mobile App Development, Payment Gateway Integration',
			demo_link: 'https://apps.apple.com/au/app/my-school-connect/id1136583371',
			github_link: 'https://myschoolconnect.com.au/',
			hover_gif_dark: '/project_gifs/dark/myschoolconnect.png',
			hover_gif_light: '/project_gifs/light/myschoolconnect.jpg',
		},
		{
			index: 3,
			image: '/project_thumbnails/light/kindy.jpg',
			image_dark: '/project_thumbnails/dark/kindy.jpg',
			description: 'Angular & Ionic Framework - Web & Mobile',
			descriptionJP: 'Angular・Ionic Framework / Web・Mobileアプリ',
			name: 'Kindy JP',
			tech: 'Angular, Ionic Framework, React, Node.js, LoopBack, MongoDB, AWS, GitHub CI/CD, NewRelic',
			demo_link: 'https://apkcombo.com/kindy/kindy.valueap.jp/',
			github_link: 'https://kindy-app.jp/',
			hover_gif_dark: '/project_gifs/dark/kindy.jpg',
			hover_gif_light: '/project_gifs/light/kindy.jpg',
		},
		{
			index: 4,
			image: '/project_thumbnails/light/drapefit.jpg',
			image_dark: '/project_thumbnails/dark/drapefit.jpg',
			description: 'Web Application - Online Styling Service',
			descriptionJP: 'Webアプリケーション / オンラインスタイリングサービス',
			name: 'Drape Fit Inc. US',
			tech: 'React, Node.js, Express, MongoDB, Redux, AWS, CakePHP, cPanel, Angular, Java Spring',
			demo_link: 'https://www.drapefit.com/',
			github_link: 'https://github.com/devmaster518/drapefit-bestfit-mern',
			hover_gif_dark: '/project_gifs/dark/drapefit.jpg',
			hover_gif_light: '/project_gifs/light/drapefit.jpg',
		},
		{
			index: 5,
			image: '/project_thumbnails/light/spoken.jpg',
			image_dark: '/project_thumbnails/dark/spoken.jpg',
			description: 'Web Application - eCommerce',
			descriptionJP: 'Webアプリケーション / ECサイト',
			name: 'Spoken.io US',
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
			description: 'Web3 Marketplace - NFT Wallet',
			descriptionJP: 'Web3マーケットプレイス / NFTウォレット',
			name: 'ApeWorld WOV Marketplace',
			tech: 'React, Web3, Ether.js, GraphQL, MetaMask, Wallet, NFT, ABI',
			demo_link: 'https://ape-world-marketplace.vercel.app/',
			github_link: 'https://github.com/devmaster518/ape-world-wov-marketplace',
			hover_gif_dark: '/project_gifs/dark/ape.jpg',
			hover_gif_light: '/project_gifs/light/ape.jpg',
		},
		{
			index: 7,
			image: '/project_thumbnails/light/healthcare.jpg',
			image_dark: '/project_thumbnails/dark/healthcare.jpg',
			description: 'Web Application - Medical Care',
			descriptionJP: 'Webアプリケーション / メディカルケア',
			name: 'Health Care Plus',
			tech: 'React, React-Toastify, FontAwesome, Styled Components, Vercel',
			demo_link: 'https://health-care-plus.vercel.app/',
			github_link: 'https://github.com/devmaster518/health-care-plus',
			hover_gif_dark: '/project_gifs/dark/healthcare.jpg',
			hover_gif_light: '/project_gifs/light/healthcare.jpg',
		},
		{
			index: 8,
			image: '/project_thumbnails/light/pyscraping.jpg',
			image_dark: '/project_thumbnails/dark/pyscraping.jpg',
			description: 'Web Scraping - Python Selenium',
			descriptionJP: 'Webスクレイピング / Python・Selenium',
			name: 'Amazon eCommerce Scraper',
			tech: 'Python, Scrapy, Selenium, ASIN, CSV, Amazon',
			demo_link: 'https://www.amazon.com/E-Commerce/',
			github_link: 'https://github.com/devmaster518/amazon-ecommerce-py-scraper',
			hover_gif_dark: '/project_gifs/dark/pyscraping.jpg',
			hover_gif_light: '/project_gifs/light/pyscraping.jpg',
		},
		{
			index: 9,
			image: '/project_thumbnails/light/420portal_app.png',
			image_dark: '/project_thumbnails/dark/420portal_app.png',
			description: 'Angular & Ionic Framework - Mobile App',
			descriptionJP: 'Angular・Ionic Framework / Mobileアプリ',
			name: '420Portal DE: Weed & Dispensaries',
			tech: 'Ionic, Angular, Capacitor, Android, iOS, Social App',
			demo_link: 'https://play.google.com/store/apps/details?id=io.portal420.app&hl=en_US',
			github_link: 'https://github.com/devmaster518/420portal-app-android',
			hover_gif_dark: '/project_gifs/dark/420portal_app.png',
			hover_gif_light: '/project_gifs/light/420portal_app.png',
		},
		{
			index: 10,
			image: '/project_thumbnails/light/420portal_web.png',
			image_dark: '/project_thumbnails/dark/420portal_web.png',
			description: 'Web Application - Social Media Platform',
			descriptionJP: 'Webアプリケーション / ソーシャル・メディアプラットフォーム',
			name: '420Portal DE Web App',
			tech: 'Vue, Nuxt.js, TypeScript, GraphQL, Node.js, Firebase, Google Maps, reCAPTCHA',
			demo_link: 'https://420portal.com/',
			github_link: 'https://github.com/devmaster518/420portal-user-nuxt',
			hover_gif_dark: '/project_gifs/dark/420portal_web.png',
			hover_gif_light: '/project_gifs/light/420portal_web.png',
		},
		{
			index: 11,
			image: '/project_thumbnails/light/runners.jpg',
			image_dark: '/project_thumbnails/dark/runners.jpg',
			description: 'Web Application - Sports',
			descriptionJP: 'Webアプリケーション / Sports',
			name: 'Runners School Italia',
			tech: 'Angular, TypeScript, WordPress, Cloudflare',
			demo_link: '#',
			github_link: 'https://www.runnerschoolitalia.com/',
			hover_gif_dark: '/project_gifs/dark/runners.jpg',
			hover_gif_light: '/project_gifs/light/runners.jpg',
		},
		{
			index: 12,
			image: '/project_thumbnails/light/stakoneau.png',
			image_dark: '/project_thumbnails/dark/stakoneau.png',
			description: 'Web Application - Agile Task Management',
			descriptionJP: 'Webアプリケーション / アジャイルタスク管理',
			name: 'StakTask - StakOne Solutions AU',
			tech: 'AngularJS, JavaScript, jQuery, Trello, RWD, PWA, Cloudflare, reCAPTCHA',
			demo_link: 'https://stakone.com.au/',
			github_link: 'https://github.com/stakone',
			hover_gif_dark: '/project_gifs/dark/stakoneau.png',
			hover_gif_light: '/project_gifs/light/stakoneau.png',
		},
		{
			index: 13,
			image: '/project_thumbnails/light/ambank.png',
			image_dark: '/project_thumbnails/dark/ambank.png',
			description: 'Web Application - Bank Service Dashboard',
			descriptionJP: 'Webアプリケーション / 銀行サービスダッシュボード',
			name: 'AmericanBank - Modern Banking, Lasting Relationships',
			tech: 'Angular, TypeScript, Material UI, Java, Spring Boot, Oracle',
			demo_link: '#',
			github_link: 'https://www.americanbank.com/',
			hover_gif_dark: '/project_gifs/dark/ambank.png',
			hover_gif_light: '/project_gifs/light/ambank.png',
		},
		{
			index: 14,
			image: '/project_thumbnails/light/ikea.png',
			image_dark: '/project_thumbnails/dark/ikea.png',
			description: 'Web Application - eCommerce',
			descriptionJP: 'Webアプリケーション / ECサイト',
			name: 'Furniture, home accessories, design ideas and inspiration for big dreams and small budgets. A better everyday life begins at home!',
			tech: 'Svelte, TypeScript, Astro, GraphQL, Apollo',
			demo_link: '#',
			github_link: 'https://www.ikea.com/',
			hover_gif_dark: '/project_gifs/dark/ikea.png',
			hover_gif_light: '/project_gifs/light/ikea.png',
		},
		{
			index: 15,
			image: '/project_thumbnails/light/tmobile.png',
			image_dark: '/project_thumbnails/dark/tmobile.png',
			description: 'Web Application - eCommerce',
			descriptionJP: 'Webアプリケーション / ECサイト',
			name: 'Telefony, Tablety, Laptopy, Szybki Internet - Dołącz do T-Mobile',
			tech: 'React, Next.js, TailwindCSS, AWS, reCAPTCHA, Node.js, GraphQL',
			demo_link: '#',
			github_link: 'https://www.t-mobile.pl/',
			hover_gif_dark: '/project_gifs/dark/tmobile.png',
			hover_gif_light: '/project_gifs/light/tmobile.png',
		},
		{
			index: 16,
			image: '/project_thumbnails/light/wyscout.png',
			image_dark: '/project_thumbnails/dark/wyscout.png',
			description: 'Web Scraping - Python Selenium',
			descriptionJP: 'Webスクレイピング / Python・Selenium',
			name: 'Python scraper using Selenium for wyscout',
			tech: 'Python, Selenium, Scrapy, Xlsx',
			demo_link: 'https://www.hudl.com/products/wyscout',
			github_link: 'https://github.com/devmaster518/wyscout-scraper',
			hover_gif_dark: '/project_gifs/dark/wyscout.png',
			hover_gif_light: '/project_gifs/light/wyscout.png',
		},
		{
			index: 17,
			image: '/project_thumbnails/light/turvy.png',
			image_dark: '/project_thumbnails/dark/turvy.png',
			description: 'React Native - Uber Mobile App',
			descriptionJP: 'React Native / UberタイプのMobileアプリ',
			name: 'Turvy LTD - Uber in Australia',
			tech: 'React Native, LeafMap, Uber, Rider, Driver, GeoLocation, iOS, Android',
			demo_link: 'https://turvy.net/',
			github_link: 'https://apps.apple.com/us/app/turvy-driver/id6444149465?platform=iphone',
			hover_gif_dark: '/project_gifs/dark/turvy.png',
			hover_gif_light: '/project_gifs/light/turvy.png',
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
