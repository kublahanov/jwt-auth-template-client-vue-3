<script setup>
</script>

<template>
  <div class="container-fluid angled-gradient">
    <div class="row">
      <div class="col px-5 pt-4">
        <span class="px-2"><RouterLink to="/">Home</RouterLink></span>
        <span class="px-2"><RouterLink to="/login">Login</RouterLink></span>
        <span class="px-2"><RouterLink to="/register">Register</RouterLink></span>
      </div>
    </div>
    <div class="row min-vh-100">
      <div class="col-sm-6 p-sm-5 p-4">
        <div class="card mw-600">
          <div class="card-body p-sm-5 p-4">
            <h4 class="card-title mb-3">Вход</h4>
            <form>
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Е-мейл</label>
                <input type="email" class="form-control" id="inputEmail" />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="inputPassword" />
              </div>
              <button type="submit" class="btn btn-primary mt-1 mb-3">Войти</button>
              <button type="button" class="btn mt-1 mb-3 mx-3">Создать аккаунт</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <h1 class="mt-5">Image section</h1>
        <div>
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.angled-gradient {
  background: linear-gradient(70deg, lightblue, pink);
}
.mw-600 {
  max-width: 600px;
}
</style>
