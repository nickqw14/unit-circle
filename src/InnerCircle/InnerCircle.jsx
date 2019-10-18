import React from "react";
import styles from "./styles/innerCircle.module.scss";

function InnerCircle() {
	return (
		<div className={styles.innerCircleContainer}>
			<svg style={{ transform: "rotate(-45deg)" }} className={styles.svg}>
				<line x1="0" y1="0" x2="200" y2="200" />
			</svg>
		</div>
	);
}

export default InnerCircle;
