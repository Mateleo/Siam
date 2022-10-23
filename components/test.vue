<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()
</script>

<template>
  <template v-for="key in Object.keys(projects)" :key="key">
    <h4 class="mt-10 font-bold text-white/90 text-lg">
      {{ key }}
    </h4>
    <div class="project-grid py-2 -mx-3 gap-2">
      <a
        v-for="item, idx in projects[key]"
        :key="idx"
        class="item relative flex"
        :href="item.link"
        target="_blank"
        :class="!item.link ? 'pointer-events-none' : ''"
        :title="item.name"
      >
        <div class="flex flex-col">
          <div class="text-normal text-white/70">{{ item.name }}</div>
          <div class="desc text-sm font-normal text-white/40" v-html="item.desc" />
        </div>
      </a>
    </div>
  </template>
</template>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.project-grid a.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}

.project-grid a.item:hover {
  background: #b1b1b11e;
}
</style>
