<script setup lang="ts">
/**
 * ============================================================================
 * [ARSITEKTUR & ALUR DATA KOMPONEN PROJECT SECTION]
 * Komponen ini menerima props:
 * 1. 'projects': Array daftar portofolio (Project[])
 * 2. 'skills': Array daftar tech stack dengan brand color dan icon (SkillItem[])
 * ============================================================================
 */
import { computed } from 'vue'
import type { Project, SkillItem } from '../types/profile'

const props = defineProps<{
  projects: Project[]
  skills: SkillItem[]
}>()

/**
 * ============================================================================
 * [COMPUTED DERIVED STATE: DUAL TRACK SPECIALIZATION]
 * Memisahkan array 'skills' menjadi 2 jalur spesialisasi:
 * 1. backendSkills: Di-filter berdasarkan category === 'backend' (track atas, gerak ke kanan)
 * 2. frontendSkills: Di-filter berdasarkan category === 'frontend' (track bawah, gerak ke kiri)
 * ============================================================================
 */
const backendSkills = computed(() =>
  props.skills.filter((skill) => skill.category === 'backend')
)

const frontendSkills = computed(() =>
  props.skills.filter((skill) => skill.category === 'frontend')
)

/**
 * ============================================================================
 * [TECH INSIGHT: VECTOR ICON PIPELINE]
 * Helper untuk mengambil URL icon SVG resmi dari CDN Simple Icons.
 * - Menggunakan format URL cdn.simpleicons.org/<icon-slug>/<hex-color>
 * ============================================================================
 */
const getIconUrl = (iconSlug: string, hexColor: string): string => {
  const cleanHex = hexColor.replace('#', '')
  return `https://cdn.simpleicons.org/${iconSlug}/${cleanHex}`
}
</script>

<template>
  <section id="projects" class="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
    <!-- Header Section Projects -->
    <h2
      class="text-2xl md:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 border-l-4 border-blue-600 pl-4"
    >
      Featured Projects
    </h2>

    <!-- Grid Layout Portfolio -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-md transition-all duration-300 shadow-xs flex flex-col justify-between"
      >
        <div>
          <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{{ project.title }}</h3>
          <p class="text-slate-600 mt-2 text-sm leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Tags List -->
        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-md border border-slate-200 font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!--
      ============================================================================
      [MODUL TECH STACK: DUAL DIRECTION MARQUEE]
      1. Track Atas (Backend & Infrastructure):
         - Bergerak ke KANAN via utility 'animate-marquee-reverse'
      2. Track Bawah (Frontend & User Interface):
         - Bergerak ke KIRI via utility 'animate-marquee'
      Kedua baris mendukung 'hover:[animation-play-state:paused]' dan drag-to-scroll.
      ============================================================================
    -->
    <div id="skills" class="mt-20">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2
            class="text-2xl md:text-3xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4"
          >
            Tech Stack & Ecosystem
          </h2>
          <p class="text-sm text-slate-600 pl-4 mt-1">
            Engineered across backend architectures & modern frontend interfaces
          </p>
        </div>
        <span class="text-xs text-slate-400 hidden sm:inline-block">
          Hover to pause · Drag to inspect
        </span>
      </div>

      <!-- Wrapper Relative dengan Efek Fade Kiri & Kanan -->
      <div class="relative w-full overflow-hidden py-2 space-y-4">
        <!-- Efek Vignette / Gradient Mask Kiri -->
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50/90 to-transparent z-10"
        ></div>

        <!-- Efek Vignette / Gradient Mask Kanan -->
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50/90 to-transparent z-10"
        ></div>

        <!-- =================================================================== -->
        <!-- ROW 1: BACKEND TRACK (Bergerak ke KANAN -> animate-marquee-reverse) -->
        <!-- =================================================================== -->
        <div class="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing">
          <div class="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] gap-4 py-1">
            <!-- Set 1: Backend Data -->
            <div
              v-for="skill in backendSkills"
              :key="`be-orig-${skill.name}`"
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-slate-200/90 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
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
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-slate-200/90 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                {{ skill.name }}
              </span>
              <span
                class="w-1.5 h-1.5 rounded-full ml-1"
                :style="{ backgroundColor: skill.color }"
              ></span>
            </div>
          </div>
        </div>

        <!-- =================================================================== -->
        <!-- ROW 2: FRONTEND TRACK (Bergerak ke KIRI -> animate-marquee)        -->
        <!-- =================================================================== -->
        <div class="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing">
          <div class="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 py-1">
            <!-- Set 1: Frontend Data -->
            <div
              v-for="skill in frontendSkills"
              :key="`fe-orig-${skill.name}`"
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-slate-200/90 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
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
              class="shrink-0 flex items-center gap-3 px-4 py-3 bg-white border border-slate-200/90 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-xs group select-none"
            >
              <img
                :src="getIconUrl(skill.icon, skill.color)"
                :alt="skill.name"
                class="w-6 h-6 object-contain transition-transform group-hover:rotate-6"
                loading="lazy"
              />
              <span class="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
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
