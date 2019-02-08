<template>
  <div>

    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>ログイン中</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            {{ user.email }}でログイン中です<br>
            <a href="/member-page">メンバーページへ</a>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="logout">ログアウト</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </div>

    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="mail"
                name="email"
                label="Email"
                type="text"
                v-model="email"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">ログイン</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </div>

  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods : {
    ...mapActions(['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        // ログインしたら飛ぶページを指定
        // this.$router.push("/member-page")
      }).catch((error) => {
        alert(error)
      });
    },
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.setUser(null)
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>
