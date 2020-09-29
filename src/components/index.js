import TopMsgBar from "./TopBar/TopMsgBar.vue";
import TopTitleLogoBar from "./TopBar/TopTitleLogoBar.vue";
import MainSwitchBar from "./MainSwitchBar.vue";

import HomePage from "./Home/Home.vue";
import HomeSwiper from "./Home/Swiper.vue";

const loading = {
    install: function(Vue) {
        Vue.component("v-topmsgbar", TopMsgBar);
        Vue.component("v-toptitlelogobar", TopTitleLogoBar);
        Vue.component("v-mainswitchbar", MainSwitchBar);
        Vue.component("homepage", HomePage);
        Vue.component("v-homeswiper", HomeSwiper);
    }
}
export default loading;