import express from 'express';
import { routeMethodOptions } from '../app/processRoutes.js'
import companyCategoryArray from './companyCategory/index.js'
import userCategoryArray from './userCategory/index.js'




let companyCategoryRouter = express.Router();
if (companyCategoryArray && companyCategoryArray.length > 0) {
    companyCategoryRouter = routeMethodOptions(companyCategoryRouter, companyCategoryArray)
} else {
    console.error('There is No Routes Configuered')
}

let usersCategoryRouter = express.Router();
if (userCategoryArray && userCategoryArray.length > 0) {
    usersCategoryRouter = routeMethodOptions(usersCategoryRouter, userCategoryArray)
} else {
    console.error('There is Routes Configuered')
}






export {companyCategoryRouter ,usersCategoryRouter}