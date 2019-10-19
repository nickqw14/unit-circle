import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import styles from "./styles/circle.module.scss";

import Angle from "./components/Angle";

function Circle() {
	const [radius, setRadius] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		const width = ref.current ? ref.current.offsetWidth : 0;
		setRadius(width / 2);
	});

	const [width, height] = useWindowSize();
	const angles = [
		0,
		-30,
		-45,
		-60,
		-90,
		-120,
		-135,
		-150,
		-180,
		-210,
		-225,
		-240,
		-270,
		-300,
		-315,
		-330,
		-360
	];
	return (
		<div ref={ref} className={styles.circleContainer}>
			{angles.map(angle => {
				return <Angle radius={radius} angle={angle} />;
			})}
		</div>
	);
}

export default Circle;
