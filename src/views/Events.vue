<template>
  <div class="p-3 mb-2 bg-dark text-white" style= "max-width: 150rem;"><h1> All Events</h1></div>
  <div class="container-fluid">
    <events-create-form @created="addEvent"></events-create-form>
  </div>
  <AllEventsCard></AllEventsCard>
  <event-create-form @created="addEvent"></event-create-form>
</template>

<script>
import EventCreateForm from '@/components/EventCreateForm'
import AllEventsCard from '@/components/AllEventsCard'
export default {
  name: 'Events',
  components: { AllEventsCard, EventCreateForm },
  filters: {}
}
</script>
<style scoped>
</style>
