import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function Education() {
	return (
		<>
			<Element name="education" className="relative" />
			<div className="mb-48 mt-20 sm:mt-0">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Education
				</h3>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2021</p>
								<p className="my-1 text-xl font-medium">Web3 Solidity Bootcamp</p>
								<p className="my-1 text-sm font-medium">Online BootCamp at Metana</p>
								{/* <p className="text-sm">Grade: 89.5% </p> */}
							</div>
							<div className="block">
								<Image
									src="/solidity-bootcamp.png"
									alt="Metana Web3 Solidity Bootcamp Logo"
									width={100}
									height={100}
									title="Web3 Solidity Bootcamp 2021"
									onClick={() => {
										window.open('https://metana.io/web3-0-bootcamp/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2018</p>
								<p className="my-1 text-xl font-medium">The Complete NodeJs Development Bootcamp 2018</p>
								<p className="my-1 text-sm font-medium">Online Coding BootCamp</p>
								{/* <p className="text-sm">Grade: 89.5% </p> */}
							</div>
							<div className="block">
								<Image
									src="/udemy.png"
									alt="Udemy Bootcamp Logo"
									width={100}
									height={100}
									title="Udemy NodeJS Dev Bootcamp 2018"
									onClick={() => {
										window.open('https://www.udemy.com/course/the-complete-nodejs-development-bootcamp/', '_blank');
									}}
									className="hover:cursor-pointer"
								/>
							</div>
						</Fade>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800 dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<Fade left>
							<div>
								<p className="mb-2 text-base text-cyan-600 dark:text-cyan-500">2010-2015</p>
								<p className="my-1 font-medium sm:text-xl">B.Science in Math & Computer Science</p>
								<p className="my-1 text-sm font-medium">Dalian University of Technology</p>
								{/* <p className="text-sm">CGPA: 9.66</p> */}
							</div>
							<Image
								src="/DLUT_logo.png"
								alt="DLUT Logo"
								width={100}
								height={100}
								title="Dalian University of Technology (大连理工大学)"
								onClick={() => {
									window.open('https://en.dlut.edu.cn/', '_blank');
								}}
								className="object-contain hover:cursor-pointer"
							/>
						</Fade>
					</div>
					{/* </Slide> */}
				</div>
			</div>
		</>
	);
}
