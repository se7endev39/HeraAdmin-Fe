import async from "../component/Async";

const LandingPage = async(() => import("../pages/LandingPage"));

const menuRoutes = [
	{
		path: '/',
		component: LandingPage,
		layout: 'home'
	},
	{
		path: '/home',
		component: LandingPage,
		layout: 'home'
	}
];

export {
	menuRoutes
};
