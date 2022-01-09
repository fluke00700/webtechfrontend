<template>
  <div class="p-3 mb-2 bg-dark text-white" style= "max-width: 150rem;"><h1> Your Meetings</h1>
  </div>
  <MeetingEventCard></MeetingEventCard>
</template>

<script>
import MeetingEventCard from '@/components/MeetingEventCard'
export default {
  name: 'EventsMeeting',
  components: { MeetingEventCard }
}
</script>

<style scoped>

</style>
