<template>
    <v-container>
        <h2 class="app-subtitle">Pokemon Types:</h2>
        <div class="type-buttons">
        <v-btn height="3.5em" class="btn-type" color="#C0E11D" @click="setType('Bug', 0)">Bug</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#51453C" @click="setType('Dark', 1)">Dark</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#6200EA" @click="setType('Dragon', 2)">Dragon</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#FFFF00" @click="setType('Electric', 3)">Electric</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#FF6FDE" @click="setType('Fairy', 4)">Fairy</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#C03028" @click="setType('Fighting', 5)">Fighting</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#FF6D00" @click="setType('Fire', 6)">Fire</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#9FA8DA" @click="setType('Flying', 7)">Flying</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#9575CD" @click="setType('Ghost', 8)">Ghost</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#00D12F" @click="setType('Grass', 9)">Grass</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#C4A96A" @click="setType('Ground', 10)">Ground</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#18FFFF" @click="setType('Ice', 11)">Ice</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#EFEBE9" @click="setType('Normal', 12)">Normal</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#AA00FF" @click="setType('Poison', 13)">Poison</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#FF00C5" @click="setType('Psychic', 14)">Psychic</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#A8814C" @click="setType('Rock', 15)">Rock</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#9E9E9E" @click="setType('Steel', 16)">Steel</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#304FFE" @click="setType('Water', 17)">Water</v-btn>
        <v-btn height="3.5em" class="btn-type" color="#68A090" @click="resetType">???</v-btn>
        <v-btn height="3.5em" class="btn-type color-splash" @click="colorSplash">???</v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "TypesTable",
        methods:{
            setType(newType, indexType){
                this.$store.commit('setType', newType);
                this.$store.commit('setIndex', indexType);
                this.calculate();
            },
            resetType(){
                this.$store.commit('resetType', 'Default');
                this.$store.commit('resetEffects');
                this.$store.commit('resetTypesList');
            },
            colorSplash(){
                this.$store.commit('colorSplash');
            },
            calculate(){
                this.$store.commit('resetEffects');
                this.$store.commit('resetTypesList');

                if(this.$store.state.index2 === null){
                    for(let i = 0; i < 18; i++){
                        this.$store.commit('addEffect', this.typeChart[i][this.$store.state.index1]/2);
                    }
                    this.$store.commit('addTypesList', this.typeList);

                }
                else{
                    this.$store.commit('resetEffects');
                    this.$store.commit('resetTypesList');

                    for(let i = 0; i < 18; i++){
                        this.$store.commit('addEffect', this.typeChart[i][this.$store.state.index1]*this.typeChart[i][this.$store.state.index2]/4);
                    }
                    this.$store.commit('addTypesList', this.typeList);

                }
            }
        },
        created(){
            this.typeChart = [
                /*bug*/
                [2,4,2,2,1,1,1,1,1,4,2,2,2,1,4,2,1,2],
                /*dark*/
                [2,1,2,2,1,1,2,2,4,2,2,2,2,2,4,2,2,2],
                /*dragon*/
                [2,2,4,2,0,2,2,2,2,2,2,2,2,2,2,2,1,2],
                /*electric*/
                [2,2,1,1,2,2,2,4,2,1,0,2,2,2,2,2,2,4],
                /*fairy*/
                [2,4,4,2,2,4,1,2,2,2,2,2,2,1,2,2,1,2],
                /*fighting*/
                [1,4,2,2,1,2,2,1,0,2,2,4,4,1,1,4,4,2],
                /*fire*/
                [4,2,1,2,2,2,1,2,2,4,2,4,2,2,2,1,4,1],
                /*flying*/
                [4,2,2,1,2,4,2,2,2,4,2,2,2,2,2,1,1,2],
                /*ghost*/
                [2,1,2,2,2,2,2,2,4,2,2,2,0,2,4,2,2,2],
                /*grass*/
                [1,2,1,2,2,2,1,1,2,1,4,2,2,1,2,4,1,4],
                /*ground*/
                [1,2,2,4,2,2,4,0,2,1,2,2,2,4,2,4,4,2],
                /*ice*/
                [2,2,4,2,2,2,1,4,2,4,4,1,2,2,2,2,1,1],
                /*normal*/
                [2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,1,1,2],
                /*poison*/
                [2,2,2,2,4,2,2,2,1,4,1,2,2,1,2,1,0,2],
                /*psychic*/
                [2,0,2,2,2,4,2,2,2,2,2,2,2,4,1,2,1,2],
                /*rock*/
                [4,2,2,2,2,1,4,4,2,2,1,4,2,2,2,2,1,2],
                /*steel*/
                [2,2,2,1,4,2,1,2,2,2,2,4,2,2,2,4,1,1],
                /*water*/
                [2,2,1,2,2,2,4,2,2,1,4,2,2,2,2,4,2,1]
            ];
            this.typeList = ['BUG', 'DARK', "DRAGON", "ELECTRIC", "FAIRY", "FIGHTING", "FIRE", "FLYING", "GHOST", "GRASS", "GROUND", "ICE", "NORMAL", "POISON", 'PSYCHIC', "ROCK", "STEEL", "WATER"];
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');

    .btn-type{
        width: 9em;
        margin-left: 0.5em;
        margin-right: 0.5em;
        margin-bottom: 1.5em;
        font-weight: 800;
    }
    .app-subtitle{
        margin-bottom: 1.5em;
    }
    .color-splash{
        background: rgb(203,23,23);
        background: linear-gradient(90deg, rgba(203,23,23,1) 0%, rgba(203,197,23,1) 18%, rgba(25,203,23,1) 32%, rgba(23,191,203,1) 51%, rgba(23,43,203,1) 70%, rgba(142,23,203,1) 86%);
    }
    @media only screen and (max-width: 600px) {
        .type-buttons{
            margin-left: 4em;
        }
    }
    @media only screen and (max-width: 380px) {
        .type-buttons{
            margin-left: 1.5em;
        }
    }
</style>
