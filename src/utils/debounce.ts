export const debounce = <T extends Array<unknown>>(func: Function, wait: number) => {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      func(...args);
    }, wait);
  };
}