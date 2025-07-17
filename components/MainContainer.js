"use client";

import Hero from "@/components/Hero"

export default function MainContainer({ showMain }) {
	return (
		<div className={`bg-primary container mx-auto w-[60%] transform transition-transform duration-300 ease-out ${showMain ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
			<Hero />
		</div>
	);
}
