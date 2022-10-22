import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';


//---------- Tambien es valido ----------//

// type Route = {
//     to: string,
//     path: string,
//     Component: () => JSX.Element,
//     name: string
// };

//---------- ---------------- ----------//

type JSXComponent = () => JSX.Element;

interface Route {

    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;

};


const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayoutPage" */ "../01-lazyload/layout/LazyLayout" ) );


export const routes : Route[] = [

    {
        to: '/lazy-layout/',
        path: '/lazy-layout/*',
        Component: LazyLayout,
        name: 'Lazy-Layout'
    },

    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-Lazy'
    },

];