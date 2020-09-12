import {getters} from "@/store/account/getters";
import {mutations} from "@/store/account/mutations";
import {actions} from "@/store/account/actions";
import {Module} from "vuex";

export interface AccountState {
    token: null | string;
}
export const account: Module<AccountState, any> = {
    namespaced: true as true,
    state: {
        token: null
    } as AccountState,
    getters,
    mutations,
    actions,
}