export class Utils {
    static arrayRandElement(arr: Array<any>): any {
        const rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
}