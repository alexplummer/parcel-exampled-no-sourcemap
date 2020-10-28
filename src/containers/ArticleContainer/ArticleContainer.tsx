import React, { FunctionComponent } from "react";
import Article from "../../components/Article";

export type Props = {};

export const ArticleContainer: FunctionComponent<Props> = (props): JSX.Element => (
	<Article {...props} />
);
