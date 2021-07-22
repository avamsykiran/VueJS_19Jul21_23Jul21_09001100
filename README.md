VueJS
==========================================================================

    Lab Setup
    ------------------------------------------------

        Chrome          browser / Webclient
        
        VSCode          IDE                         https://code.visualstudio.com/download
        
        NodeJS          Dev Platform                https://nodejs.org/en/download/

        Vue-CLI         Project Management Tool     npm install -g vue-cli
                                                    vue --version

    Preqequisites
    ------------------------------------------------

        HTML 5
        CSS 3                   (optional)
        Javascript (ES6)
            DOM manipulations
            Javascript Objects, Strings,Math,Date,Promise,Array and array prototype functions
            await and async
            arrow functions
            high order functions
            callbacks
            closures
            prototypes and mixins
            modules
            tempalte leterals
                    
                    "hello " + unm + " you are " + age +" years old"
                    `hello ${unm} you are ${age} years old`

            spread operator

        NodeJS                  (optional)
        Webpack                 (optional)

    Web App Evolution
    -------------------------------------------------------

        WebSite (static webapp)
                is a simple collection of html documents (pages).

        Dynamic Web Application
                (Middleware and a integrated UI)

                has some server side running programs that are capable of dynamically
                generating html every time they receive a req. And the generated html 
                along related supportivbeJS and CSS are send to the client as a response.

                Servlets + JSP      (or)
                ASP.Net with C# + WebPages/WebForms/RazorPages

        Single Page Application
                (Middleware and a isolated UI)

                the server side running programmes are reponsible 
                only to provide the data required and to offer
                server side bussiness logic, but the UI is compltely
                client side running and the html is dynamically'
                generated on the client itself.


                Middleware           REST api        java/.net/python ...etc.,
                isolated UI          SPA             angular/reactjs/ember/vuejs ...etc.,

        Progressive Web Application

                is a SPA that ensures the below features...

                1. it cna be executerd in its own window without a broswer.
                2. it must be luanchable from a desktop icon
                3. it must be executable offline as well (atleast a few features)
                4. it must be quick to launch and load.

                PWA = AppWrapper (like iconic/blender....) + SPA

    What is VueJS ?
    -------------------------------------------------------

        is a progressive web javascript framework.


    VueJS Features
    ------------------------------------------

        Component based apprach
                is a reuable smart section of a page.
                a page composes of as many components as required.
        Supports templates
        Virtual DOM
        Data binding
        Event Binding
        Html extandability
        Directives
        Watchers
        Routes


    VueJS Archetecture
    --------------------------------------------

        very light weight library for SPA application.

        each SPA application is controlled typically by one Vue Instance.

        Vue instacne

            var app = new Vue({
                el:"",
                data: javascriptObjectOrAjsFunThatReturnAnObject,
                template: "htmlContent"
                //any other methods to be called in resposne to the events on the dom
            });

        Data Binding

            Interpolation
                            {{javascript-expression}}

                            <h1>Hello {{userName}}! How do you do?</h1>

            One-way data binding
                            the value of a javascript variable/expression can be assigned to an html atribute.

                            v-bind:attrbute="javascript-expression"

                            <img v-bind:src="mylogo" />

            Two-way data binding
                            to bind a variable with a form element, so that
                            the foem element is loaded witht eh value in the varible initially,
                            and each time the value of the form ele changes then variable value is updated.

                            <input type="text" v-model="userName" />

            event binding   
                            is responsible to respond on events.

                            <button v-on:click="callback()">click me </button>

        Directive
                    is a user-defined html attribute

                    v-bind
                    v-model
                    v-on
                    v-if
                    v-for
                    ...etc

        Component
                    is a user-defined html element.

                    Vue.component("componentName",{
                        data: javascriptObjectOrAjsFunThatReturnAnObject,
                        template: "htmlContent"
                    });

                    Vue.component("HelloWorld",{
                        data: { userName:"Vamsy" },
                        template: "<h1>Hello {{userName}}!</h1>"
                    });

                    <HelloWorld />


    Vue Instacne LifeCycle Hooks
    -------------------------------------------

        beforeCreate
        created
        afterCreate
        beforeMount
        mounted
        afterMount
        befoeUpdate
        updated
        afterUpdate
        beforeDestroy
        destroyed

    Basic Vue Pages
    --------------------------------------------

        integrate vue.js as a cdn link into our html page

        https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js
    

    Creating a VueJS Project using vue-cli
    --------------------------------------------

        vue init webpack proj-name

    To run your app
    --------------------------------------------
        cd proj-name
        npm run dev

        and open http://localhost:8082 on your browser.

    

