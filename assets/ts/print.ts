export function print(el: Element, text: string, ms?:number, callback?: any) {
    let index: number = 0;
    const printInterval = setInterval(() => {
        if (index === text.length - 1) {
            clearInterval(printInterval);

            if (callback !== undefined) {
                callback();
            }
        }
        el.innerHTML = el.innerHTML + text[index];
        index++;
        el.scrollIntoView(false);
    }, (ms !== undefined ? 85 : ms));
}