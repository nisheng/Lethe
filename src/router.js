import Layout from './layout/index';

// import Cento from './components/cento/index'
const routeConfig = [
    {
        path : '/',
        component: Layout,
        childRoutes: [
            {
                path: '/cento',
                getComponent : (nextState,cb)=>{
                    require.ensure([],(require) =>{
                        // cb(null,Cento);
                        cb(null,require('./components/cento/index.js'));
                    })
                }
            },
            {
                path: '/produce',
                getComponent : (nextState,cb)=>{
                    require.ensure([],(require) =>{
                        cb(null,require('./components/produce/index.js'));
                    })
                }
            },
            {
                path: '/discover',
                getComponent : (nextState,cb)=>{
                    require.ensure([],(require) =>{
                        cb(null,require('./components/produce/index.js'));
                    })
                }
            },
            {
                path: '/library',
                getComponent : (nextState,cb)=>{
                    require.ensure([],(require) =>{
                        cb(null,require('./components/produce/index.js'));
                    })
                }
            },
            {
                path: '/user',
                getComponent : (nextState,cb)=>{
                    require.ensure([],(require) =>{
                        cb(null,require('./components/produce/index.js'));
                    })
                }
            }
        ]
    }
]

export default routeConfig;
