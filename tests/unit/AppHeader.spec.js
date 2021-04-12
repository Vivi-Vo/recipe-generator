import {
  shallowMount, mount
} from '@vue/test-utils'
import AppHeader from '../../client/src/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('renders props.greeting when passed', () => {
    const greeting = "Hello";
    const wrapper = mount(AppHeader, {
      propsData: {
        greeting: "Hello",
        headline: ""

      }
    })
    expect(wrapper.text()).toContain(greeting);
  });
  it('renders props.headline when passed', () => {
    const headline = "WHAT'S IN YOUR FRIDGE?";

    const wrapper = shallowMount(AppHeader, {
      propsData: {
        greeting: "",
        headline: "WHAT'S IN YOUR FRIDGE?"

      }
    })
    expect(wrapper.text()).toContain(headline);
  });

})