<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-xs-11 col-sm-6 col-md-4 q-py-xl">
        <q-card class="bg-white">
          <q-card-actions>
            <div @click="$router.go(-1)" class="text-primary">
              <q-icon name="arrow_back_ios_new" />
              BACK
            </div>
          </q-card-actions>
          <q-form class="q-px-lg q-mt-lg q-mb-lg">
            <q-input
              label="Name"
              v-model="username"
              id="username"
              name="username"
              type="text"
            />
            <q-input
              id="email"
              label="E-mail"
              v-model="email"
              name="email"
              type="email"
            />
            <q-input
              id="password"
              label="Password"
              v-model="password1"
              name="password"
              type="password"
            />
            <q-input
              id="password-confirm"
              label="Confirm password"
              v-model="password2"
              name="password-confirm"
              type="password"
            />
          </q-form>
          <q-card-actions class="justify-evenly q-pa-lg" vertical>
            <q-btn
              unelevated
              v-on:click="registerCall"
              size="md"
              class="q-px-md"
              label="Sign Up"
              color="primary"
              text-color="white"
            >
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style scoped>

</style>
