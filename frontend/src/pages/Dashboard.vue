<template>
  <q-page class="row items-center justify-evenly">
    <q-card bordered flat class="col-10 bg-primary">
      <q-item>
        <q-item-section avatar>
          <q-avatar square rounded size="3rem">
            <img src="https://i.imgur.com/FTGpvaV.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-white">Monstera</q-item-label>
          <q-item-label caption class="text-white">
            Monstera deliciosa Liebm.
          </q-item-label>
          <q-item-label caption class="text-white">
            &#128166; 7 days ago
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn round class="text-white bg-primary-gradient" icon="opacity" />
        </q-item-section>
      </q-item>

      <q-card-actions align="around">
        <q-btn flat round color="primary" class="text-white" icon="delete" />
        <q-btn flat round color="primary" class="text-white" icon="create" />
        <q-btn
          color="white"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-card-section class="text-subtitle2">
            <q-list>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-white">&#127774; Sunlight</q-item-label>
                  <q-item-label caption class="text-white">
                    Thrives in bright to medium indirect light. Not suited for intense,
                    direct sun but can be acclimated to withstand it.
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label class="text-white">&#128167; Water</q-item-label>
                  <q-item-label caption class="text-white">
                    Water every 1-2 weeks, allowing soil to dry out between waterings.
                    Expect to water more often in brighter light and less often in lower light.
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { Expanded } from 'components/models';

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const expanded = ref<Expanded>({
      isExpanded: false,
    });
    return { expanded };
  },
});
</script>

<style scoped>

</style>
