/* eslint-disable @typescript-eslint/camelcase */
import {MutationTree} from "vuex";
import {AccountState} from "@/store/account/index";

export const SET_ACCOUNT = 'SET_ACCOUNT';

export const mutations: MutationTree<AccountState> = {
    [SET_ACCOUNT](state, accountState: AccountState) {
        state.token = accountState.token;
        state.name = accountState.name;
        state.starred_projects = accountState.starred_projects;
        state.backed_projects = accountState.backed_projects;
    },
};
