import React from "react";
import styles from "./styles/outerCircle.module.scss";

import Xaxis from "./components/Xaxis";
import Yaxis from "./components/Yaxis";
import InnerCircle from "../InnerCircle/InnerCircle";

function OuterCircle() {
	return (
		<div className={styles.outerCircleContainer}>
			<InnerCircle />
			<Xaxis />
			<Yaxis />
		</div>
	);
}

export default OuterCircle;
