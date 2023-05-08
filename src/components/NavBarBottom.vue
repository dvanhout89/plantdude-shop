<!-- <template>
  <nav class="fixed-bottom nav-bottom">
    <div class="container nav-container">
      <div class="nav-item">
        <RouterLink to="/products"><button type="button" class="btn nav-buttons">🛍️</button></RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/cart"><button type="button" class="btn nav-buttons">🛒</button></RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/orders"><button type="button" class="btn nav-buttons">📦</button></RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-bottom {
  background: #1D3329;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.nav-buttons {
  background: #B28F3E;
  margin: 5px;
  padding: 10px;
  width: 110px;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 auto;
}
</style> -->


<template>
  <nav class="fixed-bottom nav-bottom">
    <div class="container nav-container">
      <div class="nav-item">
        <RouterLink to="/products" active-class="active-link">
          <button type="button" class="btn nav-buttons">🛍️</button>
        </RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/cart" active-class="active-link">
          <button type="button" class="btn nav-buttons">🛒</button>
        </RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/orders" active-class="active-link">
          <button type="button" class="btn nav-buttons">📦</button>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-bottom {
  background: #1D3329;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.nav-buttons {
  background: #B28F3E;
  margin: 5px;
  padding: 10px;
  width: 110px;
}

.nav-container {
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 auto;
}

.active-link .nav-buttons {
  background: white;
}
</style>
