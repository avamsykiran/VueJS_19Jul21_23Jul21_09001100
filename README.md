VueJS
==========================================================================

    Lab Setup
    ------------------------------------------------

        Chrome          browser / Webclient
        
        VSCode          IDE                         https://code.visualstudio.com/download
        
        NodeJS          Dev Platform                https://nodejs.org/en/download/

        Vue-CLI         Project Management Tool     npm install -g vue-cli
                                                    vue --version

                                                    npm uninstall -g vue-cli

                                                    npm install -g @vue/cli
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

    Coverage
    ------------------------------------------------------
    TOPIC
        Create a basic Vue application
        Create forms with Vue
        Create routes with Vue Router
        Create Vue animations
        Manage data state with Vuex
        Create authentication and authorization for Vue apps
        Prepare a Vue app for internationalization
        Test Vue apps with Cypress

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
        beforeMount
        mounted
        befoeUpdate
        updated
        beforeDestroy
        destroyed

    Basic Vue Pages
    --------------------------------------------

        integrate vue.js as a cdn link into our html page

        https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js
    

    SFC - Single File Components
    --------------------------------------------

        MyComponent.vue
        -------------------------------------
            <template>
            </template>

            <script>
             export default {
                 name:'',
                 data(){

                 },
                 methods : {

                 },
                 props : {
                     
                 }
             }
            </script>

            <style>
            </style>

        vue-loader  is tool that process our .vue files.

    Creating a VueJS Project using vue-cli 4.5
    --------------------------------------------

        vue create proj-name

    To run your app
    --------------------------------------------
        cd proj-name
        npm run serve

        and open http://localhost:8082 on your browser.

    Directive Shorthands
    --------------------------------------------
        v-bind:width="w"                    :width="w"
        v-on:click="eventHandler"           @click="evetnHandler

    Component API
    -------------------------------------
    $data
    $emit("userDefiendEvent",val)
    
    Bootstrap Integration
    -------------------------------------

        CDN     into the index.html

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

        npm install bootstrap@4

        npm install bootstrap@next

        vue add bootstrap-vue

    Computed Properties
    -------------------------------------

        <span>{{ propertyName }}</span>
        <input type="text" v-model="fullName" />

        computed: {
            propertyName() {
                ...
                return computedValue;
            },
            fullName: {
                get() {
                    return this.firstName + ' ' + this.lastName
                },
                set(newValue) {
                    const names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length - 1]
                }
            }
        }

    watchers
    -------------------------------------

        watch: {
            // whenever prop1 changes
            prop1(newVal, oldVal) {
                //doWhatever needed to be done
            }
        }

    Slots
    -------------------------------------

    component AlertBox
        <div class="alert alert-danger">
            <slot></slot>
        </div>

        <alert-box>
            content to be replacing the slot
        </alert-box>

    Naemd Slots
    --------------------------------------
    component BaseLayout
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>

    <base-layout>
        <template v-slot:header>
            <h1>Here might be a page title</h1>
        </template>

        <template v-slot:default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <template v-slot:footer>
            <p>Here's some contact info</p>
        </template>
    </base-layout>

    Vue-Router
    --------------------------------------
        npm install vue-router@4 --save

        Create a navigation link
            <router-link to="/">Go to Home</router-link>

        Offer the placeholder for the resultant component
            <router-view></router-view>

        Configuaring Routes
            import { createRouter,createWebHashHistory } from 'vue-router'
           
            const routes = [
                { path: '/', component: Home },
                { path: '/about', component: About },
            ]

            const router = VueRouter.createRouter({
                history: VueRouter.createWebHashHistory(),
                routes,
            })

            const app = Vue.createApp({})
            app.use(router)
            app.mount('#app')

        Accessing routing inside a component

            $router             this.$router.push(url)
            $route              this.$route.params.paramName
    
    State Managemnt using vuex
    --------------------------------------
        npm install vuex@next --save

        Creating a Store

            // a store is a state hol;der for the entire application
            //we can reqeust to modify anything in the store with the help
            //of mutations
            //a mutation is a simple function that can do 
            //modification tot eh state in teh store.

            import { createStore } from 'vuex'

            const store = createStore({
                state () {
                    return {
                        count: 0
                    }
                },
                mutations: {
                    increment (state,payload) {
                        state.count+=payload
                    }
                },
                getters: {
                    isEven(){
                        return state.count%2==0;
                    }
                },
                actions: {
                   saveCount(context){
                       //do the asyn operation here
                       //and mutate state if needed as context.commit('mutaionName');
                   }
                }
            })

            app.use(store)

        Access the state and getters in the store in components using $store 
        
        computed: {
            count () {
                return this.$store.state.count
            },
            isEven(){
                return this.$store.getters.isEven
            }
        }

        Access the store in components using $store to request a mutation,or actions:

            methods: {
                increment() {
                    this.$store.commit('increment',10)
                },
                save(){
                    this.$store.dispatch('action',payload)
                }
            }

    Axios Integration
    -----------------------------------------------------------

        Create Fake api for learning purpose:
            npm install json-server --save
            json-server --watch data.json --port 9999

        Axios
            npm install axios --save

            import axios from 'axios'

            axios.get(url) : Promise
            axios.post(url,reqBody) : Promise
            axios.put(url,reqBody) : Promise
            axios.delete(url) : Promise

    Internationalization
    -------------------------------------------------------------
        npm install vue-i18n@next --save


        Configuare vI18n
        -------------------------------------------------------
            import { createI18n } from 'vue-i18n'

            const messages = {
                en: {
                    message: {
                        hello: 'hello world'
                    }
                },
                hi: {
                    message: {
                        hello: 'नमस्ते दुनिया'
                    }
                }
            }

            const i18n = createI18n({
                 locale: 'hi', 
                 fallbackLocale: 'en',
                 globalInjection: true,
                 messages, 
            })

            app.use(i18n);


            <div>
                <p>{{ $t("message.hello") }}</p>
            </div>

    