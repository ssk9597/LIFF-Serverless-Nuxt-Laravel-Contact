import Vue from 'vue';

// 使用する機能
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate';

// エラーメッセージの日本語
import ja from 'vee-validate/dist/locale/ja.json';

// 使用するルール
import { required, email, max } from 'vee-validate/dist/rules';
extend('required', required);
extend('email', email);
extend('max', max);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
localize('ja', ja);
