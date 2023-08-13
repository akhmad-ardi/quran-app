<template>
<router-view />
</template>

<script>
import VerifyToken from './stores/Account/verifyToken';

export default {
  data() {
    return {
      VerifyToken: VerifyToken(),
    };
  },
  async created() {
    await this.VerifyToken.verifyToken();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.text-indent {
  text-indent: 14px;
}
</style>
