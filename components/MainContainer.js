"use client";

import Hero from "@/components/Hero"
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects"
import Footer from "@/components/Footer";
import ExpEdu from "@/components/ExpEdu";

export default function MainContainer({ showMain }) {
	return (
		<div className={`bg-primary container mx-auto w-[80%] md:w-[60%] transform transition-transform duration-300 ease-out ${showMain ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
			<Hero />
			<TechStack />
			<Projects />
			<ExpEdu />
			<Footer />
		</div>
	);
}
