/**
 * 在一定的时间内 只会调用这一次
 * @param {*} func 防抖动函数
 * @param {*} delay 防抖动延迟时间
 * @param {*} immediate 是否立即执行
 */
export const debounce = (func, delay, immediate = false) => {
   let timer = null;
   return function(){
	   let context = this;
	   let args = arguments;
	   clearTimeout(timer)
	   if (immediate){
		   var doNow = !timer;
		   timer = setTimeout(function () {
			 timer = null;
		   }, delay);
		   if (doNow) {
			 func.apply(context, args);
		   }
	   }else{
		   timer = setTimeout(function () {
			   func.apply(context, args)
		   }, delay)
	   }
   }
}

/**
*
* @param {*} func 节流函数
* @param {*} delay 时间
*/
export const throttle = (func, delay) => {
   var timer = null;
   var startTime = Date.now();
   return function(){
	   var curTime = Date.now();
	   var context = this;
	   var args = arguments;
	   var remaining = delay - (curTime - startTime);
	   clearTimeout(timer);
	   if (remaining <= 0) {
		   func.apply(context, args);
		   startTime = Date.now();
	   } else {
		   timer = setTimeout(func, remaining);
	   }
   }
}

export const deepClone = (source) =>{
   const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
   for (let keys in source) { // 遍历目标
	 if (source.hasOwnProperty(keys)) {
	   if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
		 targetObj[keys] = source[keys].constructor === Array ? [] : {};
		 targetObj[keys] = deepClone(source[keys]);
	   } else { // 如果不是，就直接赋值
		 targetObj[keys] = source[keys];
	   }
	 }
   }
   return targetObj;
}
