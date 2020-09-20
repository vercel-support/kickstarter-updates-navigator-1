import {GetterTree} from "vuex";
import {ResourceState} from "@/store/types/ResourceState";

export const getters: GetterTree<ResourceState, any> = {
    lastUpdated: (state): Date|undefined => state.lastUpdated,
    isLoading: (state): boolean => state.isLoading,
    total: (state): number|undefined => state.total,
    isAvailable: (state): boolean => state.collection !== undefined,
    byId: (state, getters): (id: number) => any | undefined => id => (getters.isAvailable
        ? state.collection?.find(element => element.key === id)?.model
        : undefined),
    getAvailableCollection: (state, getters): any[] | undefined =>
        getters.isAvailable
            ? state.collection?.filter(element => element.model !== undefined).map(element => element.model)
            : undefined,
};
