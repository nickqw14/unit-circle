import React from "react";
import styles from "./styles/outerContainer.module.scss";

import Xaxis from "./components/Xaxis";
import Yaxis from "./components/Yaxis";
import Circle from "../Circle/Circle";

const OuterContainer = () => {
	return (
		<div className={styles.outerContainer}>
			<Circle />
		</div>
	);
};

export default OuterContainer;
