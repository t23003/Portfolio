import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { PiRocketLaunchBold } from 'react-icons/pi';
import Image from 'next/image';

const projects = [
	{
		name: 'GoDinoType',
		url: 'https://godinotype.netlify.app',
		repo: 'https://github.com/tushardama/godinotype',
		og: '/godinotype.png',
		description: `A real-time typing race application built with Next.js. Tracks WPM, accuracy, and dynamic caret feedback with Firebase session storage. Features Google/GitHub login, live leaderboard, and public result sharing.`,
	},
	{
		name: 'RankVibeHQ',
		url: 'https://rankvibehq.vercel.app',
		repo: 'https://github.com/tushardama/rankvibehq',
		og: 'https://rankvibehq.vercel.app/og.jpg',
		description: `SEO keyword tool that fetches and clusters Google autocomplete suggestions. Implements async fetch batching, deduplication, and exportable results. Designed for fast and clean SEO content planning.`,
	},
	{
		name: 'ShrinkX',
		url: 'https://shrinkx.netlify.app',
		repo: 'https://github.com/tushardama/shrinkx',
		og: '/shrinkx.png',
		description: `Authenticated URL shortener with user dashboard. Uses NextAuth.js for session-based login, Prisma for metadata tracking, and custom redirect handling. Limits and manages links per user.`,
	},
	{
		name: 'Luxury Developers',
		url: 'https://luxurydevelopersltd.netlify.app',
		repo: 'https://github.com/tushardama/luxurydevelopers',
		og: '/luxurydevelopers.png',
		description: `Responsive real estate website designed for client demos. Features smooth transitions, high-conversion layout, and visually-rich project presentation. Built with Tailwind and Framer Motion.`,
	},
];

export default function ProjectsSection() {
	return (
		<section className="w-full py-8 text-white" id="projects">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-10">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					{projects.map((project, i) => (
						<div
							key={i}
							className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden"
						>
							<div className="relative w-full aspect-video overflow-hidden border-b border-white/10">
								<Image
									src={project.og}
									alt={`${project.name} preview`}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="p-6 space-y-4">
								<h3 className="text-xl font-semibold">{project.name}</h3>
								<p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
								<div className="flex flex-col sm:flex-row gap-4 pt-2">
									<a
										href={project.repo}
										target="_blank"
										rel="noreferrer"
										className="w-full sm:w-auto text-center px-5 py-2.5 rounded-md border border-white text-white text-sm hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
									>
										<FaGithub className="text-lg" /> Source Code
									</a>
									<a
										href={project.url}
										target="_blank"
										rel="noreferrer"
										className="w-full sm:w-auto text-center px-5 py-2.5 rounded-md bg-white text-black text-sm hover:bg-transparent hover:text-white border border-white transition flex items-center justify-center gap-2"
									>
										<PiRocketLaunchBold className="text-lg" /> Live Demo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
