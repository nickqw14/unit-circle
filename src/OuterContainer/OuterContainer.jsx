import React from "react";
import styles from "./styles/outerContainer.module.scss";

import Circle from "../Circle/Circle";

const OuterContainer = () => {
	return (
		<div className={styles.outerContainer}>
			<Circle />
		</div>
	);
};

export default OuterContainer;
