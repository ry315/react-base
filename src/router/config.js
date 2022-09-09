import Home from "../views/pages/home";
import List from "../views/pages/list";
import Err404 from "../views/pages/err404";

const otherRouter = [
	{
		path: "/404",
		title: "未找到页面",
		element: <Err404 />,
	},
	{
		from: "*",
		to: "/404",
	},
];

const pageRouter = [
	{
		path: "/",
		title: "仪表盘",
		element: <Home />,
	},
	{
		path: "/list",
		title: "列表",
		element: <List />,
		children: [
			{
				path: "clist",
				title: "子列表",
				element: <Home />,
			},
		],
	},
];
export { otherRouter, pageRouter };
