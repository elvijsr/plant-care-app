<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-6 col-md-4 q-py-xl">
        <q-card class="bg-primary">
          <div class="row justify-around">
            <q-btn flat to="/login">Log in</q-btn>
            <q-btn flat to="/register">Sign Up</q-btn>
          </div>
          <q-card-section class="q-px-lg q-mt-lg">
            <q-form class="login">
              <q-input
                label="Username"
                v-model="username"
                name="username"
                type="text"
              />
              <q-input
                id="password"
                label="Password"
                v-model="password"
                name="password"
                type="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="justify-evenly q-pa-lg">
            <q-btn
              unelevated
              rounded
              @click="localLogin"
              icon-right="chevron_right"
              size="lg"
              class="q-px-md"
              label="Log In"
              color="primary"
              text-color="white"
            >
            </q-btn>
            <q-btn @click="logoutCall" class="hidden">Logout</q-btn>
          </q-card-actions>
          <div class="row justify-center q-pb-lg">
            <a href="#">Forgot password?</a>
          </div>
          <q-separator/>
          <div class="row justify-around q-pa-md">
            <q-card-actions class="justify-center">
              <v-facebook-login
                app-id="328946581581646"
                @login="facebookLogin"
                @logout="logoutCall"
                use-alt-logo
              >
              </v-facebook-login>
            </q-card-actions>
            <q-card-actions class="justify-center">
              <q-btn @click="googleLogin">Sign in with google</q-btn>
              <div class="g-signin2" data-onsuccess="googleLogin"></div>
            </q-card-actions>
          </div>
          <q-card-actions class="justify-center">
            <q-btn @click="userInfo"> Test Request </q-btn>
          </q-card-actions>
          <q-card-actions class="justify-center">
            <q-btn @click="logoutCall"> Logout </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>

</style>
