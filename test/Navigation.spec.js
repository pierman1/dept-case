import Vuex from 'vuex'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Navigation from '@/components/navigation/Navigation.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menu: {
      menuOpen: false
    }
  }
})

describe('Navigation', () => {
  test('is mounted properly', () => {
    const wrapper = shallowMount(Navigation, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
