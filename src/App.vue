<script setup></script>

<template>
  <div class="container-fluid angled-gradient">
    <div class="row min-vh-100">
      <div class="col-sm-6 p-sm-3 p-2 text-center">
        <div class="card mw-600">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6 text-center">
        <h1 class="mt-5">Image section</h1>
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
