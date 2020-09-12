import {GetterTree} from "vuex";
import {AccountState} from "@/store/account/index";

export const getters: GetterTree<AccountState, any> = {
    isLoggedIn: (state): boolean => state.token != null,
};
