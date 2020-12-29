<template>
  <q-page>
    <div class="row justify-center">
      <q-card bordered flat class="col-xs-10 col-sm-8 col-lg-4 bg-primary q-my-sm">
        <q-item dense class="q-pa-none">
          <q-item-section class="col-shrink">
            <q-btn color="white" round flat icon="more_vert" size="sm">
              <q-menu
                auto-close
                anchor="top left"
                content-class="bg-white"
              >
                <q-btn round flat color="primary" icon="create" size="sm"/>
                <q-btn round flat color="primary" icon="delete" size="sm"/>
              </q-menu>
            </q-btn>
          </q-item-section>
          <q-item-section class="col-shrink">
            <q-item-label class="text-white text-subtitle1">Monstera 1 </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label caption class="text-white text-italic">
              Monstera deliciosa Liebm.
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section>
            <q-btn class="text-white bg-fertilizer" icon="science"/>
            <q-item-label caption class="text-white text-center q-pt-sm">
              &#129514; 14 days ago
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-btn class="text-white bg-water" icon="opacity"/>
            <q-item-label caption class="text-white text-center q-pt-sm">
              &#128167; 7 days ago
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-card-actions align="around" class="q-pa-none" @click="expanded = !expanded">
          <q-btn
            style="width: 100%"
            color="white"
            flat
            dense
            disable
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-card-section class="text-subtitle2 q-py-none">
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-img src="https://i.imgur.com/1LU9vFa.png" :ratio="16/9"/>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-white">&#128167; Water</q-item-label>
                    <q-item-label caption class="text-white">
                      Water every 1-2 weeks, allowing soil to dry out between waterings.
                      Expect to water more often in brighter light and less often in lower light.
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <q-item-label class="text-white">&#129514; Fertilization</q-item-label>
                    <q-item-label caption class="text-white">
                      Thrives in bright to medium indirect light. Not suited for intense,
                      direct sun but can be acclimated to withstand it.
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-white">&#127774; Sunlight</q-item-label>
                    <q-item-label caption class="text-white">
                      Thrives in bright to medium indirect light. Not suited for intense,
                      direct sun but can be acclimated to withstand it.
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-white">&#128008; Pet friendly</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
    <div class="row justify-center">
      <div class="col-xs-10 col-sm-8 col-lg-4">
        <q-fab color="primary" text-color="white" icon="add" direction="right">
          <q-fab-action color="primary" text-color="white" icon="search" />
          <q-fab-action color="primary" text-color="white" icon="photo_camera" />
        </q-fab>
      </div>
    </div>
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
