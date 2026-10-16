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
    class="py-14 sm:py-20 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 scroll-mt-20"
  >
    <!--
      Foto Profil Minimalist Clean:
      - Border putih solid dengan drop-shadow lembut (soft atmospheric depth)
      - Aksen circle soft blue di belakang foto
    -->
    <div class="relative group shrink-0">
      <div
        class="absolute -inset-2 bg-blue-100 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300"
      ></div>
      <img
        :src="profile.avatar"
        :alt="profile.name"
        class="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-xl shadow-slate-200/60"
        loading="eager"
      />
    </div>

    <!-- Informasi Profil -->
    <div class="flex-1 text-center md:text-left">
      <!-- Role Badge Pill -->
      <span
        class="px-3.5 py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-200/60 inline-flex items-center gap-1.5 tracking-wide shadow-xs"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
        {{ profile.role }}
      </span>

      <!-- Nama Headline -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight"
      >
        {{ profile.name }}
      </h1>

      <!-- Bio / Summary -->
      <p
        class="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
      >
        {{ profile.bio }}
      </p>

      <!-- CTA Buttons (Corporate Clean Style) -->
      <div class="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
        <a
          href="#projects"
          class="w-full sm:w-auto text-center px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition shadow-md shadow-blue-500/25 active:scale-95 text-sm sm:text-base"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="w-full sm:w-auto text-center px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-full border border-slate-200/90 shadow-xs hover:border-slate-300 transition active:scale-95 text-sm sm:text-base"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</template>
