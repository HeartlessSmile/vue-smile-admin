import * as types from '../mutation-types';
import config from '@/config'
// import routers from '@/router/routers';
import {
	defaultRoute,
	menuRoute
} from '@/router/routers'
const menuData = [{
		"name": "countInfo",
		"children": [{
			"name": "countInfo_page",
		}]
	},
	{
		"name": "meetInfo",
		"children": [{
			"name": "basicInfo",
		}]
	},
	{
		"name": "receptionManage",
		"children": [{
			"name": "houseReception",
		}]
	},
    {
        "name": "_home",
		"children": [{
			"name": "home",
		}]
    }
]
import {
	getMenuByRouter,
	recursionRouter,
	getBreadCrumbList,
	getTagNavListFromLocalstorage,
	setTagNavListInLocalstorage,
	routeHasExist
} from '../../utils/utils';
const user = {
	state: {
		breadCrumbList: [],
		tagNavList: []
	},
	getters: {
		// menuList: (state, getters, rootState) => getMenuByRouter([...recursionRouter(menuRoute,menuRoute), ...defaultRoute], rootState.user.access)
		menuList: (state, getters, rootState) => getMenuByRouter([...menuRoute, ...defaultRoute], rootState.user.access)
	},
	mutations: {
		setBreadCrumb(state, route) {
			state.breadCrumbList = getBreadCrumbList(route)
		},
		setTagNavList(state, list) {
			let tagList = []
			if (list) {
				tagList = [...list]
			} else tagList = getTagNavListFromLocalstorage() || []
			if (tagList[0] && tagList[0].name !== config.homeName) tagList.shift()
			let homeTagIndex = tagList.findIndex(item => item.name === config.homeName)
			if (homeTagIndex > 0) {
				let homeTag = tagList.splice(homeTagIndex, 1)[0]
				tagList.unshift(homeTag)
			}
			state.tagNavList = tagList
			setTagNavListInLocalstorage([...tagList])
		},
		addTag(state, {
			route,
			type = 'unshift'
		}) {
			let router = route;
			if (!routeHasExist(state.tagNavList, router)) {
				if (type === 'push') state.tagNavList.push(router)
				else {
					if (router.name === config.homeName) state.tagNavList.unshift(router)
					else state.tagNavList.splice(1, 0, router)
				}
				setTagNavListInLocalstorage([...state.tagNavList])
			}
		},
		closeTag(state, route) {
			let index = state.tagNavList.findIndex(item => item.name == route.name)
			state.tagNavList.splice(index, 1)
			setTagNavListInLocalstorage([...state.tagNavList])
		}
	},
	actions: {

	}
}
export default user;
