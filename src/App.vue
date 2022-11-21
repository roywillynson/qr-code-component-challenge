<template>
  <div>
    <QrCard />
    <AttributionFrontMentor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QrCard from '@/components/QrCard.vue';
import AttributionFrontMentor from '@/components/AttributionFrontMentor.vue';

export default defineComponent({
  name: 'App',
  components: {
    QrCard,
    AttributionFrontMentor,
  },
});
</script>

<style lang="scss" scoped></style>
