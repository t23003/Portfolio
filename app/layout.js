import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Tushar Bhanushali",
	description: "Portfolio of Tushar Bhanushali — Full Stack Developer specializing in Next.js, React, and the MERN stack.",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "Tushar Bhanushali",
		description: "Portfolio of Tushar Bhanushali — Full Stack Developer specializing in Next.js, React, and the MERN stack.",
		url: "https://tushardama.vercel.app/",
		siteName: "Tushar Bhanushali",
		images: [
			{
				url: "/og.png", // Path relative to public/
				width: 1200,
				height: 630,
				alt: "Tushar Bhanushali OG Image",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tushar Bhanushali - Full Stack Developer | Next.js | MERN Stack",
		description: "Portfolio of Tushar Bhanushali — Full Stack Developer specializing in Next.js, React, and the MERN stack.",
		images: ["/og.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</head>
			<body
				className={`bg-primary ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
