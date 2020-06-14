import data from "./utils.js";

export default {

    profissoes: data,

    start(){
        this.prof();
    },

    prof(){
        console.log(this.profissoes);
    }

}