import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//v-md-editor markdown编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// vuepressTheme
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs';
// emoji
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';

VueMarkdownEditor.use(vuepressTheme, {
  Prism
});
VueMarkdownEditor.use(createEmojiPlugin());

Vue.use(VueMarkdownEditor);
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
