import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="w-full text-white py-8">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Actively seeking full-time or freelance opportunities — <a href='mailto:dev.tusharbhanushali@gmail.com' className="text-blue-400 underline">email me</a> to connect directly.
					</h2>

					<div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-base md:text-2xl">
						<FaEnvelope className="text-blue-400" />
						<span className='wrap-anywhere'>dev.tusharbhanushali@gmail.com</span>
					</div>

					<a
						href="https://x.com/TUSHARBHANUSH20"
						target="_blank"
						rel="noreferrer"
						className="inline-block mt-4 px-6 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition"
					>
						Hire Me
					</a>
				</div>

				<div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 text-sm text-gray-400">
					<div>
						<p className="font-semibold text-white">Tushar Bhanushali</p>
						<p>© {new Date().getFullYear()} | All rights reserved.</p>
					</div>
					<div>
						<h4 className="font-semibold text-white mb-2">Navigate</h4>
						<ul className="space-y-1">
							<li><Link href="#home">Home</Link></li>
							<li><Link href="#projects">Projects</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-white mb-2">Resume</h4>
						<ul className="space-y-1">
							<li><a href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a></li>
							<li><a href="mailto:dev.tusharbhanushali@gmail.com">Email Me</a></li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-white mb-2">Socials</h4>
						<ul className="space-y-1">
							<li><a href="https://www.linkedin.com/in/tushardama/" target="_blank" rel="noreferrer">LinkedIn</a></li>
							<li><a href="https://github.com/tushardama" target="_blank" rel="noreferrer">GitHub</a></li>
							<li><a href="https://x.com/TUSHARBHANUSH20" target="_blank" rel="noreferrer">Twitter</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
