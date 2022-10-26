<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()

function goTolink(link:string){
  console.log(link)
  // location.href = link
  window.open(link)
}

</script>

<template>
  <template v-for="key in Object.keys(projects)" :key="key">
    <h4 class="mt-10 font-bold text-white/90 text-lg">
      {{ key }}
    </h4>
    <div class="project-grid py-2 gap-4">
      <button
        v-for="item, idx in projects[key]"
        :key="idx"
        class="flex flex-col text-left hover:bg-white/20 p-2 rounded-xs"
        :class="item.link ? 'hover:bg-white/20' : 'hover:bg-white/[0.02]'"
        @click="item.link ? goTolink(item.link) : ''"
      >
        <div class="flex flex-col">
          <div class="text-normal text-white/70">{{ item.name }}</div>
          <div class="desc text-sm font-normal text-white/40" v-html="item.desc" />
        </div>
    </button>
    </div>
  </template>
</template>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
