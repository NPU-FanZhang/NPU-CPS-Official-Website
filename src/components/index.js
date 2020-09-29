import TopMsgBar from "./TopBar/TopMsgBar.vue";
import TopTitleLogoBar from "./TopBar/TopTitleLogoBar.vue";MainSwitchBar
import MainSwitchBar from "./MainSwitchBar.vue";
const loading = {
    install: function(Vue) {
        Vue.component("v-topmsgbar", TopMsgBar);
        Vue.component("v-toptitlelogobar", TopTitleLogoBar);
        Vue.component("v-mainswitchbar", MainSwitchBar);
    }
}
export default loading;