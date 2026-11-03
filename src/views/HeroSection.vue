<script setup lang="ts">
/**
 * ============================================================================
 * [HERO & GREETING COMPONENT - Dribbble Modern Clean Style (ATM)]
 * Mengadopsi prinsip desain dari referensi:
 * - Salam personal & search bar pencarian cepat
 * - Banner promo melengkung elegan warna Golden Amber (#F59E0B / #D97706)
 * - Kartu metrik profil (Quick Stats: Projects, Experience, Tech Stack, Success Rate)
 * - Avatar model/developer terintegrasi dengan aksen glow melingkar
 * ============================================================================
 */
import type { UserProfile } from "../types/profile";

defineProps<{
  profile: UserProfile;
}>();
</script>

<template>
  <section id="about" class="pt-6 pb-12 sm:pb-16 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
    <!-- Top Greeting Bar & Quick Search Filter -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Available for Opportunities</span>
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-1 tracking-tight">
          Hello, Welcome to my Portfolio
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 mt-0.5">
          Explore production-grade enterprise projects, architecture blueprints, and fullstack capabilities.
        </p>
      </div>

      <!-- Quick Action CTA Pill -->
      <div class="flex items-center gap-3">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm transition shadow-lg shadow-amber-400/25 active:scale-95"
        >
          <span>Get in Touch</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>

    <!--
      HERO BANNER: Warm Amber Gradient with Radial Waves & Developer Avatar
      Mengadopsi kartu promo utama pada desain GoMeal:
      - Background: from-amber-400 via-amber-500 to-amber-600 dengan rounded-3xl / rounded-[32px]
      - Inner abstract blurred circles & geometric depth
    -->
    <div class="relative bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-3xl sm:rounded-[36px] p-6 sm:p-10 md:p-12 text-white overflow-hidden shadow-2xl shadow-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Background Ambient Geometric Circles -->
      <div class="absolute -right-12 -bottom-12 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute right-40 -top-20 w-64 h-64 bg-amber-300/30 rounded-full blur-xl pointer-events-none"></div>
      <div class="absolute left-1/3 bottom-0 w-48 h-48 bg-amber-700/20 rounded-full blur-lg pointer-events-none"></div>

      <!-- Left Column: Role, Name, Bio, and CTAs -->
      <div class="relative z-10 max-w-xl text-center md:text-left">
        <!-- Role Badge -->
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-50 border border-white/25 text-xs font-semibold shadow-xs">
          <span class="w-2 h-2 rounded-full bg-white"></span>
          {{ profile.role }}
        </span>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight leading-tight">
          {{ profile.name }}
        </h2>

        <p class="text-amber-50/95 mt-4 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
          {{ profile.bio }}
        </p>

        <!-- CTAs inside banner -->
        <div class="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3.5">
          <a
            href="#projects"
            class="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-2xl transition shadow-lg shadow-black/15 active:scale-95"
          >
            Explore Projects
          </a>
          <a
            href="#experience"
            class="px-6 py-3 bg-white hover:bg-amber-50 text-slate-900 font-bold text-xs sm:text-sm rounded-2xl transition shadow-md shadow-black/5 active:scale-95"
          >
            Career Timeline
          </a>
        </div>
      </div>

      <!-- Right Column: Avatar Portrait inside Floating Frosted Ring -->
      <div class="relative shrink-0 z-10">
        <div class="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2.5 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
            loading="eager"
          />

          <!-- Floating Badge - Top Experience -->
          <div class="absolute -bottom-2 -left-2 sm:bottom-2 sm:-left-4 bg-white text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-2">
            <span class="text-lg">⚡</span>
            <div class="text-left">
              <span class="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Experience</span>
              <span class="text-xs font-black text-slate-900">1+ Years Production</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats Cards (ATM: Mengadopsi Widget Balance & Metric Card) -->
    <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="bg-white border border-amber-100/80 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition flex items-center gap-3.5">
        <div class="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
          🏛️
        </div>
        <div>
          <span class="text-[11px] font-medium text-slate-400 block">Enterprise Apps</span>
          <span class="text-base sm:text-lg font-black text-slate-900">5 Platforms</span>
        </div>
      </div>

      <div class="bg-white border border-amber-100/80 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition flex items-center gap-3.5">
        <div class="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
          🚀
        </div>
        <div>
          <span class="text-[11px] font-medium text-slate-400 block">Production Commits</span>
          <span class="text-base sm:text-lg font-black text-slate-900">1,400+ Verified</span>
        </div>
      </div>

      <div class="bg-white border border-amber-100/80 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition flex items-center gap-3.5">
        <div class="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
          ⚙️
        </div>
        <div>
          <span class="text-[11px] font-medium text-slate-400 block">Core Architecture</span>
          <span class="text-base sm:text-lg font-black text-slate-900">Kafka & Microservices</span>
        </div>
      </div>

      <div class="bg-white border border-amber-100/80 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition flex items-center gap-3.5">
        <div class="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0">
          🔒
        </div>
        <div>
          <span class="text-[11px] font-medium text-slate-400 block">Data Integrity</span>
          <span class="text-base sm:text-lg font-black text-slate-900">Zero Mismatch</span>
        </div>
      </div>
    </div>
  </section>
</template>
