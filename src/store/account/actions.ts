import {
    SET_TOKEN,
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
            .then(payload => commit(SET_TOKEN, payload.token));
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit(SET_TOKEN, null);
            resolve(null);
        });
    },
};
