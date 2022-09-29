<template>
  <Form>
    <template #form-header> Login to enjoy special deals today </template>
    <template #form-fields>
      <UIInput
        v-model="data.email"
        label="Email"
        placeholder="example@email.com"
      />
      <UIInput
        label="Password"
        placeholder="********"
        type="password"
        v-model="data.password"
      />
    </template>
    <template #button>
      <UIButton
        @click="handleLogin"
        :disabled="isButtonDisabled"
        text="Login"
      />
    </template>
  </Form>
</template>

<script setup>
import { computed, reactive } from "vue";
import useAuth from "@/composables/useAuth";
import swal from "sweetalert";
import Form from "@/components/UI/Form.vue";
import UIInput from "@/components/UI/Input.vue";
import UIButton from "@/components/UI/Button.vue";

const data = reactive({
  email: "",
  password: "",
  loading: false,
});

async function handleLogin() {
  const { login } = useAuth();
  data.loading = true;

  try {
    let response = await login({
      email: data.email,
      password: data.password,
    });
    let token = response.data.token;
    localStorage.setItem("jwt", token);
    if (token) {
      swal("Success", "Login Successful", "Error");
      window.location.pathname = "/profile";
    }
  } catch (err) {
    swal("Error", "Something Went Wrong", "error");
    console.log(err.response);
  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return !data.email || !data.password || data.loading;
});
</script>

<style lang="scss" scoped></style>
