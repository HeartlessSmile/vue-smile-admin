import introductionFile from '@/utils/introductionFile.js'
const Layout = introductionFile('layout/index')
import Main from '@/components/main'

const defaultRoute = [{
	path: '/login',
	name: 'login',
	component: introductionFile('login/login'),
	meta: {
		hideInMenu: true
	}
}, {
	path: '/401',
	name: 'error_401',
	meta: {
		hideInMenu: true
	},
	component: introductionFile('error-page/401')
}, {
	path: '/500',
	name: 'error_500',
	meta: {
		hideInMenu: true
	},
	component: introductionFile('error-page/500')
}, {
	path: '*',
	name: 'error_404',
	meta: {
		hideInMenu: true
	},
	component: introductionFile('error-page/404')
}]

const menuRoute =  [{
		path: '/',
		component: Main,
		name: '_home',
		redirect: '/home',
		meta: {
			hideInMenu: true
		},
		children: [{
			path: '/home',
			name: 'home',
			meta: {
				hideInMenu: true,
				title: '首页',
				icon: 'md-home'
			},
			component: introductionFile('home/home')
		}]
	},

	{
		path: '/countInfo',
		meta: {
			icon: 'icon-tongji',
			hideInBread: true
		},
		name: 'countInfo',
		component: Main,
		children: [{
			path: 'countInfo_page',
			name: 'countInfo_page',
			component: introductionFile('mainPage/countInfo/countInfo'),
			meta: {
				title: '统计信息'
			},
		}]
	},
	{
		path: '/meetInfo',
		name: 'meetInfo',
		meta: {
			title: '会务信息',
			icon: 'icon-hangcheng'
		},
		component: Main,
		children: [{
			path: 'basicInfo',
			component: introductionFile('mainPage/meetInfo/basicInfo'),
			name: 'basicInfo',
			meta: {
				title: '会议信息'
			},
		}, {
			path: 'ticketInfo',
			name: 'ticketInfo',
			component: introductionFile('mainPage/meetInfo/ticketInfo'),
			meta: {
				title: '会议门票'
			},
		}, {
			path: 'receptionInfo',
			name: 'receptionInfo',
			component: introductionFile('mainPage/meetInfo/receptionInfo'),
			meta: {
				title: '接待信息'
			},
		}]
	},
	{
		path: '/signInManage',
		name: 'signInManage',
		meta: {
			icon: 'icon-qiandao',
			hideInBread: true
		},
		component: Main,
		children: [{
			name: 'signInManage_page',
			path: 'signInManage_page',
			component: introductionFile('mainPage/signInManage/signInManage'),
			meta: {
				title: '签到管理'
			},
		}]
	},
	{
		path: '/signUser',
		meta: {
			icon: 'icon-iconpj',
			hideInBread: true
		},
		name: 'signUser',
		component: Main,
		children: [{
			path: 'signUser_page',
			name: 'signUser_page',
			component: introductionFile('mainPage/signUser/signUser'),
			meta: {
				title: '报名名单'
			},
		}]
	},
	{
		path: '/receptionManage',
		name: 'receptionManage',
		meta: {
			title: '接待管理',
			icon: 'icon-hezuo1'
		},
		component: Main,
		children: [{
			path: 'houseReception',
			name: 'houseReception',
			component: introductionFile('mainPage/receptionManage/houseReception'),
			meta: {
				title: '住宿接待'
			},
		}, {
			path: 'foodReception',
			name: 'foodReception',
			component: introductionFile('mainPage/receptionManage/foodReception'),
			meta: {
				title: '用餐接待'
			},
		}]
	},
	{
		path: '/sendMessage',
		name: 'sendMessage',
		meta: {
			icon: 'icon-iconpj',
			hideInBread: true
		},
		component: Main,
		children: [{
			path: 'sendMessage_page',
			name: 'sendMessage_page',
			component: introductionFile('mainPage/sendMessage/sendMessage'),
			meta: {
				title: '群发提醒'
			},
		}]
	},
	{
		path: '/meetSpread',
		name: 'meetSpread',
		meta: {
			icon: 'icon-erweima',
			hideInBread: true
		},
		component: Main,
		children: [{
			path: 'meetSpread_page',
			name: 'meetSpread_page',
			component: introductionFile('mainPage/meetSpread/meetSpread'),
			meta: {
				title: '树形表格'
			},
		}]
	}
]
let menuArr = [...menuRoute,...defaultRoute]

// export default menuArr;
export {menuRoute,defaultRoute}
