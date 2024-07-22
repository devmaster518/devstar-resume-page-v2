import React, { useState, useEffect } from 'react';
import { TbBrandCpp, TbBrandNextjs, TbBrandReact, TbBrandReactNative, TbBrandAngular } from 'react-icons/tb';
import { DiJava, DiMongodb, DiPostgresql, DiPython, DiIonic } from 'react-icons/di';
import {
	SiDjango,
	SiExpress,
	SiFirebase,
	SiMysql,
	SiSolidity,
	SiGin,
	SiRedis,
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
} from 'react-icons/si';
import { FaHardHat, FaRProject } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { BiLogoGoLang, BiLogoNodejs } from 'react-icons/bi';
import { FcLinux } from 'react-icons/fc';
import { FaDocker } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

interface Tool {
	index: number;
	name: string;
	icon: React.ReactElement;
}

const languageTools: Tool[] = [
	{
		index: 0,
		name: 'JS/TS',
		icon: <BiLogoNodejs className={'m-4 text-6xl text-green-500'} />,
	},
	{
		index: 1,
		name: 'Python',
		icon: <DiPython className="m-4 text-6xl text-cyan-700" />,
	},
	{
		index: 2,
		name: 'GoLang',
		icon: <BiLogoGoLang className={'m-4 text-6xl text-blue-700'} />,
	},
	{
		index: 3,
		name: 'Java',
		icon: <DiJava className={'m-4 text-6xl text-orange-700'} />,
	},
	{
		index: 4,
		name: 'C++',
		icon: <TbBrandCpp className="m-4 text-6xl text-blue-500 " />,
	},
	{
		index: 5,
		name: 'Solidity',
		icon: <SiSolidity className="m-4 text-6xl text-violet-600" />,
	},
	{
		index: 6,
		name: 'R',
		icon: <FaRProject className="m-4 text-6xl text-blue-600" />,
	},
];

const frameworkTools: Tool[] = [
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
		name: 'Next.js',
		icon: <TbBrandNextjs className={'m-4 text-6xl text-black'} />,
	},
	{
		index: 3,
		name: 'Angular',
		icon: <TbBrandAngular className={'m-4 text-6xl text-pink-600'} />,
	},
	{
		index: 4,
		name: 'Ionic',
		icon: <DiIonic className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 5,
		name: 'Express.js',
		icon: <SiExpress className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 6,
		name: 'NestJS',
		icon: <SiNestjs className={'m-4 text-6xl text-red-500'} />,
	},
	{
		index: 7,
		name: 'Django',
		icon: <SiDjango className={'m-4 text-6xl text-green-800'} />,
	},
	{
		index: 8,
		name: 'Pandas',
		icon: <SiPandas className={'m-4 text-6xl text-gray-300'} />,
	},
	{
		index: 9,
		name: 'Selenium',
		icon: <SiSelenium className={'m-4 text-6xl text-green-600'} />,
	},
	{
		index: 10,
		name: 'Gin',
		icon: <SiGin className={'m-4 text-6xl text-orange-500'} />,
	},
	{
		index: 11,
		name: 'Ethereum',
		icon: <SiEthereum className={'m-4 text-6xl text-gray-500'} />,
	},
	{
		index: 12,
		name: 'Hardhat',
		icon: <FaHardHat className={'m-4 text-6xl text-yellow-400'} />,
	},
];

const databaseTools: Tool[] = [
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
		name: 'PostgreSQL',
		icon: <DiPostgresql className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 3,
		name: 'MySQL',
		icon: <SiMysql className={'m-4 text-6xl text-orange-600'} />,
	},
	{
		index: 4,
		name: 'Redis',
		icon: <SiRedis className={'m-4 text-6xl text-red-600'} />,
	},
	{
		index: 5,
		name: 'GraphQL',
		icon: <SiGraphql className={'m-4 text-6xl text-pink-600'} />,
	},
	{
		index: 6,
		name: 'SQLite',
		icon: <SiSqlite className={'m-4 text-6xl text-blue-500'} />,
	},
];

