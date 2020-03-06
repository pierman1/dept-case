import Vuex from 'vuex'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Logo from '@/components/logo/BaseLogo.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menu: {
      menuOpen: false
    }
  }
})

describe('Logo', () => {
  test('is mounted properly', () => {
    const wrapper = shallowMount(Logo, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    wrapper.setData({
      isWhite: false
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('test menu close/open', () => {
    const wrapper = shallowMount(Logo, {
      props: {
        isWhite: true
      },
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
