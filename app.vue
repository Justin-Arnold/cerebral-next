<script setup land="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const colorMode = useColorMode()
colorMode.preference = 'dracula'

gsap.registerPlugin(ScrollTrigger);

</script>

<template>
  <div class="w-screen overflow-hidden">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>