<template>
  <Form>
    <template #form-header
      >Register as a member and begin to enjoy exclusive deals today</template
    >
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
      <UIInput
        label="Confirm Password"
        placeholder="********"
        type="password"
        v-model="data.confirmPassword"
      />
      <UIInput
        label="Mobile No."
        placeholder="080********"
        type="number"
        v-model="data.mobileNo"
      />
    </template>
    <template #button>
      <UIButton
        @click="handleLogin"
        :disabled="isButtonDisabled"
        text="Become a member"
      />
    </template>
  </Form>
</template>

<script setup>
import { computed, reactive } from "vue";
import useAuth from "@/composables/useAuth";
// import { useStore } from "vuex";

import swal from "sweetalert";
import Form from "@/components/UI/Form.vue";
import UIInput from "@/components/UI/Input.vue";
import UIButton from "@/components/UI/Button.vue";

const data = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  mobileNo: "",
  loading: false,
});

console.log(data);

async function handleLogin() {
  const { login } = useAuth();
  data.loading = true;

  try {
    let response = await login({
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      mobileNo: data.mobileNo,
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
