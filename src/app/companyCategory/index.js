import { mediaType } from "../../config/constants.js";
import Handler from "./Handler.js";


export default [
    {
        path: '/list',
        type: mediaType.GET,
        method: Handler.getCompanyCategoryLists,
        options: {}
    },
    {
        path: '/list/id',
        type: mediaType.POST,
        method: Handler.getCompanyCategoryListsById,
        options: {}
    },
    {
        path: '/list/create',
        type: mediaType.POST,
        method: Handler.createCompanyCategoryList,
        options: {}
    },
    {
        path: '/list/update',
        type: mediaType.POST,
        method: Handler.updateCompanyCategoryList,
        options: {}
    },
    {
        path: '/list/delete',
        type: mediaType.POST,
        method: Handler.deleteCompanyCategoryList,
        options: {}
    }
]


// {
//     path: '/list/add',
//     type: mediaType.POST,
//     middleware: [requestValidator(Methods.ADD_PRODUCT_CATEGOEY_LIST, addProductCateogyValidation)],
//     method: Handler.addProductCategoryList,
//     options:{}
// },
// {
//     path: '/list/edit/:id',
//     type: mediaType.PUT,
//     middleware: [requestValidator(Methods.UPDATE_PRODUCT_CATEGORY_LIST, editProductCateogyValidation)],
//     method: Handler.editProductCategoryList,
//     options:{}
// },
// {
//     path: '/list/delete/:id',
//     type: mediaType.DELETE,
//     middleware: [requestValidator(Methods.DELETE_PRODUCT_CATEGORY_LIST, deleteProductCateogyValidation)],
//     method: Handler.deleteProductCategoryList,
//     options:{}
// }