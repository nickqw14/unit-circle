import React from "react";
import styles from "../styles/angle.module.scss";

function Angle({ angle, radius }) {
	return (
		<svg style={{ transform: `rotate(${angle}deg)` }}>
			<line x1="0" y1="0" x2={radius} y2="0" />
			<text x="20" y="200" rotate={"10"} class="small">
				{angle * -1}
			</text>
			<text x="20" y={radius - 20} class="small">
				rad
			</text>
		</svg>
	);
}

export default Angle;
