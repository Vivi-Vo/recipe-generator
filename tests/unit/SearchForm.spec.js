import {
  shallowMount, mount
} from '@vue/test-utils'
import SearchForm from '../../client/src/components/SearchForm.vue'
//import SearchForm from '@/components/SearchForm.vue'

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
 
Vue.use(Vuelidate);
Vue.use(Vuetify);
describe('SearchForm.vue', () => {
  it('display validation message when ingredient is blank ', async () => {
    const msg = "At least one ingredient is required.";
    const wrapper = shallowMount(SearchForm);

    await wrapper.find('#searchBtn').trigger('click');
 //  expect(wrapper.text()).toContain(msg);
 expect(wrapper.html()).toBe('<div><p>Foo</p></div>')
});

})