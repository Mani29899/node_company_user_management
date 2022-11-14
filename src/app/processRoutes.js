import { mediaType } from '../config/constants.js';

export const routeMethodOptions = (router, routes) => {
    return routes.map((route) => {
        const middleware = route.middleware || [];
        switch (route.type) {
            case mediaType.GET:
                return router.get(route.path, ...middleware, route.method)
            case mediaType.POST:
                return router.post(route.path, ...middleware, route.method)
            case mediaType.PUT:
                return router.put(route.path, ...middleware, route.method)
            case mediaType.DELETE:
                return router.delete(route.path,...middleware ,route.method)
        }
    })
}