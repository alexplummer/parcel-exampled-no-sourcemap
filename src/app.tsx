import React, { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";

import { HashRouter, Route, Switch } from "react-router-dom";
import { headerTitleState } from "./store/HeaderStore";

import ArticleContainer from "./containers/ArticleContainer";

const App: FunctionComponent = (): JSX.Element => {
	const headerTitle = useRecoilValue(headerTitleState);

	return (
		<HashRouter>
			<Switch>
				<Route exact path="/">
					<ArticleContainer headerTitle={headerTitle} />
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default App;
