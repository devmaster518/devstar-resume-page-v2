import React, { useState, useEffect } from 'react';
import {
	TbBrandNextjs,
	TbBrandReact,
	TbBrandReactNative,
	TbBrandAngular,
	TbBrandVue,
	TbBrandTailwind,
	TbApi,
} from 'react-icons/tb';
import { DiJava, DiMongodb, DiPostgresql, DiPython, DiIonic, DiLaravel, DiBitbucket } from 'react-icons/di';
import {
	SiDjango,
	SiExpress,
	SiFirebase,
	SiMysql,
	SiSolidity,
	SiGin,
	SiRedis,
	SiAmazondynamodb,
	SiAmazonaws,
	SiMicrosoftazure,
	SiGraphql,
	SiDigitalocean,
	SiPandas,
	SiNestjs,
	SiSqlite,
	SiMicrosoftteams,
	SiJirasoftware,
	SiSelenium,
	SiEthereum,
	SiMongoose,
	SiSlack,
	SiMui,
	SiElectron,
	SiCircleci,
	SiSpeedtest,
	SiHeroku,
	SiVercel,
	SiRender,
	SiAsana,
	SiFigma,
	SiGoogledocs,
	SiSkype,
	SiTelegram,
	SiWhatsapp,
	SiZoom,
	SiGooglemeet,
} from 'react-icons/si';
import { FaHardHat, FaRProject } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { BsGit, BsGithub } from 'react-icons/bs';
import {
	BiLogoGoLang,
	BiLogoNodejs,
	BiLogoJavascript,
	BiLogoTypescript,
	BiLogoPhp,
	BiLogoCPlusPlus,
} from 'react-icons/bi';
import { FcLinux } from 'react-icons/fc';
import { FaDocker } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

interface Service {
	index: number;
	name: string;
	icon: React.ReactElement;
}

const languageSvcs: Service[] = [
	{
		index: 0,
		name: 'JavaScript',
		icon: <BiLogoJavascript className={'m-4 text-6xl text-yellow-500'} />,
	},
	{
		index: 1,
		name: 'TypeScript',
		icon: <BiLogoTypescript className={'m-4 text-6xl text-blue-500'} />,
	},
	{
		index: 2,
		name: 'Python',
		icon: <DiPython className="m-4 text-6xl text-cyan-700" />,
	},
	{
		index: 3,
		name: 'GoLang',
		icon: <BiLogoGoLang className={'m-4 text-6xl text-blue-700'} />,
	},
	{
		index: 4,
		name: 'Java',
		icon: <DiJava className={'m-4 text-6xl text-orange-700'} />,
	},
	{
		index: 5,
		name: 'PHP',
		icon: <BiLogoPhp className={'m-4 text-6xl text-purple-600'} />,
	},
	{
		index: 6,
		name: 'C++',
		icon: <BiLogoCPlusPlus className="m-4 text-6xl text-blue-600 " />,
	},
	{
		index: 7,
		name: 'Solidity',
		icon: <SiSolidity className="m-4 text-6xl text-violet-600" />,
	},
	{
		index: 8,
		name: 'R',
		icon: <FaRProject className="m-4 text-6xl text-blue-600" />,
	},
];

const frontendSvcs: Service[] = [
	{
		index: 0,
		name: 'React',
		icon: <TbBrandReact className={'m-4 text-6xl text-cyan-700'} />,
	},
	{
		index: 1,
		name: 'React Native',
		icon: <TbBrandReactNative className={'m-4 text-6xl text-cyan-600'} />,
	},
	{
		index: 2,
		name: 'Angular',
		icon: <TbBrandAngular className={'m-4 text-6xl text-pink-600'} />,
	},
	{
		index: 3,
		name: 'Ionic',
		icon: <DiIonic className={'m-4 text-6xl text-blue-500'} />,
	},
	{
		index: 4,
		name: 'Next.js',
		icon: <TbBrandNextjs className={'m-4 text-6xl text-black'} />,
	},
	{
		index: 5,
		name: 'Vue.js',
		icon: <TbBrandVue className="m-4 text-6xl text-green-600 " />,
	},
	{
		index: 6,
		name: 'Tailwind CSS',
		icon: <TbBrandTailwind className="m-4 text-6xl text-blue-400" />,
	},
	{
		index: 7,
		name: 'Material UI',
		icon: <SiMui className="m-4 text-6xl text-blue-600" />,
	},
	{
		index: 8,
		name: 'Electron',
		icon: <SiElectron className="m-4 text-6xl text-cyan-600" />,
	},
	{
		index: 9,
		name: 'Pandas',
		icon: <SiPandas className={'m-4 text-6xl text-gray-300'} />,
	},
	{
		index: 10,
		name: 'Selenium',
		icon: <SiSelenium className={'m-4 text-6xl text-green-600'} />,
	},
	{
		index: 11,
		name: 'Hardhat',
		icon: <FaHardHat className={'m-4 text-6xl text-yellow-400'} />,
	},
];

