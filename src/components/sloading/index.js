import sloading from './sloading.vue' ;


// 判断子类是否被创建
let instance = null

// 创建一个子类对象
let Loading = {}

// 注册组件
Loading.install = (Vue)=>{
    // vue扩展方法
    Vue.prototype.$sloading = {
        // 当前方法创建组件
        show(){
            if (instance && instance.show) {
                return false;
            }
            const app = document.getElementById("app");
            const loading = Vue.extend(sloading);
            instance = new loading().$mount();
            instance.show = true;
            app.appendChild(instance.$el)
        },
        hide(){
            if (!instance) return
            instance.show = false
        }
    }
}
export default Loading;