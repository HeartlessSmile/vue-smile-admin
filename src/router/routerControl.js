import  router  from '@/router'
import store from '@/store'
import iView from 'iview';
// 页面刷新判断token   重新赋值
if (localStorage.getItem('token')) {
	store.commit('setTk', localStorage.getItem('token'))
}
if (localStorage.getItem('meetingId')) {
  store.commit('setMeetId',{ id:localStorage.getItem('meetingId'), name:localStorage.getItem('meetingName')})
}
if (localStorage.getItem('addmeetingId')) {
  store.commit('setMeetIdTwo', {
    id: localStorage.getItem('addmeetingId'),
    name: localStorage.getItem('addmeetingName')
  })
}
if (localStorage.getItem('user')) {
	store.commit('setUser', JSON.parse(localStorage.getItem('user')))
	store.commit('setCompanyID',localStorage.companyId)
}
// 如果localStorage中有公司名称(companyName)
if (localStorage.getItem('companyName')) {
  store.commit('setCompanyName', localStorage.companyName)
}
// 如果lovalStorage中有是否可以展示子账号tab的数据showAccount
if (localStorage.getItem('showAccount')) {
  if (localStorage.showAccount === 'true') {
    store.commit('showChildAccount', true)
  } else {
    store.commit('showChildAccount', false)
  }
}

router.beforeEach((to,from,next)=>{
    iView.LoadingBar.start();
	window.document.title = '办会通';
	if (localStorage.getItem('token')) {
	  next()
	} else {
	  if (to.path == '/login' || to.path == '/register' || to.path == '/revisepassword' || to.path == '/protocol' || to.path == '/product') { //这就是跳出循环的关键
	    next()
	  } else {
	    next({
	      path: '/login',
	      // query: {
	      //   Rurl: to.fullPath
	      // }
	    })
	  }
 }
	
})


router.afterEach((to,from) => {
    iView.LoadingBar.finish();
  // nprogress.done()
})
