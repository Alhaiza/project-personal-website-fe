<script setup lang="ts">
/**
 * ============================================================================
 * [HERO & INTRO ORGANISM COMPONENT]
 * Menerima props 'profile' bertipe UserProfile dari parent App.vue.
 * Didesain responsif untuk berbagai resolusi layar Google Chrome:
 * - Mobile S / SE (320px - 375px): Avatar w-36, padding py-12, tombol stacked
 * - Mobile M / L (390px - 425px): Avatar w-40, text-3xl
 * - Tablet & Desktop (768px+): Layout berdampingan (flex-row), text-5xl
 * ============================================================================
 */
import type { UserProfile } from "../types/profile";

defineProps<{
  profile: UserProfile;
}>();
</script>

<template>
  <section
    id="about"
    class="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 scroll-mt-20"
  >
    <!--
      Foto Profil dengan Dynamic Responsive Scale:
      - w-36 h-36 (Mobile) -> sm:w-44 sm:h-44 (Tablet) -> md:w-48 md:h-48 (Desktop)
    -->
    <div class="relative group shrink-0">
      <div
        class="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-sm"
      ></div>
      <img
        :src="profile.avatar"
        :alt="profile.name"
        class="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover rounded-full border-2 border-slate-800 shadow-xl"
        loading="eager"
      />
    </div>

    <!-- Informasi Profil -->
    <div class="flex-1 text-center md:text-left">
      <span
        class="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 inline-block tracking-wide"
      >
        {{ profile.role }}
      </span>

      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 sm:mt-4 tracking-tight leading-tight"
      >
        {{ profile.name }}
      </h1>

      <p
        class="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
      >
        {{ profile.bio }}
      </p>

      <!--
        CTA Buttons:
        - Mobile (< 640px): Tombol mengambil lebar penuh atau berjejer rapi
        - active:scale-95 memberikan feedback mikro-interaksi sentuhan layar
      -->
      <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
        <a
          href="#projects"
          class="w-full sm:w-auto text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20 active:scale-95 text-sm sm:text-base"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="w-full sm:w-auto text-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium rounded-xl border border-slate-800 transition active:scale-95 text-sm sm:text-base"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</template>
