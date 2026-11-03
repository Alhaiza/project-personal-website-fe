<script setup lang="ts">
/**
 * ============================================================================
 * [EXPERIENCE SECTION - ATM Clean Modern GoMeal Style]
 * ============================================================================
 */
import type { Experience } from "../types/profile";
import TimelineItem from "../components/TimelineItem.vue";

defineProps<{
  experiences: Experience[];
}>();
</script>

<template>
  <section id="experience" class="py-16 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
    <!-- Section Header -->
    <div class="mb-10">
      <div class="flex items-center gap-2 mb-2">
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Career Trajectory</span>
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        Professional Journey
      </h2>
      <p class="text-slate-500 text-xs sm:text-sm mt-1">
        Track record of mission-critical software engineering across enterprise systems.
      </p>
    </div>

    <!-- Timeline List -->
    <div v-if="experiences && experiences.length > 0" class="max-w-4xl ml-2">
      <TimelineItem
        v-for="(item, index) in experiences"
        :key="item.id"
        :experience="item"
        :is-last="index === experiences.length - 1"
      />
    </div>

    <div
      v-else
      class="text-center py-12 border border-dashed border-slate-200 rounded-3xl p-6 bg-amber-50/20"
    >
      <p class="text-slate-400 text-sm">No experience records available yet.</p>
    </div>
  </section>
</template>
