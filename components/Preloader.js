"use client";

import { useEffect, useState } from "react";
import "animate.css";

const greetings = [
	"👋 કેમ છો",
	"👋 Hallo",
	"👋 Hello",
	"👋 Namaste",
	"👋 Bonjour",
	"👋 કેમ છો",
	"👋 Hola",
];

export default function Preloader({ onFinish }) {
	const [index, setIndex] = useState(0);
	const [animateOut, setAnimateOut] = useState(false);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => {
				const next = prev + 1;
				if (next >= greetings.length) {
					clearInterval(interval);
					setAnimateOut(true);
					setTimeout(() => {
						setVisible(false);
						onFinish && onFinish();
					}, 300); // Short delay = no visual gap
					return prev;
				}
				return next;
			});
		}, 400);

		return () => clearInterval(interval);
	}, [onFinish]);

	if (!visible) return null;

	return (
		<div
			className={`fixed inset-0 bg-primary text-white flex items-center justify-center text-4xl font-medium z-50 transition-all duration-1000 ${animateOut ? "animate__animated animate__slideOutUp" : ""
				}`}
			style={{ animationDuration: "0.3s" }}
		>
			{greetings[index]}
		</div>
	);
}
