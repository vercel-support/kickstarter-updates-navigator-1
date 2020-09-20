import ResourceModel from "@/store/types/ResourceModel";

export interface ResourceState {
    lastUpdated?: Date;
    isLoading: boolean;
    total?: number;
    collection?: ResourceModel[];
}