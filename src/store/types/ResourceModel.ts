export default class ResourceModel {
    key: number;
    isLoading: boolean;
    model: any;

    constructor(key: number, model: any) {
        this.key = key;
        this.isLoading = false;
        this.model = model;
    }
}