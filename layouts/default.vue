<template>
  <client-only>
  <div class="page">
    <slot />
  </div>
  </client-only>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";

const jsonLdSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://acb.studio/",
      "logo": "https://acb.studio/assets/images/acb-studio.png"
};

definePageMeta({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(jsonLdSchema),
      id: "schema-org-graph",
      "data-hid": "11111",
    },
  ],
});
</script>

<style lang="scss"></style>
