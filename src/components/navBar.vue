<template>
  <b-navbar toggleable="md" type="dark" id="menu-principal">
    <b-row style="width: 100%;margin-left:0%">
      <b-col lg="8" style="text-align: left">
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
            <span class="flagLanguage flagLanguage-es" title="ES" v-on:click="changeLang('es')"></span>
            <span class="flagLanguage flagLanguage-en" title="EN" v-on:click="changeLang('en')"></span>
            <span class="flagLanguage flagLanguage-fr" title="FR" v-on:click="changeLang('fr')"></span>
          <a href="ayuda/index.html" target="_blank" class="margin-nav" >
            <span class="fas fa-question-circle"></span>
            {{ $t('lbl_ayuda') }}
          </a>
          <a to="/home" class="margin-nav">
            <span class="fas fa-info-circle"></span>
            {{ $t('lbl_novedades') }}
          </a>
          <a href="#" data-target="#modalSoporte" data-toggle="modal" class="margin-nav">
            <span class="fas fa-headphones-alt">
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
        <a class="" href="#">
          <img class="logo" src="../assets/img/decameronB.svg">
        </a>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="">
            <b-nav-item href="/">{{ $t('lbl_inicio') }}</b-nav-item>
          <b-nav-item-dropdown :text="$t(route.title)" v-for="route in rutas" :key="route.name">
            <ul class="nav navbar-nav text-rignt">

            <b-dropdown-item :to="routeInt.url" v-for="routeInt in route.children" :key="routeInt.children">{{ $t(routeInt.title) }}</b-dropdown-item>
            </ul>
          </b-nav-item-dropdown>
          <!-- Right aligned nav items -->
          </b-navbar-nav>
        </b-collapse>
      </b-col>
    </b-row>
  </b-navbar>
</template>
<script>
import i18next from 'i18next'
export default {
  name: 'navbarComponet',
  data () {
    return {
      rutas: [
        {
          title: 'MNU_TIP_AVION',
          children: [
            {
              title: 'MNU_LOG_APAACC',
              url: '/about'
            },
            {
              title: 'mnu_tablas',
              url: '/home'
            }
          ]
        },
        {
          title: 'MNU_RECEPTIVO',
          children: [
            {
              title: 'mnu_vuelos',
              url: '/'
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeLang: function (Idiom) {
      i18next.changeLanguage(Idiom, (err, t) => {
        if (err) return console.log('something went wrong loading', err)
        t('key') // -> same as i18next.t
      })
    }
  }
}
</script>
<style>
#menu-principal .navbar-nav li a:hover,
#menu-principal .navbar-nav li a:focus,
#menu-principal .navbar-nav li a:active,
#menu-principal .navbar-nav li.active .dropdown .mega-dropdown.open a.dropdown-toggle:hover,
#menu-principal .navbar-nav li.active .dropdown .mega-dropdown ul.dropdown-menu .mega-dropdown-menu a:hover {
    background: white !important;
}

</style>
