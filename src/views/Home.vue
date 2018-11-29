<template>
  <div class="home">
    <b-card class="text-center" title="Creacion de clientes">
    </b-card>
    <b-card class="text-center">
    <b-row>
      <b-col md="3">
        <label for="nombre">Nombre</label>
        <b-form-input v-model="name"  type="text"  placeholder="Nombre" text="Nombre"></b-form-input>
      </b-col>
    </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      name: ''
    }
  }
}
</script>
