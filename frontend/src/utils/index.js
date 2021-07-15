// 防抖
export const debounce = (func, wait = 500) => {
    let timeout
    return (event, ...rest) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(event, ...rest)
        }, wait)
    }
}