import React, { FunctionComponent } from "react";

export type Props = {
	headerTitle?: string;
};

export const Article: FunctionComponent<Props> = (props): JSX.Element => (
	<div className="Article">{props.headerTitle && <p>{props.headerTitle}</p>}</div>
);
