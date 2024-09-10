<script setup lang="ts">
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

onMounted(() => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#otf",
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      pinSpacing: false
    }
  });

  tl.to("#otf", {
    scale: 0.5,
    rotationY: 180,
    ease: "none",
    duration: 1
  });

  // Fade out front content
  tl.to("#front-content", {
    // opacity: 0,
    duration: 0.5
  }, 0);

  // Fade in back content
  tl.to("#back-content", {
    opacity: 1,
    duration: 0.5
  }, 0.5);
})
</script>

<template>
  <div>
    <div id="otf" class="h-screen relative transform-style-3d">
      <div id="front-content" class="absolute inset-0 backface-hidden h-screen border border-primary rounded-lg scale-110">
        <div class="flex flex-col items-center h-full justify-center">
          <div class="w-full grid place-items-center text-[144px] tracking-widest leading-tight simplifica">
            CEREBRAL
          </div>
          <span class="text-2xl font-thin tracking-widest">
            A mind expanding dashboard, your way
          </span>
          <div class="flex flex-row gap-4 form-control w-1/3 mt-12">
            <input class="input input-bordered grow font-sans" />
            <button class="btn btn-secondary px-6 font-sans">Join Waitlist</button>
          </div>
        </div>
      </div>
      <div id="back-content" class="absolute inset-0 backface-hidden opacity-0 rotateY-180 h-screen">
        <div class="rounded-lg overflow-clip w-full aspect-video">
            <div class="w-full bg-white/20 flex gap-4 py-2 px-4">
              <span class="bg-red-400 h-4 aspect-square rounded-full"></span>
                <span class="bg-yellow-400 h-4 aspect-square rounded-full"></span>
                <span class="bg-green-400 h-4 aspect-square rounded-full"></span>
            </div>
            <div class="bg-white/5 h-full grid place-items-center text-[80px]">
              Website Content Goes Here
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transform-style-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotateY-180 {
  transform: rotateY(180deg);
}

.simplifica {
  font-family: 'Simplifica', sans-serif;
}
</style>