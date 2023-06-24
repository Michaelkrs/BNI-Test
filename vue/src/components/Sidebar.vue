<script>
export default {
  name: 'SidebarComponent'
}
</script>

<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; minHeight: 100vh; height: 100%">
    <div class="sticky-top">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img src="../../public/vue.png" alt="" height={25} />
        <span class="fs-4 ms-2" style="font-weight: bold;">
          Vue
        </span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <RouterLink to="/" style="text-decoration: none;" class="nav-link">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/add" style="text-decoration: none;" class="nav-link">
            Add User
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>