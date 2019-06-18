export class BaseEnum {

    static values() {
        const ar = [];
        for (const item in this) {
            if (item !== "values") {
                ar.push(item)
            }
        }
        return ar;
    }
}