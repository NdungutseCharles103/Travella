<template>
    <div class="flex w-full p-4 flex-col">
        <h1 class="text-xl font-semibold mx-auto">Liked Places</h1>
        <div v-if="liked.length === 0" class="flex flex-col items-center mt-[20vh]">
            <v-icon icon="fa fa-heart" class="text-mainblue text-4xl phone:text-[2em]" />
            <h1 class="font-semibold text-base phone:text-lg">No Liked Places</h1>
            <p class="text-xs opacity-75">You have not liked any places yet</p>
            <RouterLink to="/search"
                class="text-xs font-semibold text-mainblue hover:bg-mainblue hover:text-white duration-300 border border-mainblue rounded-lg px-2 py-1 phone:text-sm phone:px-3 phone:py-2 mt-6">
                >
                Search Places
            </RouterLink>
        </div>
        <div v-else class="flex w-full flex-col mt-5 gap-y-4">
            <SearchResultVue v-for="like in liked" :result="like" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { usePlaceStore } from '@/stores/places';
import { storeToRefs } from 'pinia';
import SearchResultVue from '@/components/dashboard/SearchResult.vue';

const placesStore = usePlaceStore()
const { liked } = storeToRefs(placesStore);

</script>