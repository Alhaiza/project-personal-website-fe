<script setup lang="ts">
/**
 * ============================================================================
 * [KONSEP VUE 3: ATOM UI COMPONENT & PROPS TYPE DEFINITION]
 * Komponen ini merupakan atom UI terkecil yang bertanggung jawab merender satu
 * titik riwayat kerja (Single Responsibility Principle).
 *
 * Mengapa defineProps<Experience>()?
 * - Memberikan kontrak tipe compile-time yang ketat via TypeScript.
 * - Mencegah runtime rendering error saat mengakses properti objek (misal: null pointer).
 * ============================================================================
 */
import type { Experience } from "../types/profile";

defineProps<{
  experience: Experience;
  isLast?: boolean;
}>();
</script>

<template>
  <div class="relative pl-8 pb-10 group">
    <!-- Garis vertikal timeline penanda alur waktu antar perusahaan -->
    <div
      v-if="!isLast"
      class="absolute left-3 top-3 bottom-0 w-0.5 bg-slate-200 group-hover:bg-blue-400/60 transition-colors duration-300"
      aria-hidden="true"
    ></div>

    <!-- Titik indikator lingkaran utama (Company Node) -->
    <div
      class="absolute left-1.5 top-2.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-blue-600 group-hover:scale-125 transition-all duration-300 shadow-sm"
      aria-hidden="true"
    ></div>

    <!-- Kartu Pengalaman Karir (Clean White Card dengan Soft Shadow) -->
    <div
      class="bg-white border border-slate-200/80 p-5 sm:p-6 rounded-2xl hover:border-blue-400/60 hover:shadow-md transition-all duration-300 shadow-xs"
    >
      <!-- Header Nama Perusahaan & Badge Waktu (Untuk Single Posisi) -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <h3 class="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
          {{ experience.company }}
        </h3>
        <!-- Single position period badge (jika tidak punya sub-positions) -->
        <span
          v-if="!experience.positions && experience.period"
          class="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 w-fit self-start sm:self-auto"
        >
          {{ experience.period }}
        </span>
      </div>

      <!-- KASUS A: Multi-Posisi Bertingkat (Promosi / Perubahan Posisi dalam 1 Perusahaan) -->
      <div v-if="experience.positions && experience.positions.length > 0" class="mt-4 space-y-5">
        <div
          v-for="pos in experience.positions"
          :key="pos.id"
          class="relative pl-5 border-l-2 border-slate-200 hover:border-blue-500/60 transition-colors duration-200"
        >
          <!-- Bullet node untuk sub-posisi -->
          <div
            class="absolute -left-1.25 top-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white"
            aria-hidden="true"
          ></div>

          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h4 class="text-base font-semibold text-slate-800">
              {{ pos.role }}
            </h4>
            <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 w-fit self-start sm:self-auto">
              {{ pos.period }}
            </span>
          </div>

          <p v-if="pos.description" class="text-sm text-slate-600 leading-relaxed mb-3">
            {{ pos.description }}
          </p>

          <!-- Badges Teknologi per Posisi -->
          <div v-if="pos.technologies && pos.technologies.length > 0" class="flex flex-wrap gap-2">
            <span
              v-for="tech in pos.technologies"
              :key="tech"
              class="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 border border-slate-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- KASUS B: Single Posisi Langsung (Fallback Standar) -->
      <div v-else class="mt-2">
        <h4 v-if="experience.role" class="text-base font-semibold text-slate-800 mb-2">
          {{ experience.role }}
        </h4>
        <p v-if="experience.description" class="text-sm text-slate-600 leading-relaxed mb-4">
          {{ experience.description }}
        </p>
        <div v-if="experience.technologies && experience.technologies.length > 0" class="flex flex-wrap gap-2">
          <span
            v-for="tech in experience.technologies"
            :key="tech"
            class="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 border border-slate-200"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
