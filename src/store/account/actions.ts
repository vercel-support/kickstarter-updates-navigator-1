/* eslint-disable @typescript-eslint/camelcase */
import {
    SET_ACCOUNT,
    UPDATE_LOADING,
} from './mutations';
import {ActionTree} from "vuex";
import {AccountState} from "@/store/account/index";

export const actions: ActionTree<AccountState, any> = {
    setOnLoading({ commit }, isLoading) {
        return new Promise((resolve) => {
            commit(UPDATE_LOADING, isLoading);
            resolve(isLoading);
        });
    },
    loadUser({ commit }) {
        return fetch(`${process.env.VUE_APP_BACKEND_ORIGIN}/api/login`,
                {
                    method: 'GET',
                    cache: 'no-cache',
                })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(payload => commit(SET_ACCOUNT, payload))
    },
    login({ dispatch, commit }, credentials: { email: string; password: string }) {
        return dispatch('setOnLoading', true)
            .then(() => fetch(`${process.env.VUE_APP_BACKEND_ORIGIN}/api/login`,
            {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            }))
            .then(res => res.json())
            .then(payload => commit(SET_ACCOUNT, payload))
            .finally(() => dispatch('setOnLoading', false));
    },
    logout({ commit }) {
        return fetch(`${process.env.VUE_APP_BACKEND_ORIGIN}/api/logout`)
            .finally(() =>
                commit(SET_ACCOUNT, {
                    token: null,
                    name: null,
                    starred_projects: null,
                    backed_projects: null,
                })
            );
    },
};
