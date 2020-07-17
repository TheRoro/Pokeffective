<template>
    <v-container class="main-container">
        <h2 class="types-result" v-if="this.$store.state.effects.length">Types Result:</h2>
        <div v-if="this.$store.state.immunities.length" class="type-title">
            Immunities:
        </div>
        <v-row class="types">
            <v-col cols="12" sm="6" v-for="type in this.$store.state.immunities" :key="type" :class="type.toLowerCase()" class="transparent type">
                {{" " + type }}
            </v-col>
        </v-row>
        <div v-if="this.$store.state.resistances025.length" class="type-title">
            Resistances x0.25:
        </div>
        <v-row class="types">
            <v-col cols="12" sm="6" v-for="type in this.$store.state.resistances025" :key="type" :class="type.toLowerCase()" class="transparent type">
               {{" " + type }}
            </v-col>
        </v-row>
        <div v-if="this.$store.state.resistances050.length" class="type-title">
            Resistances x0.5:
        </div>
        <v-row class="types">
            <v-col cols="12" sm="6" v-for="type in this.$store.state.resistances050" :key="type" :class="type.toLowerCase()" class="transparent type">
                {{" " + type }}
            </v-col>
        </v-row>
        <div v-if="this.$store.state.normalDamage.length" class="type-title">
            Normal Damage:
        </div>
        <v-row class="types">
            <v-col cols="12" sm="6" v-for="type in this.$store.state.normalDamage" :key="type" :class="type.toLowerCase()" class="transparent type">
                {{" " + type }}
            </v-col>
        </v-row>
        <div v-if="this.$store.state.effective2.length" class="type-title">
            Super Effective x2:
        </div>
        <v-row class="types">
            <v-col cols="12" sm="6" v-for="type in this.$store.state.effective2" :key="type" :class="type.toLowerCase()" class="transparent type">
                {{" " + type }}
            </v-col>
        </v-row>
        <div v-if="this.$store.state.effective4.length" class="type-title">
            Super Effective x4:
        </div>
        <v-row class="types">
            <v-col cols="12" sm="6" v-for="type in this.$store.state.effective4" :key="type" :class="type.toLowerCase()" class="transparent type">
                {{" " + type }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "TypesResult",
        data: () =>({
            typeChart: [],
            types: [],
            size1: 6,
        }),
    }
</script>

<style scoped>
    .types-result{
        margin-bottom: 1.5em;
    }
    .types{
        margin-left: 5em;
    }
    .type-title{
        font-size: 1.5em;
    }
    .type{
        font-size: 2em;
    }
    /*Color styles for the types results*/
    .bug{
        color: #C0E11D;
    }
    .dark{
        color: #51453C;
    }
    .dragon{
        color: #6200EA;
    }
    .electric{
        color: #FFFF00;
    }
    .fairy{
        color: #FF6FDE;
    }
    .fighting{
        color: #C03028;
    }
    .fire{
        color: #FF6D00;
    }
    .flying{
        color: #9FA8DA;
    }
    .ghost{
        color: #9575CD;
    }
    .grass{
        color: #00D12F;
    }
    .ground{
        color: #C4A96A;
    }
    .ice{
        color: #18FFFF;
    }
    .normal{
        color: #EFEBE9;
    }
    .poison{
        color: #AA00FF;
    }
    .psychic{
        color: #FF00C5;
    }
    .rock{
        color: #A8814C;
    }
    .steel{
        color: #9E9E9E;
    }
    .water{
        color: #304FFE;
    }
    @media only screen and (max-width: 380px) {
        .types{
            margin-left: 1em;
        }
    }
</style>
