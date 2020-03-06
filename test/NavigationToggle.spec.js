import Vuex from 'vuex'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import NavigationToggle from '@/components/navigation/NavigationToggle.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menu: {
      menuOpen: false
    }
  }
})

describe('NavigationToggle', () => {
  test('is mounted properly', () => {
    const wrapper = shallowMount(NavigationToggle, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
