import React from "react";
import styles from "../styles/angle.module.scss";

function Angle({ angle, radius }) {
	return (
		<svg style={{ transform: `rotate(${angle}deg)` }}>
			<line x1="0" y1="0" x2={radius} y2="0" />
		</svg>
	);
}

export default Angle;
