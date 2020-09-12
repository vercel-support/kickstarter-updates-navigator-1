import {MutationTree} from "vuex";
import {AccountState} from "@/store/account/index";

export const SET_TOKEN = 'SET_TOKEN';

export const mutations: MutationTree<AccountState> = {
    [SET_TOKEN](state, newToken: string) {
        state.token = newToken;
    },
};