const otherTools = [
	{
		index: 0,
		name: 'Git',
		icon: <BsGit className={'m-4 text-6xl text-red-500'} />,
	},
	{
		index: 1,
		name: 'Linux',
		icon: <FcLinux className={'m-4 text-6xl text-white'} />,
	},
	{
		index: 2,
		name: 'Docker',
		icon: <FaDocker className={'m-4 text-6xl text-blue-600'} />,
	},
	{
		index: 3,
		name: 'AWS',
		icon: <SiAmazonaws className={'m-4 text-6xl text-yellow-500'} />,
	},
	{
		index: 4,
		name: 'MS Azure',
		icon: <SiMicrosoftazure className={'m-4 text-6xl text-blue-700'} />,
	},
	{
		index: 5,
		name: 'Firebase',
		icon: <SiFirebase className={'m-4 text-6xl text-yellow-600'} />,
	},
	{
		index: 6,
		name: 'DigitalOcean',
		icon: <SiDigitalocean className={'m-4 text-6xl text-cyan-600'} />,
	},
	{
		index: 7,
		name: 'Slack',
		icon: <SiSlack className={'m-4 text-6xl text-gray-300'} />,
	},
	{
		index: 8,
		name: 'MS Teams',
		icon: <SiMicrosoftteams className={'m-4 text-6xl text-purple-600'} />,
	},
	{
		index: 9,
		name: 'Atlassian Jira',
		icon: <SiJirasoftware className={'m-4 text-6xl text-blue-500'} />,
	},
];

const columnHeaders = [
	{
		name: 'PG Langs',
		nameJP: 'PG言語',
		tools: languageTools,
	},
	{
		name: 'Frameworks',
		nameJP: 'フレームワーク',
		tools: frameworkTools,
	},
	{
		name: 'Databases',
		nameJP: 'データベース',
		tools: databaseTools,
	},
	{
		name: 'DevOps',
		nameJP: 'DevOps',
		tools: otherTools,
	},
];

export default function ToolBox() {
	const [tools, setTools] = useState(languageTools);
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	//-- When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	return (
		<>
			<Element name="toolbox" className="relative" />
			<div className="mx-5 mb-48 overflow-hidden rounded-xl  border-2 border-cyan-300 bg-cyan-100 px-4 pb-5 pt-6 text-gray-700 dark:border-0 dark:bg-gray-800 dark:text-white md:mx-10 md:px-8 md:pb-8">
				<h3 className="text-center text-2xl font-medium md:text-3xl">
					{mounted && (theme === 'dark' ? 'Expertise' : '専門知識')}
					{!mounted && 'Loading...'}
				</h3>
				<div className="mt-6 flex flex-col sm:flex-row">
					<div className="mb-5 flex flex-row justify-between overflow-scroll rounded-xl bg-cyan-200 px-2 py-5 dark:bg-gray-700 sm:mb-0 sm:mr-8 sm:flex-col sm:overflow-visible md:px-5">
						{columnHeaders.map((columnHeader) => {
							return (
								<Fade bottom key={columnHeader.name}>
									<h4
										className="mb-2 cursor-pointer whitespace-nowrap rounded px-4 py-2 text-center hover:bg-cyan-500 hover:text-white dark:hover:bg-gray-600"
										onClick={() => {
											setTools([...columnHeader.tools]);
										}}
									>
										{mounted && (theme === 'dark' ? columnHeader.name : columnHeader.nameJP)}
									</h4>
								</Fade>
							);
						})}
					</div>
					<div className="grid w-full grid-cols-2 rounded-xl bg-cyan-200 p-5 dark:bg-gray-700 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8  xl:grid-cols-10">
						{tools.map((tool) => {
							return (
								<Fade right key={tool.index} cascade>
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
												{tool.icon}
											</motion.button>
										</a>
										<p className="text-center text-sm">{tool.name}</p>
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
