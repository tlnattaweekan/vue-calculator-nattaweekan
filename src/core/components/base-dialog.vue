<template>
  <div class="text-center">
    <v-dialog :value="show" width="500" persistent>
      <v-card>
        <v-card-title class="grey lighten-2" primary-title>
          {{ header }}
        </v-card-title>
        <v-card-text v-html="body"> </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onClickNo">
            {{ nameOnClickNo }}
          </v-btn>
          <v-btn color="primary" @click="onClickYes">
            {{ nameOnClickYes }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      required: true,
      default: () => false
    },
    onClickYes: {
      type: Function,
      required: false,
      default: () => () => {}
    },
    onClickNo: {
      type: Function,
      required: false,
      default: () => () => {}
    },
    nameOnClickYes: {
      type: String,
      required: false
    },
    nameOnClickNo: {
      type: String,
      required: false
    },
    header: {
      type: String,
      required: false
    },
    body: {
      type: String,
      required: false
    }
  },
  data: () => ({})
});
</script>
