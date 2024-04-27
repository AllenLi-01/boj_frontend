<template>
  <div
    class="flex flex-col items-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298]"
  >
    <nav class="flex justify-between items-center w-full max-w-7xl px-4 py-2">
      <a href="#" class="text-2xl font-bold text-white">VULNX</a>
      <div class="flex space-x-4">
        <!-- 示例：将链接内容动态化 -->
        <a
          v-for="link in links"
          :key="link.text"
          :href="link.url"
          class="text-lg font-semibold hover:text-gray-300"
        >
          {{ link.text }}
        </a>
      </div>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-10 px-4 py-2 text-white hover:bg-white hover:text-[#1e3c72]"
      >
        Get In Touch
      </button>
    </nav>
    <div
      class="flex flex-col items-center w-full max-w-6xl px-4 mt-12 text-center"
    >
      <h1 class="text-4xl font-bold leading-tight text-white">
        VULNX — Intelligent Vulnerability Detection
      </h1>
      <h2 class="text-2xl font-semibold my-6 text-gray-300">
        Test, Analyze, Ecosystem & Integrated Vulnerabilities
      </h2>
      <p class="mb-8 leading-relaxed text-gray-300">
        VULNX is an intelligent vulnerability detection platform. Highly
        accurate, it detects critical vulnerabilities. Fast graph database,
        driving SCA in DevSecOps, threat intelligence, and security research.
      </p>
      <div class="flex space-x-4">
        <button
          class="bg-primary h-10 px-4 py-2 text-[#1e3c72] hover:bg-white hover:text-[#1e3c72]"
        >
          Learn More
        </button>
        <button
          class="bg-secondary h-10 px-4 py-2 text-[#1e3c72] hover:bg-white hover:text-[#1e3c72]"
        >
          Use Service
        </button>
      </div>
    </div>
    <div class="relative w-full mt-16">
      <img
        src="/placeholder.svg"
        alt="AI Software"
        class="w-full h-auto"
        width="1580"
        height="400"
        style="aspect-ratio: 1580/400; object-fit: cover"
      />
    </div>
  </div>
</template>

<script setup>
// 示例数据，可根据实际情况调整
const links = [
  { text: "Home", url: "#" },
  { text: "About", url: "#" },
  { text: "Services", url: "#" },
  { text: "Portfolio", url: "#" },
  { text: "Blog", url: "#" },
];
</script>

<style scoped>
/* 在这里添加你的 CSS 样式 */
</style>
