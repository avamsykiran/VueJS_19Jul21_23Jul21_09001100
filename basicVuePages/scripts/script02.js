
var app = new Vue({
    el:"#appContent",
    data:{
        heading:"My Friends Mangement Page",
        friends: [],
        fnm:""
    },
    methods:{
        add:function(){
           this.friends.push(this.fnm);
           this.fnm="";
        },
        remove:function(){
            let index = this.friends.findIndex(f => f===this.fnm);
            if(index>-1){
                this.friends.splice(index,1);
            }
            this.fnm="";
         }
    }
});