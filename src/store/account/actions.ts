/* eslint-disable @typescript-eslint/camelcase */
import {
    SET_ACCOUNT,
} from './mutations';
import {ActionTree} from "vuex";
import {AccountState} from "@/store/account/index";

export const actions: ActionTree<AccountState, any> = {
    login({ commit }, credentials: { email: string; password: string }) {
        return fetch(`${process.env.VUE_APP_BACKEND_ORIGIN}/api/login`,
            {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
            .then(res => res.json())
            .then(payload => commit(SET_ACCOUNT, payload));
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit(SET_ACCOUNT, {
                token: null,
                name: null,
                starred_projects: null,
                backed_projects: null,
            });
            resolve(null);
        });
    },
};
