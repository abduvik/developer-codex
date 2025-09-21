<script setup>
import { topics } from "@temp/stores/topics";
</script>
<template>
  <ul>
    <li v-for="topic in topics">
      <RouterLink :to="topic.path">
        {{ topic.title }}
      </RouterLink>
    </li>
  </ul>
</template>
