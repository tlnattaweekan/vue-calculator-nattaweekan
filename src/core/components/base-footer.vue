<template>
  <v-footer app color="#35387a" dark class="font-weight-medium base__footer">
    Copyright &copy; 2018-2020 by BORA-DOPA All Rights Reserved. Powered by CDT-MOI
    <v-spacer></v-spacer> v {{ v }}
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    v: process.env.VERSION
  })
};
</script>
