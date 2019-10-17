import React from "react";
import styles from "./styles/outerCircle.module.scss";

import Xaxis from "./components/Xaxis";
import Yaxis from "./components/Yaxis";

function OuterCircle() {
	return (
		<div className={styles.outerCircleContainer}>
			<Xaxis />
			<Yaxis />
		</div>
	);
}

export default OuterCircle;
