import Router from "vue-router"

/**
 *
 * @param {*String 路由跳转地址} url
 * @param {*Object 路由跳转参数} query
 */
export const goRouter = (url, query = {}) => {
  Router.push({
    url: url,
    query: query
  })
}


/**
 *
 * @param {*Array 路由表} list
 * @param {*Boole 权限} access
 */
export const getMenuByRouter = (list, access) => {
  let res = [];
  list.forEach((item, index) => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }

      if (item.children) {
        obj.children = getMenuByRouter(item.children, access)
      } else {}
      res.push(obj)
    }


  });
  return res;
}

/**
 *
 * @param {*Object 当前路由} route
 * @param {*Object 首页路由  暂时未做处理  写死的home} homeRoute
 */
export const getBreadCrumbList = (route, homeRoute) => {

  let matched = route.matched;
  // 如果是首页  面包屑只展示一层
  if (matched.some(item => item.name == 'home')) return []
  let res = matched.filter(item => {
    return item.meta === undefined || !item.meta.hideInBread
  }).map(item => {
    let meta = {
      ...item.meta
    }
    let obj = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: meta
    }
    return obj;
  })
  return res;
}

/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = list => {
  localStorage.tagNaveList = JSON.stringify(list)
}
/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
  const list = localStorage.tagNaveList
  return list ? JSON.parse(list) : []
}
/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list, newRoute) => {
  const {
    name,
    path,
    meta
  } = newRoute
  let newList = [...list]
  if (newList.findIndex(item => item.name === name) >= 0) return newList
  else newList.push({
    name,
    path,
    meta
  })
  return newList
}


/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList, routeItem) => {
  let res = false;
  res = tagNavList.some(item => item.name == routeItem.name)
  return res
}



/**
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
export const recursionRouter =  (userRouter = [], allRouter = []) =>{
    var realRoutes = []
    allRouter.forEach((v, i) => {
        userRouter.forEach((item, index) => {
            if (item.name === v.name) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionRouter(item.children, v.children)
                }
                realRoutes.push(v)
            }
        })
    })
    return realRoutes
}
