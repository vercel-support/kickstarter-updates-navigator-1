import {actions} from './actions';
import {getters} from './getters';
import {mutations} from './mutations';
import {state} from './state';
import {Module} from "vuex";
import {ResourceState} from "@/store/types/ResourceState";

export const projects: Module<ResourceState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
