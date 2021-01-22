export const getNthItemFromPathname = (pathname, n) => {
	const splitPath = pathname.split('/')
	return splitPath[n]
}