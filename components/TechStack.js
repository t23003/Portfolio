import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiMongodb, SiExpress, SiPostman, SiTailwindcss, SiFramer, SiShadcnui } from 'react-icons/si';

const tech = [
	{ icon: <SiNextdotjs className="text-2xl text-black dark:text-white" />, name: 'Next.js', desc: 'React framework' },
	{ icon: <SiJavascript className="text-2xl text-yellow-400" />, name: 'JavaScript', desc: 'Core language' },
	{ icon: <SiMongodb className="text-2xl text-green-500" />, name: 'MongoDB', desc: 'NoSQL database' },
	{ icon: <SiExpress className="text-2xl text-gray-300" />, name: 'Express.js', desc: 'Backend framework' },
	{ icon: <FaReact className="text-2xl text-cyan-400" />, name: 'React', desc: 'UI Library' },
	{ icon: <FaNodeJs className="text-2xl text-green-600" />, name: 'Node.js', desc: 'Backend runtime' },
	{ icon: <SiPostman className="text-2xl text-orange-500" />, name: 'REST API', desc: 'API architecture' },
	{ icon: <FaGitAlt className="text-2xl text-orange-600" />, name: 'Git', desc: 'Version control' },
	{ icon: <FaHtml5 className="text-2xl text-orange-500" />, name: 'HTML', desc: 'Markup language' },
	{ icon: <FaCss3Alt className="text-2xl text-blue-500" />, name: 'CSS', desc: 'Styling' },
	{ icon: <SiTailwindcss className="text-2xl text-sky-400" />, name: 'Tailwind CSS', desc: 'Utility-first CSS' },
	{ icon: <SiFramer className="text-2xl text-pink-500" />, name: 'Framer Motion', desc: 'Animation library' },
	{ icon: <SiShadcnui className="text-2xl text-violet-500" />, name: 'shadcn/ui', desc: 'UI components' },
];

export default function TechStackGrid() {
	return (
		<section className="w-full py-8 text-white" id="tech">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-4">Current technologies</h2>
				<p className="text-gray-400 mb-10 max-w-2xl">
					I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{tech.map((item, i) => (
						<div
							key={i}
							className="flex items-center gap-4 p-4 rounded-xl border border-white/10 backdrop-blur-md bg-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
						>
							<div>{item.icon}</div>
							<div>
								<div className="font-semibold">{item.name}</div>
								<div className="text-sm text-gray-400">{item.desc}</div>
							</div>
						</div>
					))}

				</div>
			</div>
		</section>
	);
}
