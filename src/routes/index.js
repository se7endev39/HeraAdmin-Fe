import async from "../component/Async";

const SysAdmin = async(() => import("../pages/collection/SysAdmin"));
const LockHerc = async(() => import("../pages/collection/LockHerc"));
const CreateFunction = async(() => import("../pages/collection/CreateFunction"));
const AssignRole = async(() => import("../pages/collection/AssignRole"));
const AdminLogin = async(() => import("../pages/admin/AdminLoginPage"));
const AdminMintPage = async(() => import("../pages/admin/AdminMintPage"));

const menuRoutes = [

	// Collection
	{
		path: '/sysadmin',
		component: SysAdmin,
		layout: 'cardMenu'
	},
	{
		path: '/collections/:collectID',
		component: LockHerc,
		layout: 'cardMenu'
	},
	{
		path: '/lockherc',
		component: LockHerc,
		layout: 'cardMenu'
	},
	{
		path: '/createfunction',
		component: CreateFunction,
		layout: 'cardMenu'
	},
	{
		path: '/assignrole',
		component: AssignRole,
		layout: 'cardMenu'
	},
];

export {
	menuRoutes
};
