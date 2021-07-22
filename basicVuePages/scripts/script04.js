
var app = new Vue({
    el:"#app",
    data:{count:1},
    template:  `
        <div>
            <h1>Lifecycle Hooks</h1>
            <span><strong>{{count}}</strong></span>
            <button v-on:click="inc">Increment</button>
        </div>
    `,
    methods:{
        inc:function(){
            this.count++;
        }
    },
    beforeCreate:function(){
        console.log("Before Create Called")
    },
    afterCreate:function(){
        console.log("After Create Called")
    },
    created:function(){
        console.log("create Called")
    },
    beforeMount:function(){
        console.log("before mount Called")
    },
    mounted:function(){
        console.log("mounted Called")
    },
    beforeUpdate:function(){
        console.log("before update Called")
    },
    updated:function(){
        console.log("updated Called")
    }
});

