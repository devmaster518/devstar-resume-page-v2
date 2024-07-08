import { Analytics } from '@vercel/analytics/react';
import { Geologica } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';

import './globals.css';

const geologica = Geologica({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});

export const metadata = {
	title: 'Dennis W. | Solution Provider',
	description:
		"Showcasing the projects, skills, and achievements of Dennis W. Guru, a senior freelance developer from Calgary, Canada. Explore Dennis W's expertise in programming, problem-solving, and technical development through this carefully curated portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true} className={geologica.className}>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
