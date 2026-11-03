<script setup lang="ts">
/**
 * ============================================================================
 * [PROJECT SECTION - ATM Modern Clean Dribbble Card Style]
 * Mengadopsi prinsip desain dari referensi:
 * - Tab Filter Kategori interaktif (All, Enterprise Financial, Banking, SaaS, Academic)
 * - Kartu proyek modern dengan rounded-3xl, soft shadow amber, dan status badge
 * - Header kategori, bullet highlight terstruktur rapi, dan action link
 * - Dual-track Infinite Marquee Tech Stack yang responsif
 * ============================================================================
 */
import { ref, computed } from 'vue'
import type { Project, SkillItem } from '../types/profile'

const props = defineProps<{
  projects: Project[]
  skills: SkillItem[]
}>()

// Active Category Filter State (ATM: Mengadopsi horizontal category pills di referensi)
const activeCategoryFilter = ref<string>('All')

const categoriesList = computed(() => {
  const cats = new Set<string>()
  props.projects.forEach(p => {
    if (p.category) cats.add(p.category)
  })
  return ['All', ...Array.from(cats)]
})

const filteredProjects = computed(() => {
  if (activeCategoryFilter.value === 'All') return props.projects
  return props.projects.filter(p => p.category === activeCategoryFilter.value)
})

/**
 * [DUAL TRACK SPECIALIZATION]
 */
const backendSkills = computed(() =>
  props.skills.filter((skill) => skill.category === 'backend')
)

const frontendSkills = computed(() =>
  props.skills.filter((skill) => skill.category === 'frontend')
)

const getIconUrl = (iconSlug: string, hexColor: string): string => {
  const cleanHex = hexColor.replace('#', '')
  return `https://cdn.simpleicons.org/${iconSlug}/${cleanHex}`
}
</script>

<template>
  <section id="projects" class="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
    <!-- Header Section Projects -->
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Portfolio Showcase</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Featured Enterprise Projects
        </h2>
        <p class="text-slate-500 text-xs sm:text-sm mt-1">
          Architected for high throughput, zero calculation discrepancies, and robust data security.
        </p>
      </div>

      <!-- Total Projects Count Badge -->
      <span class="text-xs font-bold px-3.5 py-1.5 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/80 w-fit self-start sm:self-auto">
        Showing {{ filteredProjects.length }} of {{ projects.length }} Projects
      </span>
    </div>

    <!-- Category Filter Bar (ATM: Mirip Category Slider di Desain GoMeal) -->
    <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        v-for="cat in categoriesList"
        :key="cat"
        @click="activeCategoryFilter = cat"
        type="button"
        :class="[
          'px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-2xs',
          activeCategoryFilter === cat
            ? 'bg-amber-400 text-slate-900 shadow-md shadow-amber-400/25 scale-102'
            : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-amber-50/50 border border-slate-200/80'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grid Layout Portfolio (ATM: Card Modern rounded-3xl dengan Soft Glow) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="bg-white border border-amber-100/90 rounded-3xl p-6 sm:p-7 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 shadow-sm flex flex-col justify-between group relative overflow-hidden"
      >
        <!-- Subtle Top Amber Accent Line on Hover -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div>
          <!-- Header Card: Category Pill & Star Indicator -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span
              v-if="project.category"
              class="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/70 uppercase tracking-wider"
            >
              {{ project.category }}
            </span>
            <div class="flex items-center gap-1 text-amber-400 text-xs">
              <span>★</span>
              <span class="text-slate-400 font-semibold text-[11px]">Production</span>
            </div>
          </div>

          <h3 class="text-lg sm:text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
            {{ project.title }}
          </h3>
          
          <p class="text-slate-600 mt-3 text-xs sm:text-sm leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Key Engineering Highlights -->
          <div
            v-if="project.highlights && project.highlights.length > 0"
            class="mt-4 pt-4 border-t border-slate-100 space-y-2"
          >
            <div
              v-for="(highlight, hIdx) in project.highlights"
              :key="hIdx"
              class="flex items-start gap-2 text-xs text-slate-600 leading-relaxed"
            >
              <span class="text-amber-500 font-bold shrink-0">✓</span>
              <span>{{ highlight }}</span>
            </div>
          </div>
        </div>

        <!-- Tags List -->
        <div class="mt-6 flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-2.5 py-1 text-[11px] bg-slate-50 text-slate-700 rounded-xl border border-slate-200/80 font-semibold"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!--
      TECH STACK & ECOSYSTEM - DUAL DIRECTION INFINITE MARQUEE
    -->
    <div id="skills" class="mt-20">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Core Technologies</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Tech Stack & Ecosystem
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">
            Production-proven backend frameworks, event processors, and modern reactive frontends
          </p>
        </div>
        <span class="text-xs text-slate-400 font-medium hidden sm:inline-block">
          Hover to pause · Drag to inspect
        </span>
      </div>

      <!-- Wrapper Relative dengan Efek Fade Kiri & Kanan -->
      <div class="relative w-full overflow-hidden py-2 space-y-4">
        <!-- Efek Vignette / Gradient Mask Kiri -->
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FFFBF0]/90 to-transparent z-10"
        ></div>

        <!-- Efek Vignette / Gradient Mask Kanan -->
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FFFBF0]/90 to-transparent z-10"
        ></div>

        <!-- ROW 1: BACKEND TRACK (Bergerak ke KANAN) -->
        <div class="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing">
          <div class="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] gap-4 py-1">
            <div
              v-for="skill in backendSkills"
              :key="`be-orig-${skill.name}`"
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-amber-100/90 rounded-2xl hover:border-amber-300 hover:shadow-md transition-all duration-300 hover:scale-105 shadow-2xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {{ skill.name }}
              </span>
              <span
                class="w-1.5 h-1.5 rounded-full ml-1"
                :style="{ backgroundColor: skill.color }"
              ></span>
            </div>

            <!-- Set 2: Backend Clone Data -->
            <div
              v-for="skill in backendSkills"
              :key="`be-clone-${skill.name}`"
              aria-hidden="true"
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-amber-100/90 rounded-2xl hover:border-amber-300 hover:shadow-md transition-all duration-300 hover:scale-105 shadow-2xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {{ skill.name }}
              </span>
              <span
                class="w-1.5 h-1.5 rounded-full ml-1"
                :style="{ backgroundColor: skill.color }"
              ></span>
            </div>
          </div>
        </div>

        <!-- ROW 2: FRONTEND TRACK (Bergerak ke KIRI) -->
        <div class="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing">
          <div class="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 py-1">
            <div
              v-for="skill in frontendSkills"
              :key="`fe-orig-${skill.name}`"
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-amber-100/90 rounded-2xl hover:border-amber-300 hover:shadow-md transition-all duration-300 hover:scale-105 shadow-2xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {{ skill.name }}
              </span>
              <span
                class="w-1.5 h-1.5 rounded-full ml-1"
                :style="{ backgroundColor: skill.color }"
              ></span>
            </div>

            <!-- Set 2: Frontend Clone Data -->
            <div
              v-for="skill in frontendSkills"
              :key="`fe-clone-${skill.name}`"
              aria-hidden="true"
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-amber-100/90 rounded-2xl hover:border-amber-300 hover:shadow-md transition-all duration-300 hover:scale-105 shadow-2xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {{ skill.name }}
              </span>
              <span
                class="w-1.5 h-1.5 rounded-full ml-1"
                :style="{ backgroundColor: skill.color }"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
