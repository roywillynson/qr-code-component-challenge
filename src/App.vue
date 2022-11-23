<template>
  <div>
    <QrCard />
    <FrontMentorAttribution />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QrCard from '@/components/QrCard.vue';
import FrontMentorAttribution from '@/components/FrontMentorAttribution.vue';

export default defineComponent({
  name: 'App',
  components: {
    QrCard,
    FrontMentorAttribution,
  },
});
</script>

<style lang="scss" scoped></style>
