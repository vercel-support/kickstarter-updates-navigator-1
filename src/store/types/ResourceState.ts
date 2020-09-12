import ResourceModel from "@/store/types/ResourceModel";

export interface ResourceState {
    isLoading: boolean;
    total: number;
    collection?: ResourceModel[];
}