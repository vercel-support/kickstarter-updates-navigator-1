import ResourceModel from "@/store/types/ResourceModel";
import {MutationTree} from "vuex";
import {ResourceState} from "@/store/types/ResourceState";

export const UPDATE_LOADING_ALL = 'UPDATE_LOADING_ALL';
export const UPDATE_LOADING_ONE = 'UPDATE_LOADING_ONE';
export const UPDATE_COLLECTION_ALL = 'UPDATE_COLLECTION_ALL';
export const UPDATE_COLLECTION_ONE = 'UPDATE_COLLECTION_ONE';

const findOrCreateElement = (state: ResourceState, id: number) => {
    if (!state.collection) {
        state.collection = [];
    }
    let index = state.collection.findIndex(
        (iter: ResourceModel) => iter.key === id,
    );
    if (index === -1) {
        index = state.collection.length;
        state.collection.push(new ResourceModel(id, undefined));
    }
    return state.collection[index];
};

export const mutations: MutationTree<ResourceState> = {
    [UPDATE_LOADING_ALL](state, isLoading: boolean) {
        state.isLoading = isLoading;
    },
    [UPDATE_COLLECTION_ALL](state, payload: { total: number; projects: any[] }) {
        state.lastUpdated = new Date();
        state.total = payload.total;
        state.collection = payload.projects.map(model => new ResourceModel(model.id, model));
    },
    [UPDATE_LOADING_ONE](state, {id, isLoading}) {
        findOrCreateElement(state, id).isLoading = isLoading;
    },
    [UPDATE_COLLECTION_ONE](state, payload: { id: number }) {
        findOrCreateElement(state, payload.id).model = payload;
    },
};
