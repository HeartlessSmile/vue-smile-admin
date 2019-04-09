export default function introductionFile(file, viewPath = 'pages') {
  	// if (process.env.NODE_ENV === 'development') {
    // 	return require(`@/${viewPath}/${file}.vue`).default
  	// } else if (process.env.NODE_ENV === 'production') {
    // 	return () => import(`@/${viewPath}/${file}.vue`)
  	// }
  return () => import(`@/${viewPath}/${file}.vue`)
}
