import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function ExperienceEducation() {
	return (
		<section className="w-full py-8 text-white" id="experience">
			<h2 className="text-4xl font-bold mb-10 text-white">Work & Education</h2>
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
				
				<div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl space-y-4">
					<div className="flex items-center gap-3">
						<FaBriefcase className="text-xl text-blue-400" />
						<h2 className="text-2xl font-bold">Experience</h2>
					</div>
					<h3 className="text-lg md:text-xl font-semibold">Android Developer Intern</h3>
					<p className="text-sm text-gray-400">Enjay IT LTD · Bhilad</p>
					<p className="text-sm text-gray-500">June 2022 – June 2023</p>
					<ul className="list-disc ml-5 text-sm text-gray-300 space-y-1 pt-2">
						<li>Built Android features using Java and Kotlin.</li>
						<li>Developed CRM modules using Android Studio.</li>
						<li>Worked with dev teams following structured workflows.</li>
					</ul>
				</div>

				<div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl space-y-4">
					<div className="flex items-center gap-3">
						<FaGraduationCap className="text-xl text-green-400" />
						<h2 className="text-2xl font-bold">Education</h2>
					</div>
					<h3 className="text-lg md:text-xl font-semibold">Diploma in Software Development</h3>
					<p className="text-sm text-gray-400">Laxmi Institute of Technology · GTU</p>
					<p className="text-sm text-gray-500">June 2020 – June 2023</p>
					<ul className="list-disc ml-5 text-sm text-gray-300 space-y-1 pt-2">
						<li>Ranked 1st across the university in multiple semesters.</li>
						<li>Consistently topped department-wide assessments.</li>
						<li>Awarded Gold Medal – Summer 2023.</li>
					</ul>
				</div>

			</div>
		</section>
	);
}
