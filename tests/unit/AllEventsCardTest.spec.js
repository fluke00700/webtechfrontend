import { mount } from '@vue/test-utils'
import AllEventsCard from '@/components/AllEventsCard'

describe('Testing AllEventsCard', () => {
  it('should render a event card for each event', () => {
    // when
    const wrapper = mount(AllEventsCard, {
      propsData: {
        propevents: [
          {
            id: 1,
            eventName: 'Fine Dinning',
            eventDes: 'Fine Dinning with Family on moms birthday',
            eventStart: '2022-12-01T18:30:00',
            eventLocation: 'Kadewe',
            eventCategory: 'Eating'
          },
          {
            id: 3,
            eventName: 'Beer Pong',
            eventDes: 'Beer Pong at Spelunke on Newyears Eve',
            eventStart: '2022-12-31T22:30:00',
            eventLocation: 'Spelunke STW Wohnheim Sewanstr.',
            eventCategory: 'Others'
          }
        ]
      }
    })

    // then
    const eventCards = wrapper.findAllComponents(AllEventsCard)
    expect(eventCards.length).toBe(2)
  })
})
