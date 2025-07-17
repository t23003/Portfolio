"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import "animate.css";
import MainContainer from "@/components/MainContainer"

export default function Home() {
	const [showMain, setShowMain] = useState(false);

	return (
		<>
			<Preloader onFinish={() => setShowMain(true)} />
			<MainContainer showMain={showMain} />
		</>
	);
}
