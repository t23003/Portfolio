import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaXTwitter } from 'react-icons/fa6'

export default function Hero() {
	return (
		<div className="min-h-[100dvh] w-full py-20 flex flex-col md:flex-row items-center justify-center gap-12">
			<Image
				src="/hero.png"
				width={500}
				height={500}
				alt="Tushar Bhanushali"
				className="rounded-full shadow-xl object-cover"
			/>

			<div className="md:w-full flex flex-col gap-6 text-white">
				<h1 className="text-5xl font-bold leading-tight">Tushar Bhanushali</h1>
				<h2 className="text-2xl font-medium text-gray-300">Full Stack Developer | Next.js | MERN Stack</h2>
				<p className="text-2xl text-gray-400 max-w-md">
					I build fast, clean, and scalable web applications using modern technologies.
				</p>

				<div className="flex flex-wrap gap-4 text-white text-2xl">
					<a href="https://github.com/tushardama" target="_blank" aria-label="GitHub">
						<FaGithub />
					</a>
					<a href="https://www.linkedin.com/in/tushardama/" target="_blank" aria-label="LinkedIn">
						<FaLinkedin />
					</a>
					<a href="https://x.com/TUSHARBHANUSH20" target="_blank" aria-label="X">
						<FaXTwitter />
					</a>
					<a href="mailto:tushardama@gmail.com" aria-label="Email">
						<FaEnvelope />
					</a>
					<a href="tel:+919820012345" aria-label="Phone">
						<FaPhone />
					</a>
				</div>

				<div className="flex flex-col md:flex-row gap-4 mt-2">
					<Link href="#projects" className="btn-primary">
						View Projects
					</Link>
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
						View Resume
					</a>
				</div>
			</div>
		</div>
	)
}
