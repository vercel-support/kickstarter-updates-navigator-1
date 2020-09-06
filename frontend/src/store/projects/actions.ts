import {
    UPDATE_COLLECTION_ALL,
    UPDATE_COLLECTION_ONE,
    UPDATE_LOADING_ALL,
    UPDATE_LOADING_ONE,
} from './mutations';
import {ResourceState} from "@/store/types/ResourceState";
import {ActionTree} from "vuex";

export const actions: ActionTree<ResourceState, any> = {
    setOnLoadingAll({ commit }, isLoading) {
        return new Promise((resolve) => {
            commit(UPDATE_LOADING_ALL, isLoading);
            resolve(isLoading);
        });
    },
    setOnLoadingOne({ commit }, { id, isLoading }) {
        return new Promise((resolve) => {
            commit(UPDATE_LOADING_ONE, { id, isLoading });
            resolve(isLoading);
        });
    },
    updateCollectionOne({ commit }, payload) {
        if (!payload) { return Promise.reject(new Error('Undefined payload')); }
        return new Promise((resolve) => {
            commit(UPDATE_COLLECTION_ONE, payload);
            resolve(payload);
        });
    },
    updateCollectionAll({ commit }, payload) {
        if (!payload) { return Promise.reject(new Error('Undefined payload')); }
        return new Promise((resolve) => {
            commit(UPDATE_COLLECTION_ALL, payload);
            resolve(payload);
        });
    },

    list({ dispatch }) {
        return dispatch('setOnLoadingAll', true)
            .then(() => fetch("/api/projects"))
            .then(res => res.json())
            .then(payload => dispatch('updateCollectionAll', payload))
            .finally(() => dispatch('setOnLoadingAll', false));
    },
};
