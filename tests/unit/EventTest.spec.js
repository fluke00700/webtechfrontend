import { mount } from '@vue/test-utils'
import Events from '@/views/Events.vue'
import EventCreateForm from '@/components/EventCreateForm'

describe('Testing Events.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Events)

    // then
    expect(wrapper.text()).toMatch('event-frontend')
  })

  it('should have events create form component', () => {
    // when
    const wrapper = mount(Events)

    // then
    const createForm = wrapper.findComponent(EventCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
