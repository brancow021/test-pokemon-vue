import Vuex from "vuex";
import { createStore, createLogger } from 'vuex';


//folders store
import forms from "./forms";
// import restore from "./restore";

export default createStore({
  modules: {
    forms,
    // restore
    // MyReusableModule,
  },
  
  plugins: [createLogger()],
});

const defaultValues = () => {
  return {
    plugins: [createLogger()],
  };
};
