<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-toolbar-title class="text-white">
          &#127793; Hey, Laine!
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="account_circle"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="right"
      :width=150
      content-class="main-bg"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-white"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Profile',
    link: 'https://quasar.dev',
  },
  {
    title: 'FAQ',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Sign out',
    link: 'https://chat.quasar.dev',
  },
];

import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return { leftDrawerOpen, essentialLinks };
  },
});
</script>
