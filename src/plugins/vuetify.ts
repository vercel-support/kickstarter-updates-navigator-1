import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: '#05ce78',
                secondary: '#222222',
            },
        },
    },
});