const backendSvcs: Service[] = [
	{
		index: 0,
		name: 'Node.js',
		icon: <BiLogoNodejs className={'m-4 text-6xl text-green-500'} />,
	},
	{
		index: 1,
		name: 'Express',
		icon: <SiExpress className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 2,
		name: 'NestJS',
		icon: <SiNestjs className={'m-4 text-6xl text-red-500'} />,
	},
	{
		index: 3,
		name: 'Django',
		icon: <SiDjango className={'m-4 text-6xl text-green-800'} />,
	},
	{
		index: 4,
		name: 'Gin',
		icon: <SiGin className={'m-4 text-6xl text-orange-500'} />,
	},
	{
		index: 5,
		name: 'Laravel',
		icon: <DiLaravel className={'m-4 text-6xl text-red-600'} />,
	},
	{
		index: 6,
		name: 'REST API',
		icon: <TbApi className={'m-4 text-6xl text-gray-400'} />,
	},
	{
		index: 7,
		name: 'Ethereum',
		icon: <SiEthereum className={'m-4 text-6xl text-gray-500'} />,
	},
];

const dbmsSvcs: Service[] = [
	{
		index: 0,
		name: 'MongoDB',
		icon: <DiMongodb className={'m-4 text-6xl text-green-800'} />,
	},
	{
		index: 1,
		name: 'Mongoose',
		icon: <SiMongoose className={'m-4 text-6xl text-red-600'} />,
	},
	{
		index: 2,
		name: 'MySQL',
		icon: <SiMysql className={'m-4 text-6xl text-orange-600'} />,
	},
	{
		index: 3,
		name: 'PostgreSQL',
		icon: <DiPostgresql className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 4,
		name: 'Redis',
		icon: <SiRedis className={'m-4 text-6xl text-red-600'} />,
	},
	{
		index: 5,
		name: 'Cloud DBs',
		icon: <SiAmazondynamodb className={'m-4 text-6xl text-blue-700'} />,
	},
	{
		index: 6,
		name: 'SQLite',
		icon: <SiSqlite className={'m-4 text-6xl text-blue-500'} />,
	},
	{
		index: 7,
		name: 'GraphQL',
		icon: <SiGraphql className={'m-4 text-6xl text-pink-600'} />,
	},
];

const devopsSvcs = [
	{
		index: 0,
		name: 'Git',
		icon: <BsGit className={'m-4 text-6xl text-red-500'} />,
	},
	{
		index: 1,
		name: 'GitHub',
		icon: <BsGithub className={'m-4 text-6xl text-purple-600'} />,
	},
	{
		index: 2,
		name: 'Bitbucket',
		icon: <DiBitbucket className={'m-4 text-6xl text-blue-700'} />,
	},
	{
		index: 3,
		name: 'Linux',
		icon: <FcLinux className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 4,
		name: 'Docker',
		icon: <FaDocker className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 5,
		name: 'CI/CD',
		icon: <SiCircleci className={'m-4 text-6xl text-black'} />,
	},
	{
		index: 6,
		name: 'Agile',
		icon: <MdGroups className={'m-4 text-6xl text-gray-100'} />,
	},
	{
		index: 7,
		name: 'Unit Test',
		icon: <SiSpeedtest className={'m-4 text-6xl text-gray-400'} />,
	},
];

const cloudSvcs = [
	{
		index: 0,
		name: 'AWS',
		icon: <SiAmazonaws className={'m-4 text-6xl text-yellow-500'} />,
	},
	{
		index: 1,
		name: 'DigitalOcean',
		icon: <SiDigitalocean className={'m-4 text-6xl text-cyan-600'} />,
	},
	{
		index: 2,
		name: 'MS Azure',
		icon: <SiMicrosoftazure className={'m-4 text-6xl text-blue-700'} />,
	},
	{
		index: 3,
		name: 'Heroku',
		icon: <SiHeroku className={'m-4 text-6xl text-purple-500'} />,
	},
	{
		index: 4,
		name: 'Vercel',
		icon: <SiVercel className={'m-4 text-6xl text-black'} />,
	},
	{
		index: 5,
		name: 'Render',
		icon: <SiRender className={'m-4 text-6xl text-green-400'} />,
	},
	{
		index: 6,
		name: 'Firebase',
		icon: <SiFirebase className={'m-4 text-6xl text-yellow-600'} />,
	},
];

