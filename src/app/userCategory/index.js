import { mediaType } from "../../config/constants.js";
import Handler from "./Handler.js";


export default [
    {
        path: '/list',
        type: mediaType.GET,
        method: Handler.getUserCategoryLists,
        options: {}
    },
    {
        path: '/list/id',
        type: mediaType.POST,
        method: Handler.getUserCategoryListsById,
        options: {}
    },
    {
        path: '/list/create',
        type: mediaType.POST,
        method: Handler.createUserCategoryList,
        options: {}
    },
    {
        path: '/list/update',
        type: mediaType.POST,
        method: Handler.updateUserCategoryList,
        options: {}
    },
    {
        path: '/list/delete',
        type: mediaType.POST,
        method: Handler.deleteUserCategoryList,
        options: {}
    },
    {
        path: '/list/deactive',
        type: mediaType.POST,
        method: Handler.deActivateUserCategoryList,
        options: {}
    }
    
]


