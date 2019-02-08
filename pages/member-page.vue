<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card class="elevation-12">
      <members-only>
        <v-toolbar dark color="primary">
          <v-toolbar-title>ログインしていないと見れないページ</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
           ログイン中です<br>
            <a href="/account">アカウントページへ</a>
          </v-card-text>
      </members-only>
    </v-card>
  </v-flex>
</template>

<script>
import MembersOnly from '~/components/members-only.vue'

export default {
  components: {
    MembersOnly
  }
}
</script>