const teamworkSvcs = [
	{
		index: 0,
		name: 'Slack',
		icon: <SiSlack className={'m-4 text-6xl text-gray-300'} />,
	},
	{
		index: 1,
		name: 'MS Teams',
		icon: <SiMicrosoftteams className={'m-4 text-6xl text-purple-600'} />,
	},
	{
		index: 2,
		name: 'Jira',
		icon: <SiJirasoftware className={'m-4 text-6xl text-blue-500'} />,
	},
	{
		index: 3,
		name: 'Asana',
		icon: <SiAsana className={'m-4 text-6xl text-pink-500'} />,
	},
	{
		index: 4,
		name: 'Figma',
		icon: <SiFigma className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 5,
		name: 'Google Docs',
		icon: <SiGoogledocs className={'m-4 text-6xl text-blue-600'} />,
	},
];

const communicateSvcs = [
	{
		index: 0,
		name: 'Skype',
		icon: <SiSkype className={'m-4 text-6xl text-blue-500'} />,
	},
	{
		index: 1,
		name: 'Telegram',
		icon: <SiTelegram className={'m-4 text-6xl text-blue-400'} />,
	},
	{
		index: 2,
		name: 'WhatsApp',
		icon: <SiWhatsapp className={'m-4 text-6xl text-green-500'} />,
	},
	{
		index: 3,
		name: 'Zoom',
		icon: <SiZoom className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 4,
		name: 'Google Meet',
		icon: <SiGooglemeet className={'m-4 text-6xl text-green-600'} />,
	},
];

const columnHeaders = [
	{
		name: 'Languages',
		nameJP: 'PG言語',
		svcs: languageSvcs,
	},
	{
		name: 'FrontEnd',
		nameJP: 'フロントエンド',
		svcs: frontendSvcs,
	},
	{
		name: 'BackEnd',
		nameJP: 'バックエンド',
		svcs: backendSvcs,
	},
	{
		name: 'DBMS',
		nameJP: 'データベース',
		svcs: dbmsSvcs,
	},
	{
		name: 'DevOps',
		nameJP: 'デブオプス',
		svcs: devopsSvcs,
	},
	{
		name: 'PaaS/BaaS',
		nameJP: 'クラウド',
		svcs: cloudSvcs,
	},
	{
		name: 'Teamwork',
		nameJP: 'チームワーク',
		svcs: teamworkSvcs,
	},
	{
		name: 'Communications',
		nameJP: 'コミュニケーション',
		svcs: communicateSvcs,
	},
];

export default function Services() {
	const [svcs, setSvcs] = useState(languageSvcs);
	const [currSvc, setCurrSvc] = useState(columnHeaders[0].name);
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	//-- When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	return (
		<>
			<Element name="services" className="relative" />
			<div className="mx-5 mb-48 overflow-hidden rounded-xl  border-2 border-cyan-300 bg-cyan-100 px-4 pb-5 pt-6 text-gray-700 dark:border-0 dark:bg-gray-800 dark:text-white md:mx-10 md:px-8 md:pb-8">
				<h3 className="text-center text-2xl font-medium md:text-3xl">
					{mounted && (theme === 'dark' ? 'Services' : 'サービス')}
					{!mounted && 'Loading...'}
				</h3>
				<div className="mt-6 flex flex-col sm:flex-row">
					<div className="mb-5 flex flex-row justify-between overflow-scroll rounded-xl bg-cyan-200 px-2 py-5 dark:bg-gray-700 sm:mb-0 sm:mr-8 sm:flex-col sm:overflow-visible md:px-5">
						{columnHeaders.map((columnHeader) => {
							return (
								<Fade bottom key={columnHeader.name}>
									<h4
										className={`mb-2 cursor-pointer whitespace-nowrap rounded px-4 py-2 text-center hover:bg-cyan-500 hover:text-white dark:hover:bg-gray-600 ${currSvc === columnHeader.name && 'bg-cyan-500 text-white'}`}
										onClick={() => {
											setSvcs([...columnHeader.svcs]);
											setCurrSvc(columnHeader.name);
										}}
									>
										{mounted && (theme === 'dark' ? columnHeader.name : columnHeader.nameJP)}
									</h4>
								</Fade>
							);
						})}
					</div>
					<div className="grid w-full grid-cols-2 rounded-xl bg-cyan-200 p-5 dark:bg-gray-700 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
						{svcs.map((svc) => {
							return (
								<Fade right key={svc.index} cascade>
									<div className="m-auto">
										<a>
											<motion.button
												whileHover={{
													scale: 1.2,
													rotate: 360,
													transition: { duration: 2 },
												}}
												whileTap={{ scale: 0.9 }}
											>
												{svc.icon}
											</motion.button>
										</a>
										<p className="text-center text-sm">{svc.name}</p>
									</div>
								</Fade>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
