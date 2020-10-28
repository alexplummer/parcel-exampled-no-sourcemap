export type routeTypes = {
	title: string;
	path: string;
	exact: boolean;
	childRoutes?: routeTypes | null;
};

export default [
	{
		title: "Home",
		class: "home",
		path: "/project",
		exact: true
	}
];
