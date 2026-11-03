<script setup lang="ts">
/**
 * ============================================================================
 * [ALUR DATA 1: SUMBER DATA (DATA SOURCE)]
 * Mengimpor 'profileData' dari src/data/profileData.ts.
 * Mengadopsi kanvas hangat (#FFFBF0 / #FDFBF7) bergaya modern Dribbble (ATM GoMeal style).
 * ============================================================================
 */
import { profileData } from "./data/profileData";

import Navbar from "./layouts/Navbar.vue";
import HeroSection from "./views/HeroSection.vue";
import ExperienceSection from "./views/ExperienceSection.vue";
import ProjectSection from "./views/ProjectSection.vue";
import ContactSection from "./views/ContactSection.vue";
</script>

<template>
  <!-- Background utama: Clean Warm Canvas (#FFFBF0 / #F8FAFC) mengadopsi palet Dribbble -->
  <div
    class="min-h-screen bg-[#FFFDF7] text-slate-900 selection:bg-amber-400 selection:text-slate-900 font-sans"
  >
    <Navbar />

    <main>
      <!-- Hero Section with Golden Amber Promo Banner Style & Metrics -->
      <HeroSection :profile="profileData" />

      <!-- Featured Projects & Dynamic Category Filter Bar -->
      <ProjectSection
        :projects="profileData.projects"
        :skills="profileData.skills"
      />

      <!-- Professional Journey Timeline -->
      <ExperienceSection :experiences="profileData.experiences" />

      <!-- Interactive Contact Form with Warm Card Widgets -->
      <ContactSection />
    </main>

    <footer
      class="py-8 text-center text-slate-400 text-xs sm:text-sm border-t border-amber-100 bg-white mt-16"
    >
      <p>
        © 2026 Syarif Muhammad Alhaiza. Built with Vue 3, TypeScript & Tailwind CSS.
      </p>
    </footer>
  </div>
</template>
