import Layout from './layout/index';
const routeConfig = [
    {
        path : '/',
        component: Layout,
        childRoutes: [
            {
                path: '',
                getComponent : (nextState,cb)=>{
                    require.ensure([],(require) =>{
                        cb(null,require('./'))
                    })
                }
            }
        ]
    }
]

export default routeConfig;
