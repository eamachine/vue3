<template>
  <b-navbar toggleable="md" type="dark" id="menu-principal">
    <b-row style="width: 110%;">
      <b-col lg="8" style="text-align: left;">
        <h6>
          <span class="txt-white">
            {{ $t('lbl_bienvenido') }}
            <span class="fas fa-user"></span> nombreUsuario
          </span>
          <span class="text-warning" style="color:#fbe04C !important;">
            <a style="color:#fbe04C !important; cursor: pointer;">
              <b>{{ $t('agencia') }}</b>
            </a>
          </span>
          <span class="txt-white float-right">
            <strong>AMBIENTE PRUEBAS</strong>
          </span>
        </h6>
      </b-col>
      <b-col lg="4" class="text-right" id="menu-derecho">
        <h6>
          <span class="flagLanguage flagLanguageCurrent flagLanguage-es" title="ES"></span>
          <a style="cursor: pointer;" class="btn-flag-change-idi" title="ES">
            <span class="flagLanguage flagLanguage-en"></span>
          </a>
          <a style="cursor: pointer;" class="btn-flag-change-idi" title="ES">
            <span class="flagLanguage flagLanguage-fr"></span>
          </a>
          <a href="ayuda/index.html" target="_blank" class="margin-nav">
            <span class="fas fa-question-circle"></span>
            {{ $t('lbl_ayuda') }}
          </a>
          <a href="acceso/menu.php" target="iframe01" class="margin-nav">
            <span class="fas fa-info-circle"></span>
            {{ $t('lbl_novedades') }}
          </a>
          <a href="#" data-target="#modalSoporte" data-toggle="modal" class="margin-nav">
            <span class="fas fa-headphones-alt">
              <i c></i>
            </span>
            {{ $t('lbl_soporte') }}
          </a>
          <a href="acceso/login_intro.php?logout=true" class="margin-nav txt-white-hd-md">
            <span class="far fa-times-circle"></span>
            {{ $t('lbl_salir') }}
          </a>
        </h6>
      </b-col>
      <b-col style="display: -webkit-inline-box;" class="mega-menu-container">
        <a class="navbar-brand pull-right" href="/" >
          <img class="logo" src="/assets/img/decameronB.svg">
        </a>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <!-- <b-navbar-nav v-for="route in rutas" :key=" route.name">
        <b-nav-item :to="route">{{ route.title }}<i class="fas fa-angle-right"></i></b-nav-item>
          </b-navbar-nav>-->
          <b-nav-item-dropdown :text="$t(route.title)" v-for="route in rutas" :key="route.name">
            <b-dropdown-item :to="routeInt.url" v-for="routeInt in route.children" :key="routeInt.children">{{ $t(routeInt.title) }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"></b-navbar-nav>
        </b-collapse>
      </b-col>
    </b-row>
  </b-navbar>
</template>
<script>
export default {
  name: 'navbarComponet',
  data () {
    return {
      rutas: [
        {
          name: 'inicio',
          title: 'lbl_inicio',
          children: [
            {
              name: 'pruebainterna',
              title: 'mnu_tablas',
              url: '/home'
            },
            {
              name: 'pruebainterna',
              title: 'mnu_factura'
            }
          ]
        },
        {
          title: 'MNU_TIP_AVION',
          children: [
            {
              name: 'pruebaMenu1',
              title: 'MNU_LOG_APAACC',
              url: '/about'
            }
          ]
        },
        {
          title: 'MNU_RECEPTIVO',
          children: [
            {
              name: 'home',
              title: 'mnu_vuelos'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style>
header #menu-principal .navbar-nav li a:hover,
header #menu-principal .navbar-nav li a:focus,
header #menu-principal .navbar-nav li a:active,
header #menu-principal .navbar-nav li.active .dropdown .mega-dropdown.open a.dropdown-toggle:hover,
header #menu-principal .navbar-nav li.active .dropdown .mega-dropdown ul.dropdown-menu .mega-dropdown-menu a:hover {
    background: white !important;
}

</style>
