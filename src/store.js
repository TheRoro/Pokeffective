import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        type1: '',
        type2: '',
        index1: null,
        index2: null,
        lastType: 'Default',
        colorSplash: false,
        effects: [],
        immunities: [],
        resistances025: [],
        resistances050: [],
        normalDamage: [],
        effective2: [],
        effective4: [],
    },
    mutations: {
        setType(state, type){
          if(state.type1 === ''){
              state.type1 = type;
              if(state.colorSplash){
                  state.lastType = type;
              }
          }
          else if(state.type2 === '' && state.type1 !== type){
              state.type2 = type;
              if(state.colorSplash){
                  state.lastType = type;
              }
          }
          else{
              state.type1 = type;
              if(state.colorSplash){
                  state.lastType = type;
              }
              state.type2 = '';
          }
        },
        setIndex(state, index){
            if(state.index1 === null){
                state.index1 = index;
            }
            else if(state.index2 === null && state.index1 !== index){
                state.index2 = index;
            }
            else{
                state.index1 = index;
                state.index2 = null;
            }
        },
        addEffect(state, effect){
            this.state.effects.push(effect);
        },
        addTypesList(state, types){
            for(let i = 0; i < 18; i++) {
                if (state.effects[i] === 0) {
                    state.immunities.push(types[i]);
                }
                if (state.effects[i] === 0.25) {
                    state.resistances025.push(types[i]);
                }
                if (state.effects[i] === 0.5) {
                    state.resistances050.push(types[i]);
                }
                if (state.effects[i] === 1) {
                    state.normalDamage.push(types[i]);
                }
                if (state.effects[i] === 2) {
                    state.effective2.push(types[i]);
                }
                if (state.effects[i] === 4) {
                    state.effective4.push(types[i]);
                }
            }
        },
        resetEffects(state){
            state.effects = [];
        },
        resetTypesList(state){
            state.immunities = [];
            state.resistances025 = [];
            state.resistances050 = [];
            state.normalDamage = [];
            state.effective2 = [];
            state.effective4 = [];
        },
        resetType(state, type){
            state.type1 = '';
            state.type2 = '';
            state.index1 = null;
            state.index2 = null;
            if(state.colorSplash){
                state.lastType = type;
            }
        },
        colorSplash(state){
            state.colorSplash = !state.colorSplash;
            if(!state.colorSplash){
                state.lastType = 'Default';
            }
            if(state.colorSplash){
                if(state.type1 === ''){
                    state.lastType = 'Default';
                }
                else if(state.type2 === ''){
                    state.lastType = state.type1;
                }
                else{
                    state.lastType = state.type2;
                }
            }
        },
    },
})
