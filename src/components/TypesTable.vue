<template>
<v-container>
    <h2 class="app-subtitle">Pokemon Types:</h2>
    <div class="row justify-content-center">
        <div class="col mb-0 pb-0 div-btn" xs="auto" md="1.5" v-for="item in buttons" :key="item[0]">
            <div class="row justify-center">
                <div class="ma-1 pa-0 col col-auto">
                    <v-btn height="3.5em" class="btn-type" :color=item[1] @click="setType(item[2], item[0])">{{item[2]}}</v-btn>
                </div>
            </div>
        </div>
        <div class="col mb-0 pb-0 div-btn" xs="auto" md="1.5">
            <div class="row justify-center">
                <div class="ma-1 pa-0 col col-auto">
                    <v-btn height="3.5em" class="btn-type" color="#68A090" @click="resetType">RESET</v-btn>
                </div>
            </div>
        </div>
        <div class="col mb-0 pb-0 div-btn" xs="auto" md="1.5">
            <div class="row justify-center">
                <div class="ma-1 pa-0 col col-auto">
                    <v-btn height="3.5em" class="btn-type color-splash" @click="colorSplash">???</v-btn>
                </div>
            </div>
        </div>
    </div>
</v-container>
</template>

<script>
export default {
    name: "TypesTable",
    data: () => ({
        buttons: [
            [0, '#C0E11D', 'Bug'],
            [1, '#51453C', 'Dark'],
            [2, '#6200EA', 'Dragon'],
            [3, '#FFFF00', 'Electric'],
            [4, '#FF6FDE', 'Fairy'],
            [5, '#C03028', 'Fighting'],
            [6, '#FF6D00', 'Fire'],
            [7, '#9FA8DA', 'Flying'],
            [8, '#9575CD', 'Ghost'],
            [9, '#00D12F', 'Grass'],
            [10, '#C4A96A', 'Ground'],
            [11, '#18FFFF', 'Ice'],
            [12, '#EFEBE9', 'Normal'],
            [13, '#AA00FF', 'Poison'],
            [14, '#FF00C5', 'Psychic'],
            [15, '#A8814C', 'Rock'],
            [16, '#9E9E9E', 'Steel'],
            [17, '#304FFE', 'Water']
        ]
    }),
    methods: {
        setType(newType, indexType) {
            this.$store.commit('setType', newType);
            this.$store.commit('setIndex', indexType);
            this.calculate();
        },
        resetType() {
            this.$store.commit('resetType', 'Default');
            this.$store.commit('resetEffects');
            this.$store.commit('resetTypesList');
        },
        colorSplash() {
            this.$store.commit('colorSplash');
        },
        calculate() {
            this.$store.commit('resetEffects');
            this.$store.commit('resetTypesList');

            if (this.$store.state.index2 === null) {
                for (let i = 0; i < 18; i++) {
                    this.$store.commit('addEffect', this.typeChart[i][this.$store.state.index1] / 2);
                }
                this.$store.commit('addTypesList', this.typeList);

            } else {
                this.$store.commit('resetEffects');
                this.$store.commit('resetTypesList');

                for (let i = 0; i < 18; i++) {
                    this.$store.commit('addEffect', this.typeChart[i][this.$store.state.index1] * this.typeChart[i][this.$store.state.index2] / 4);
                }
                this.$store.commit('addTypesList', this.typeList);

            }
        }
    },
    created() {
        this.typeChart = [
            /*bug*/
            [2, 4, 2, 2, 1, 1, 1, 1, 1, 4, 2, 2, 2, 1, 4, 2, 1, 2],
            /*dark*/
            [2, 1, 2, 2, 1, 1, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2],
            /*dragon*/
            [2, 2, 4, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
            /*electric*/
            [2, 2, 1, 1, 2, 2, 2, 4, 2, 1, 0, 2, 2, 2, 2, 2, 2, 4],
            /*fairy*/
            [2, 4, 4, 2, 2, 4, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2],
            /*fighting*/
            [1, 4, 2, 2, 1, 2, 2, 1, 0, 2, 2, 4, 4, 1, 1, 4, 4, 2],
            /*fire*/
            [4, 2, 1, 2, 2, 2, 1, 2, 2, 4, 2, 4, 2, 2, 2, 1, 4, 1],
            /*flying*/
            [4, 2, 2, 1, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 1, 2],
            /*ghost*/
            [2, 1, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 0, 2, 4, 2, 2, 2],
            /*grass*/
            [1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 1, 2, 4, 1, 4],
            /*ground*/
            [1, 2, 2, 4, 2, 2, 4, 0, 2, 1, 2, 2, 2, 4, 2, 4, 4, 2],
            /*ice*/
            [2, 2, 4, 2, 2, 2, 1, 4, 2, 4, 4, 1, 2, 2, 2, 2, 1, 1],
            /*normal*/
            [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 1, 1, 2],
            /*poison*/
            [2, 2, 2, 2, 4, 2, 2, 2, 1, 4, 1, 2, 2, 1, 2, 1, 0, 2],
            /*psychic*/
            [2, 0, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 1, 2, 1, 2],
            /*rock*/
            [4, 2, 2, 2, 2, 1, 4, 4, 2, 2, 1, 4, 2, 2, 2, 2, 1, 2],
            /*steel*/
            [2, 2, 2, 1, 4, 2, 1, 2, 2, 2, 2, 4, 2, 2, 2, 4, 1, 1],
            /*water*/
            [2, 2, 1, 2, 2, 2, 4, 2, 2, 1, 4, 2, 2, 2, 2, 4, 2, 1]
        ];
        this.typeList = ['BUG', 'DARK', "DRAGON", "ELECTRIC", "FAIRY", "FIGHTING", "FIRE", "FLYING", "GHOST", "GRASS", "GROUND", "ICE", "NORMAL", "POISON", 'PSYCHIC', "ROCK", "STEEL", "WATER"];
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');

 .div-btn {
    @media only screen and (max-width: 1904px) {
        max-width: 12.5%;
    }
    @media only screen and (min-width: 1904px) {
        max-width: 7.69%;
    }
    @media only screen and (max-width: 1263px) {
        max-width: 16.6666%;
    }
    @media only screen and (max-width: 965px) {
        max-width: 14.285%;
    }
    @media only screen and (max-width: 937px) {
        max-width: 16.6666%;
    }
    @media only screen and (max-width: 803px) {
        max-width: 20%;
    }
    @media only screen and (max-width: 669px) {
        max-width: 25%;
    }
    @media only screen and (max-width: 535px) {
        max-width: 33.333333%;
    }
    @media only screen and (max-width: 401px) {
        max-width: 50%;
    }
    @media only screen and (max-width: 273px) {
        max-width: 100%;
    }
 }

.btn-type {
    width: 9em;
    /* margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 1.5em; */
    font-weight: 800;
}

.app-subtitle {
    margin-bottom: 0.5em;
}

.color-splash {
    background: rgb(203, 23, 23);
    background: linear-gradient(90deg, rgba(203, 23, 23, 1) 0%, rgba(203, 197, 23, 1) 18%, rgba(25, 203, 23, 1) 32%, rgba(23, 191, 203, 1) 51%, rgba(23, 43, 203, 1) 70%, rgba(142, 23, 203, 1) 86%);
}

@media only screen and (max-width: 600px) {
    .type-buttons {
        margin-left: 4em;
    }
}

@media only screen and (max-width: 380px) {
    .type-buttons {
        margin-left: 1.5em;
    }
}
</style>
