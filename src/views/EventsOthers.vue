<template>
  <div class="p-3 mb-2 bg-dark text-white" style= "max-width: 150rem;"><h1> Your other Events</h1>
  </div>
  <OthersEventCard></OthersEventCard>
</template>

<script>
import OthersEventCard from '@/components/OthersEventCard'
export default {
  name: 'EventsOthers',
  components: { OthersEventCard }
}
</script>

<style scoped>

</style>
