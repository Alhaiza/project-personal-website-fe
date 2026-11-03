<script setup lang="ts">
/**
 * ============================================================================
 * [CONTACT SECTION - ATM GoMeal Warm Card & Interactive Form Style]
 * Mengadopsi prinsip desain dari referensi:
 * - Card rounded-3xl dengan border halus dan bayangan hangat
 * - Input field rounded-2xl dengan focus ring warna amber
 * - Tombol submit rounded-2xl penuh dengan efek elevasi amber shadow
 * - Kartu info kontak samping mirip widget Balance / Address pada desain referensi
 * ============================================================================
 */
import { reactive, ref } from "vue";
import type { ContactMessage } from "../types/profile";

// Inisialisasi state reaktif formulir kontak
const form = reactive<ContactMessage>({
  name: "",
  email: "",
  message: "",
});

// State untuk menyimpan pesan kesalahan validasi per field input
const errors = reactive<Record<keyof ContactMessage, string>>({
  name: "",
  email: "",
  message: "",
});

// State status pengiriman & feedback UI
const isSubmitting = ref<boolean>(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");
const feedbackMessage = ref<string>("");

const validateForm = (): boolean => {
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate Name
  if (!form.name.trim()) {
    errors.name = "Full name is required.";
    isValid = false;
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
    isValid = false;
  } else {
    errors.name = "";
  }

  // Validate Email
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
    isValid = false;
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = "Invalid email format (e.g., user@domain.com).";
    isValid = false;
  } else {
    errors.email = "";
  }

  // Validate Message
  if (!form.message.trim()) {
    errors.message = "Message is required.";
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
    isValid = false;
  } else {
    errors.message = "";
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    submitStatus.value = "error";
    feedbackMessage.value = "Please correct the highlighted validation errors above.";
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = "idle";
  feedbackMessage.value = "";

  try {
    // Simulasi pengiriman form async
    await new Promise((resolve) => setTimeout(resolve, 1200));

    submitStatus.value = "success";
    feedbackMessage.value = "Thank you! Your message has been sent successfully. I will get back to you shortly.";

    // Reset formulir setelah submit berhasil
    form.name = "";
    form.email = "";
    form.message = "";
    errors.name = "";
    errors.email = "";
    errors.message = "";
  } catch {
    submitStatus.value = "error";
    feedbackMessage.value = "An unexpected error occurred while sending your message. Please try again later.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
    <div class="mb-10 text-center sm:text-left">
      <div class="flex items-center justify-center sm:justify-start gap-2 mb-2">
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
        <span class="text-xs font-bold uppercase tracking-wider text-amber-600">Connect With Me</span>
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        Get In Touch
      </h2>
      <p class="text-slate-500 text-xs sm:text-sm mt-1 max-w-lg">
        Interested in collaborating, discussing system architectures, or discussing engineering opportunities? Drop me a message.
      </p>
    </div>

    <!-- Layout Grid Form & Info Cards (ATM: Form + Side Balance/Address Card Style) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Interactive Form Card -->
      <div class="lg:col-span-7 bg-white border border-amber-100/90 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
        <h3 class="text-base sm:text-lg font-black text-slate-900 mb-6">Send a Message</h3>

        <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
          <!-- Field Name -->
          <div>
            <label for="contact-name" class="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name <span class="text-amber-500">*</span>
            </label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              placeholder="e.g. Patricia Sarah"
              :class="[
                'w-full px-4 py-3 rounded-2xl text-xs sm:text-sm bg-slate-50 border transition-all duration-200 focus:outline-none focus:bg-white',
                errors.name
                  ? 'border-rose-300 focus:ring-2 focus:ring-rose-400 bg-rose-50/20'
                  : 'border-slate-200/90 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30'
              ]"
            />
            <p v-if="errors.name" class="mt-1 text-[11px] font-semibold text-rose-500">{{ errors.name }}</p>
          </div>

          <!-- Field Email -->
          <div>
            <label for="contact-email" class="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address <span class="text-amber-500">*</span>
            </label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              placeholder="e.g. patricia@example.com"
              :class="[
                'w-full px-4 py-3 rounded-2xl text-xs sm:text-sm bg-slate-50 border transition-all duration-200 focus:outline-none focus:bg-white',
                errors.email
                  ? 'border-rose-300 focus:ring-2 focus:ring-rose-400 bg-rose-50/20'
                  : 'border-slate-200/90 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30'
              ]"
            />
            <p v-if="errors.email" class="mt-1 text-[11px] font-semibold text-rose-500">{{ errors.email }}</p>
          </div>

          <!-- Field Message -->
          <div>
            <label for="contact-message" class="block text-xs font-bold text-slate-700 mb-1.5">
              Message <span class="text-amber-500">*</span>
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              rows="4"
              placeholder="Tell me about your project, inquiries, or opportunities..."
              :class="[
                'w-full px-4 py-3 rounded-2xl text-xs sm:text-sm bg-slate-50 border transition-all duration-200 focus:outline-none focus:bg-white resize-y',
                errors.message
                  ? 'border-rose-300 focus:ring-2 focus:ring-rose-400 bg-rose-50/20'
                  : 'border-slate-200/90 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30'
              ]"
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-[11px] font-semibold text-rose-500">{{ errors.message }}</p>
          </div>

          <!-- Feedback Status Toast Banner -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="submitStatus === 'success'"
              class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2.5"
            >
              <span class="text-base">✓</span>
              <span>{{ feedbackMessage }}</span>
            </div>
            <div
              v-else-if="submitStatus === 'error'"
              class="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2.5"
            >
              <span class="text-base">⚠️</span>
              <span>{{ feedbackMessage }}</span>
            </div>
          </Transition>

          <!-- Submit CTA Button (ATM: Yellow Rounded-2xl Button with shadow) -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-3.5 px-6 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-amber-400/30 active:scale-98 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
          >
            <span v-if="isSubmitting" class="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
            <span>{{ isSubmitting ? 'Sending Message...' : 'Send Message' }}</span>
          </button>
        </form>
      </div>

      <!-- Right Column: Info Cards (ATM: Mengadopsi Style Widget Kanan di GoMeal) -->
      <div class="lg:col-span-5 space-y-5">
        <!-- Direct Contact Card (Warm Gradient Style) -->
        <div class="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-6 text-white shadow-xl shadow-amber-400/20 relative overflow-hidden">
          <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-md pointer-events-none"></div>

          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-100">Direct Inquiries</span>
          <h4 class="text-xl font-black mt-1">Let's talk about projects</h4>
          <p class="text-xs text-amber-50/90 mt-2 leading-relaxed">
            I am always open to discussing new opportunities, high-throughput systems, and innovative engineering ideas.
          </p>

          <div class="mt-6 space-y-3">
            <a
              href="mailto:alqadrihaiza@gmail.com"
              class="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-xs p-3 rounded-2xl transition text-xs font-bold"
            >
              <span class="text-lg">📧</span>
              <span>alqadrihaiza@gmail.com</span>
            </a>
            <div class="flex items-center gap-3 bg-white/20 backdrop-blur-xs p-3 rounded-2xl text-xs font-bold">
              <span class="text-lg">📍</span>
              <span>Pontianak, Indonesia</span>
            </div>
          </div>
        </div>

        <!-- Professional Profiles Card (Clean White Widget Style) -->
        <div class="bg-white border border-amber-100/90 rounded-3xl p-6 shadow-sm">
          <h4 class="text-sm font-black text-slate-900 mb-4">Professional Channels</h4>
          
          <div class="space-y-3">
            <a
              href="https://linkedin.com/in/alhaiza"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition group"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">in</div>
                <div>
                  <span class="text-xs font-bold text-slate-900 block group-hover:text-amber-600 transition-colors">LinkedIn</span>
                  <span class="text-[10px] text-slate-400">linkedin.com/in/alhaiza</span>
                </div>
              </div>
              <span class="text-slate-400 group-hover:text-amber-500 text-xs">↗</span>
            </a>

            <a
              href="https://github.com/Alhaiza"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition group"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs">gh</div>
                <div>
                  <span class="text-xs font-bold text-slate-900 block group-hover:text-amber-600 transition-colors">GitHub</span>
                  <span class="text-[10px] text-slate-400">github.com/Alhaiza</span>
                </div>
              </div>
              <span class="text-slate-400 group-hover:text-amber-500 text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
