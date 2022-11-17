import httpResponse from '../../utill/HttpResponse.js';
import Methods from './Methods.js';
import service from './Services.js'
import { postRequestParser } from '../../utill/index.js'
import responseHandler from '../../utill/responseHandler.js';

class userCategory {
    async getUserCategoryLists(req, res) {
        const methodName = Methods.GET_USERS_LIST;
        console.log(methodName)
        try {
            const response = await service.getUserCategoryListsServices();
            await httpResponse(res, response)
        } catch (error) {
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async getUserCategoryListsById(req, res) {
        const methodName = Methods.GET_USERS_LIST_BY_ID;
        console.log(methodName)
        try {
            const data = postRequestParser(req);
            const response = await service.getUserCategoryListsByIdServices(data);
            await httpResponse(res, response)
        } catch (error) {
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async createUserCategoryList(req, res) {
        const methodName = Methods.CREATE_USERS_LIST;
        try {
            const data = postRequestParser(req)
            const response = await service.createUserCategoryListService(data);
            await httpResponse(res, response)
        } catch (error) {
            console.log(error)
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async updateUserCategoryList(req, res) {
        const methodName = Methods.UPDATE_USERS_LIST;
        try {
            const data = postRequestParser(req)
            const response = await service.updateUserCategoryListService(data);
            await httpResponse(res, response)
        } catch (error) {
            console.log(error)
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async deActivateUserCategoryList(req, res) {
        const methodName = Methods.UPDATE_USERS_LIST;
        try {
            const data = postRequestParser(req)
            const response = await service.deactivateUserCategoryListService(data);
            await httpResponse(res, response)
        } catch (error) {
            console.log(error)
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async deleteUserCategoryList(req, res) {
        const methodName = Methods.DELETE_USERS;
        try {
            const data = postRequestParser(req);
            const response = await service.deleteUserCategoryListService(data);
            await httpResponse(res, response)
        } catch (error) {
            console.log(error)
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async getUserListByCompanyId(req, res) {
        const methodName = Methods.GET_USER_BY_COMPANY_ID;
        console.log(methodName)
        try {
            const data = postRequestParser(req);
            const response = await service.getUserByCompanyIdService(data);
            await httpResponse(res, response)
        } catch (error) {
            httpResponse(res, responseHandler.failure(methodName))
        }
    }
    

    
}


export default new userCategory();
