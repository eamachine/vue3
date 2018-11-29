<template>
    <nav class="navbar navbar-default navbar-fixed-top" id="menu-principal">
            <div class="col-md-8 col-xs-12" style="text-align: left;">
                <h6>
                    <span class="txt-white">
                        {{ $t('lbl_bienvenido') }}<span class="fas fa-user"></span> nombreUsuario
                    </span>
                    <span class="text-warning" style="color:#fbe04C !important;">
                        <a style="color:#fbe04C !important; cursor: pointer;"><b> {{ $t('agencia') }} </b></a>
                    </span>

                    <span class="txt-white float-right" >
                        <strong>
                        AMBIENTE PRUEBAS
                        </strong>
                    </span>
                </h6>
            </div>
            <div class="col-lg-4 col-xs-12 text-right" id="menu-derecho">
                <h6>
                    <span class="flagLanguage flagLanguageCurrent flagLanguage-es" title="ES"></span>
                        <a style="cursor: pointer;" class="btn-flag-change-idi" title="ES">
                            <span class="flagLanguage flagLanguage-en"></span>
                        </a>
                    <a href="ayuda/index.html" target="_blank" class="margin-nav">
                        <span class="fas fa-question-circle"></span>{{ $t('lbl_ayuda') }}
                    </a>
                    <a href="acceso/menu.php" target="iframe01" class="margin-nav">
                        <span class="fas fa-info-circle"></span> {{ $t('lbl_novedades') }}
                    </a>
                    <a href="#" data-target="#modalSoporte" data-toggle="modal" class="margin-nav">
                        <span class="fas fa-headphones-alt"><i c></i></span> {{ $t('lbl_soporte') }}
                    </a>
                    <a href="acceso/login_intro.php?logout=true" class="margin-nav txt-white-hd-md">
                        <span class="far fa-times-circle"></span> {{ $t('lbl_salir') }}
                    </a>
                </h6>
            </div>
        <div>
            <div class="container-fluid">
                <!--Brand and toggle get grouped for better mobile display-->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-principal" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand pull-right" href="#"><img class="logo" src="static/img/decameronB.svg"></a>
                </div>

                <!--Collect the nav links, forms, and other content for toggling-->
                <div class="mega-menu-container">

                    <div class="collapse navbar-collapse" id="menu-principal">
                        <ul class="nav navbar-nav text-rignt">
                            <li class="active">
                                <a id='InicioHW' href="#">{{ $t('lbl_inicio') }}</a>
                            </li>
                                <li class="dropdown mega-dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">prueba</a>
                                </li>
                        </ul>
                    </div> <!--/.navbar-collapse -->
                </div>
            </div> <!--/.container-fluid -->
        </div>
    </nav>
</template>
<style>
section .panel-body h6 {
    color: #878787;
    /*font-size: 12px;*/
    font-size: 20px;
    font-weight: normal;
}
section .panel-body .box-blanco h6{
    /*font-size: 12px;*/
    font-size: 20px;
    font-weight: bold;
    color: #004795;
}

section .panel-body .box-azul h6{
    /*font-size: 12px;*/
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
}
.bg-azul-osc{
    background-color:#013171;
    padding: 0px;
}
.txt-white{
    color: #ffffff;
}
.txt-azul-light{
    color: #ffffff;
}
#menu-derecho{
    float: right;
}
#menu-derecho a:hover {
    color: #ffffff;
    text-decoration: underline;
}
#menu-derecho a {
    color: #ffffff;
    font-size: 12px;
}
#menu-principal.navbar-default.nav-background-solid{
    background:rgba(70, 158, 195, 1);
    border:0px;
}
#menu-principal.navbar-default {
    background-image: -webkit-linear-gradient(top,rgba(70, 158, 195, 1) 0,rgba(70, 158, 195, 1) 100%);
    background-image: -o-linear-gradient(top,#fff 0,#f8f8f8 100%);
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(70, 158, 195, 1)),to(70, 158, 195, 1));
    background-image: linear-gradient(to bottom,rgba(70, 158, 195, 1) 0,rgba(70, 158, 195, 1) 80%,rgba(70, 158, 195, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff8f8f8', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    border-radius: 0px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 5px rgba(1,49,113,.075);
    border-bottom-color: rgba(70, 158, 195, 1);
    background-color: rgba(70, 158, 195, 1);
    transition: background 1s;
}

.flagLanguage  {
    display: inline-block;
    width: 17px;
    height: 15px;
    text-align: center;
    color: rgb(255,255,255,.4);
    /*border: 1px solid rgb(255,255,255,.4);*/
    font-size: 14px;
}
.flagLanguage:hover {
    color: rgb(255,255,255);
    border-bottom: 1px solid white;
}
.flagLanguage.flagLanguage-es {
    /*background: url('../img/iconos/es-flag.png') no-repeat;*/
    background-size: 16px 11px;
}
.flagLanguage.flagLanguage-es:before {
    content: "ES";
}
.flagLanguage.flagLanguage-esp {
    /*background: url('../img/iconos/es-flag.png') no-repeat;*/
    background-size: 16px 11px;
}
.flagLanguage.flagLanguage-esp:before {
    content: "ES";
}
.flagLanguage.flagLanguage-fr {
    /*background: url('../img/iconos/fr-flag.png') no-repeat;*/
    background-size: 16px 11px;
}

.flagLanguage.flagLanguage-fr:before {
    content: "FR";
}
.flagLanguage.flagLanguage-fra {
    /*background: url('../img/iconos/fr-flag.png') no-repeat;*/
    background-size: 16px 11px;
}

.flagLanguage.flagLanguage-fra:before {
    content: "FR";
}
.flagLanguage.flagLanguage-pg {
    /*background: url('../img/iconos/pt-flag.png') no-repeat;*/
    background-size: 16px 11px;
}
.flagLanguage.flagLanguage-pg:before {
    content: "PT";
}
.flagLanguage.flagLanguage-pt {
    /*background: url('../img/iconos/pt-flag.png') no-repeat;*/
    background-size: 16px 11px;
}
.flagLanguage.flagLanguage-pt:before {
    content: "PT";
}
.flagLanguage.flagLanguage-ing {
    /*background: url('../img/iconos/en-flag.png') no-repeat;*/
    background-size: 16px 11px;
}
.flagLanguage.flagLanguage-ing:before {
    content: "EN";
}
.flagLanguage.flagLanguage-en {
    /*background: url('../img/iconos/en-flag.png') no-repeat;*/
    background-size: 16px 11px;
}
.flagLanguage.flagLanguage-en:before {
    content: "EN";
}
.flagLanguage.flagLanguageCurrent{
    /*border-bottom: 1px solid white;*/
    /*border-radius: 2px;*/
    color: white;
}
</style>
