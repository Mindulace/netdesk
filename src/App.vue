<template>
    <div id="app">
        <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 2664 464">
                    <path id="Farbfüllung_1" data-name="Farbfüllung 1" class="cls-1" d="M394.711,454.639V239.621c0-89.591-28.385-157.68-134.833-157.68-53.223,0-81.609,25.085-101.479,53.754l2.129-46.587H0.857v365.53H160.528V275.457c0-35.836,3.548-63.072,36.9-63.072,34.063,0,37.611,27.236,37.611,63.072V454.639h159.67Zm0,0V239.621c0-89.591-28.385-157.68-134.833-157.68-53.223,0-81.609,25.085-101.479,53.754l2.129-46.587H0.857v365.53H160.528V275.457c0-35.836,3.548-63.072,36.9-63.072,34.063,0,37.611,27.236,37.611,63.072V454.639h159.67Z"/>
                    <path id="Farbfüllung_2" data-name="Farbfüllung 2" class="cls-1" d="M814.809,264.706c0-111.092-78.061-182.764-191.6-182.764s-205.8,65.222-205.8,190.648,88.706,190.649,203.668,190.649c115.673,0,165.348-48.02,183.089-62.355l-60.32-78.84c-31.934,21.5-70.964,28.669-99.35,28.669s-63.869-7.167-69.546-40.853H812.68S814.809,286.208,814.809,264.706ZM667.2,225.286H574.948c2.129-25.085,19.87-43,46.127-43C648.042,182.283,665.783,200.2,667.2,225.286Zm147.607,39.42c0-111.092-78.061-182.764-191.6-182.764s-205.8,65.222-205.8,190.648,88.706,190.649,203.668,190.649c115.673,0,165.348-48.02,183.089-62.355l-60.32-78.84c-31.934,21.5-70.964,28.669-99.35,28.669s-63.869-7.167-69.546-40.853H812.68S814.809,286.208,814.809,264.706ZM667.2,225.286H574.948c2.129-25.085,19.87-43,46.127-43C648.042,182.283,665.783,200.2,667.2,225.286Z"/>
                    <path id="Farbfüllung_3" data-name="Farbfüllung 3" class="cls-1" d="M1092.98,207.368V89.109h-74.51V-0.482H858.8V89.109H809.12V207.368H858.8v118.26c0,93.174,36.192,137.611,131.285,137.611a425.5,425.5,0,0,0,99.35-12.184l-7.1-123.277s-17.74,5.017-35.48,5.017-28.38-3.583-28.38-25.085V207.368h74.51Z"/>
                    <path id="Farbfüllung_4" data-name="Farbfüllung 4" class="cls-1" d="M1491.23,235.087c0-136.185-99.54-219.551-229.97-219.551H1130.21v439.1h131.05C1391.69,454.639,1491.23,371.273,1491.23,235.087Zm-62.37,0c0,101.185-69.31,166.1-167.6,166.1h-69.93V68.356h69.93C1359.55,68.356,1428.86,133.9,1428.86,235.087Z"/>
                    <path id="Farbfüllung_5" data-name="Farbfüllung 5" class="cls-1" d="M1809.42,454.639V402.455H1610.95V250.36h182.72V198.177H1610.95V67.083h193.43V15.536H1549.84v439.1h259.58Z"/>
                    <path id="Farbfüllung_6" data-name="Farbfüllung 6" class="cls-1" d="M2137.68,332.453c0-52.183-30.87-88.456-75.61-109.457l-80.01-33.728c-26.47-10.819-56.08-26.092-56.08-66.82s32.76-61.093,75.61-61.093,74.34,24.183,95.77,47.092l32.13-42c-11.97-12.728-53.56-56.638-124.75-56.638-69.31,0-139.87,38.819-139.87,117.095,0,51.546,27.09,86.547,71.82,107.548,16.38,8.273,46.63,20.364,69.31,29.273,22.05,8.91,70.56,26.728,70.56,72.548,0,46.456-37.8,73.82-85.05,73.82s-88.21-33.092-110.26-63l-35.92,41.365c20.8,24.182,64.27,73.82,140.51,73.82S2137.68,417.728,2137.68,332.453Z"/>
                    <path id="Farbfüllung_7" data-name="Farbfüllung 7" class="cls-1" d="M2520.13,454.639L2342.45,188.631l165.71-173.1h-74.35l-177.04,187.1V15.536h-61.12v439.1h61.12V280.27l44.73-45.819,144.28,220.188h74.35Z"/>
                    <path id="Farbfüllung_8" data-name="Farbfüllung 8" class="cls-1" d="M2657.15,400.884c0-38.7-27.67-61.638-66.7-61.638-39.75,0-67.42,22.935-67.42,61.638s27.67,61.639,67.42,61.639C2629.48,462.523,2657.15,439.587,2657.15,400.884Z"/>
                </svg> -->
                <img src="./assets/img/netdesk.png" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav col-2 justify-content-around">
                    <li class="nav-item d-lg-none">
                        <router-link v-ripple to="/" class="nav-link">
                            <i class="fas fa-home"></i>
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <router-link v-ripple to="/" class="nav-link rounded-circle">
                            <i class="fas fa-home"></i>
                        </router-link>
                    </li>
                    <li class="nav-item d-lg-none">
                        <router-link v-ripple to="/edit" class="nav-link">
                            <i class="far fa-edit"></i>
                            Edit
                        </router-link>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <router-link v-ripple to="/edit" class="nav-link rounded-circle">
                            <i class="far fa-edit"></i>
                        </router-link>
                    </li>
                    <li class="nav-item d-lg-none">
                        <router-link v-ripple to="/help" class="nav-link">
                            <i class="fas fa-question"></i>
                            Help
                        </router-link>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <router-link v-ripple to="/help" class="nav-link rounded-circle">
                            <i class="fas fa-question"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

#app {
    font-family: 'Manrope', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f3f3f3;
    margin-top: 30px;
}

body {
    margin: 15px;
    background: #333333;
}

#nav {
    padding: 30px;
}

.nav-link {
    min-width: 40px;
    min-height: 40px;
    transition: background-color 0.2s;
    text-align: center;
}

.router-link-exact-active {
    color: #000 !important;
}

.nav-link:hover {
    background-color: lightgray;
}

.cls-1 {
    fill-rule: evenodd;
    fill: #000
}
#Farbfüllung_1,#Farbfüllung_2,#Farbfüllung_3 {
    transition: fill 0.1s ease-in-out;
}
#Farbfüllung_1:hover {
    fill: #ff0000
}
#Farbfüllung_2:hover {
    fill: #ff0000
}
#Farbfüllung_3:hover {
    fill: #ff0000
}

.component {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 3px 5px 6px #dadada;
}

.component:hover {
    transform: translateY(-1%);
    box-shadow: 7px 6px 9px #dadada;
}
</style>