<script setup></script>

<template>
  <div class="container-fluid angled-gradient">
    <div class="row min-vh-100">
      <div class="col-sm-6 p-sm-5 p-4">
        <div class="card mw-600">
          <div class="card-body p-sm-5 p-4">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <!--<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
            <!--<a href="#" class="card-link">Card link</a>-->
            <!--<a href="#" class="card-link">Another link</a>-->
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
