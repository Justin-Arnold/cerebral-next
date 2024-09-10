<script lang="ts" setup>
// const aboveTheFold = ref(null)
// const scale = ref(1)

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll);
// })
  
// function handleScroll() {
//   const scrollPosition = window.scrollY
//   const windowHeight = window.innerHeight

//   // Calculate scale based on scroll position
//   const newScale = Math.max(0.5, 1 - scrollPosition / windowHeight)
//   console.log(aboveTheFold.value.style)
  
//   scale.value = newScale

//   aboveTheFold.value.style.transform = `scale(${scale.value})`;
//   aboveTheFold.value.style.top = '0'

  
// }
</script>

<template>
    <HomeAboveFold />
    <div class="h-screen"></div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
    
</template>
