import Image from 'next/image';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { useTheme } from 'next-themes';
import { Element } from 'react-scroll';
import { title } from 'process';

interface Diploma {
	index: number;
	image: string;
	image_dark: string;
	name: string;
	nameJP: string;
	degree: string;
	degreeJP: string;
	hover_gif_dark: string;
	hover_gif_light: string;
}

export default function Education() {
	const [modalImg, setModalImg] = useState<string | undefined>(undefined);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { theme } = useTheme();

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

	const diplomas: Diploma[] = [
		{
			index: 0,
			image: '/project_thumbnails/light/dlut.jpg',
			image_dark: '/project_thumbnails/dark/dlut.jpg',
			name: 'Dalian University of Technology',
			nameJP: '大连理工大学',
			degree: 'B. Science in Math & Computer Science',
			degreeJP: '数学・コンピュータサイエンスの理学士',
			hover_gif_dark: '/project_gifs/dark/dlut.jpg',
			hover_gif_light: '/project_gifs/light/dlut.jpg',
		},
		{
			index: 1,
			image: '/project_thumbnails/light/udemy.jpg',
			image_dark: '/project_thumbnails/dark/udemy.jpg',
			name: 'Online Coding Bootcamp 2020',
			nameJP: 'オンラインコーディングブートキャンプ 2020',
			degree: 'Certificate of Completion',
			degreeJP: '修了証',
			hover_gif_dark: '/project_gifs/dark/udemy.jpg',
			hover_gif_light: '/project_gifs/light/udemy.jpg',
		},
	];

	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					{theme === 'dark' ? 'Education' : '教育'}
				</h3>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2010-2015</p>
								<p className="my-1 font-medium sm:text-xl">
									{theme === 'dark' ? 'B. Science in Math & Computer Science' : '数学・コンピュータサイエンスの理学士'}
								</p>
								<p className="my-1 text-sm font-medium">
									{theme === 'dark' ? 'Dalian University of Technology' : '大连理工大学'}
								</p>
								<p className="text-sm">GPA: 3.8</p>
							</div>
							<Image
								src="/DLUT_logo.png"
								alt="DLUT Logo"
								width={100}
								height={100}
								title={theme === 'dark' ? 'Dalian University of Technology' : '大连理工大学'}
								onClick={() => {
									window.open('https://en.dlut.edu.cn/', '_blank');
								}}
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2020</p>
								<p className="my-1 text-xl font-medium">
									{title === 'dark'
										? 'The Complete NodeJS Development Bootcamp 2020'
										: '完全Node.js 開発ブートキャンプ 2020'}
								</p>
								<p className="my-1 text-sm font-medium">
									{theme === 'dark' ? 'Online Coding BootCamp' : 'オンラインコーディングブートキャンプ'}
								</p>
								{/* <p className="text-sm">Grade: 89.5% </p> */}
							</div>
							<div className="block">
								<Image
									src="/udemy.png"
									alt="Udemy Bootcamp Logo"
									width={100}
									height={100}
									title={theme === 'dark' ? 'Online Coding BootCamp' : 'オンラインコーディングブートキャンプ'}
									onClick={() => {
										window.open('https://www.udemy.com/course/the-complete-nodejs-development-bootcamp/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2022</p>
								<p className="my-1 text-xl font-medium">
									{theme === 'dark' ? 'Web3 Solidity Bootcamp' : 'Web3 Solidity ブートキャンプ'}
								</p>
								<p className="my-1 text-sm font-medium">
									{theme === 'dark' ? 'Online BootCamp at Metana' : 'Metanaのオンライン ブートキャンプ'}
								</p>
							</div>
							<div className="block">
								<Image
									src="/solidity-bootcamp.png"
									alt="Metana Web3 Solidity Bootcamp Logo"
									width={100}
									height={100}
									title={theme === 'dark' ? 'Web3 Solidity Bootcamp' : 'Web3 Solidity ブートキャンプ'}
									onClick={() => {
										window.open('https://metana.io/web3-0-bootcamp/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					{/* </Slide> */}
				</div>
				{/* <Diplomas> */}
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-4 lg:grid-cols-3">
					{diplomas.map((diploma) => {
						return (
							<div
								key={diploma.index}
								className={`group m-6 flex flex-col items-center justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700`}
							>
								<Fade bottom>
									<div className="relative flex h-full items-center justify-center">
										<Image
											src={theme === 'light' ? diploma.image : diploma.image_dark}
											alt={diploma.name}
											width={300}
											height={224}
											title="Click to enlarge"
											onClick={() => {
												setModalImg(theme === 'dark' ? diploma.image_dark : diploma.image);
											}}
											className={`absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0`}
										/>
										<Image
											src={theme === 'light' ? diploma.hover_gif_light : diploma.hover_gif_dark}
											alt={diploma.name}
											width={300}
											height={224}
											unoptimized={true}
											className={`mb-4 h-auto max-h-56 w-full rounded-lg object-contain`}
										/>
									</div>
									<div className={`w-full`}>
										<p className="my-1 text-xl font-medium">{theme === 'dark' ? diploma.name : diploma.nameJP}</p>
										<p className="my-1 text-sm text-orange-500">
											{theme === 'dark' ? diploma.degree : diploma.degreeJP}
										</p>
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
