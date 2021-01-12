<template>
    <v-container>
        <h2 class="selected-types"> Selected Types: </h2>
        <div id="types-names">
            <div data-v-5bbe639e="" class="row justify-content-center">
                <div data-v-5bbe639e="" class="type col-md-6 col-12">
                    <div data-v-5bbe639e="" class="row justify-center justify-md-start">
                        <div data-v-5bbe639e="" class="col col-auto">
                            <p :class="this.$store.state.type1.toLowerCase()" class="transparent type-text">Type 1: {{" "}} {{this.$store.state.type1}}</p>
                        </div>
                    </div>
                </div>
                <div data-v-5bbe639e="" class="type col-md-6 col-12">
                    <div data-v-5bbe639e="" class="row justify-center justify-md-start">
                        <div data-v-5bbe639e="" class="col col-auto">
                            <p :class="this.$store.state.type2.toLowerCase()" class="transparent type-text">Type 2: {{" "}} {{this.$store.state.type2}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "SelectedTypes",
    methods: {
        onClick() {
            this.type1 = this.$store.state.type1.toString().toLowerCase();
            this.type2 = this.$store.state.type2.toString().toLowerCase();
        }
    },
    data: () => ({
        type1: 'none',
        type2: 'none',
    }),
}
</script>

<style scoped>
#types-names {
    width: 100%;
}

.type-text {
    text-align: center;
}

.selected-types {
    margin-bottom: 1em;
}

.type {
    color: white;
    font-size: 2em;
    text-shadow: 3px 3px #000000;
    width: 50%;
}

.types {
    margin-left: 5em;
}

.transparent {
    background-color: transparent !important;
}

/*Color styles for the selected types*/
.bug {
    color: #C0E11D;
}

.dark {
    color: #51453C;
}

.dragon {
    color: #6200EA;
}

.electric {
    color: #FFFF00;
}

.fairy {
    color: #FF6FDE;
}

.fighting {
    color: #C03028;
}

.fire {
    color: #FF6D00;
}

.flying {
    color: #9FA8DA;
}

.ghost {
    color: #9575CD;
}

.grass {
    color: #00D12F;
}

.ground {
    color: #C4A96A;
}

.ice {
    color: #18FFFF;
}

.normal {
    color: #EFEBE9;
}

.poison {
    color: #AA00FF;
}

.psychic {
    color: #FF00C5;
}

.rock {
    color: #A8814C;
}

.steel {
    color: #9E9E9E;
}

.water {
    color: #304FFE;
}

@media only screen and (max-width: 380px) {
    .types {
        margin-left: 0.1em;
    }
}
</style>
