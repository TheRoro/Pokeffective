<template>
    <v-container>
        <div class="row justify-content">
            <div class="col-sm-12 col-md-6 col-12">
                <div class="row justify-center justify-md-start">
                    <div class="col col-auto">
                        <p class="linkto">
                            <a class="linkto" href="https://github.com/8rb" target="_blank" rel="noreferrer">Developed by: Rodrigo Ramirez</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-12">
                <div class="row justify-center justify-md-end">
                    <div class="col col-auto">
                        <a class="linkto" href="https://pokeapp.onrender.com/" target="_blank" rel="noreferrer">Latest Version</a>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "Contact",
    }
</script>

<style scoped lang="scss">
    .linkto {
        text-align: center;
        color: #fff!important;
        text-decoration: none;
        margin: 0px;
        &:hover {
            opacity: 0.7;
        }
    }
    /* a{
        color: #fff!important;
        text-decoration: none;
        &:hover {
            opacity: 0.7;
        }
    } */
</style>