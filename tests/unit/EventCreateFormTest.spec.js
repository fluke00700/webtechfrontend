import { mount } from '@vue/test-utils'

import EventCreateForm from '@/components/EventCreateForm'

describe('Testing PersonsCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(EventCreateForm)

    // then
    expect(wrapper.find('#events-create-offcanvas').classes()).not.toContain('show')
  })
})
