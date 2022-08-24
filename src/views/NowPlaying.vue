import gql from 'graphql-tag'

<script setup lang="ts">
import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import { NOW_PLAYING } from "../graphql-operations";
const nowPlayingQuery = useQuery(NOW_PLAYING);

console.log(nowPlayingQuery.result);
const movies = computed<Movie[]>(
  () => nowPlayingQuery.result?.value?.nowPlaying ?? []
);
console.log(movies);
</script>

<template>
  <div v-if="nowPlayingQuery.loading?.value">Loading...</div>
  <ul>
    <li v-for="movie in movies" v-bind:key="movie.id">
      <div>{{ movie.title }}</div>
    </li>
  </ul>
  <div class="nowPlaying">
    <h1>This is what is Now Playing</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .nowPlaying {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
