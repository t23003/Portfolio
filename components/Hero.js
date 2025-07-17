import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Hero() {
	return (
		<div className="min-h-[100dvh] w-full py-20 flex flex-col md:flex-row items-center justify-center gap-12">
			<Image
				src="/hero.png"
				width={320}
				height={320}
				alt="Tushar Bhanushali"
				className="rounded-full w-[280px] h-[280px] md:w-[320px] md:h-[320px] shadow-xl object-cover border-4 border-blue-400"
				role="img"
				aria-label="Portrait of Tushar Bhanushali"
			/>
			<div className="md:w-full flex flex-col gap-6 text-white">
				<div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-green-400 text-sm rounded-full w-fit border border-white/20">
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]"></span>
					</span>
					<span className="text-white">Available for work · Umargam, Gujarat</span>
				</div>
				<h1 className="text-5xl font-bold leading-tight">Tushar Bhanushali</h1>
				<h2 className="text-2xl font-medium text-gray-300">Full Stack Developer | Next.js | MERN Stack</h2>
				<p className="text-xl text-gray-200 max-w-md">
					I build fast, clean, and scalable web applications using modern technologies.
				</p>

				<div className="flex flex-wrap gap-4">
					<a
						href="https://github.com/tushardama"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="text-white hover:text-blue-400 transition-colors text-2xl"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/tushardama/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="text-white hover:text-blue-400 transition-colors text-2xl"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://x.com/TUSHARBHANUSH20"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="X"
						className="text-white hover:text-blue-400 transition-colors text-2xl"
					>
						<FaXTwitter />
					</a>
					<a
						href="mailto:dev.tusharbhanushali@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Email"
						className="text-white hover:text-blue-400 transition-colors text-2xl"
					>
						<FaEnvelope />
					</a>
				</div>

				<div className="flex flex-col md:flex-row gap-4 mt-2">
					<Link
						href="#projects"
						className="btn-primary hover:opacity-90 transition-opacity"
					>
						View Projects
					</Link>
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-secondary hover:opacity-90 transition-opacity"
					>
						View Resume
					</a>
				</div>
			</div>
		</div>
	);
}
