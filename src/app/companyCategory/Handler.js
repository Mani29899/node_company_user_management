import httpResponse from '../../utill/HttpResponse.js';
import Methods from './Methods.js';
import service from './Services.js'
import { postRequestParser } from '../../utill/index.js'
import responseHandler from '../../utill/responseHandler.js';

class companyCategory {
    async getCompanyCategoryLists(req, res) {
        const methodName = Methods.GET_COMPANY_LIST;
        console.log(methodName)
        try {
            const response = await service.getCompanyCategoryListsServices();
            await httpResponse(res, response)
        } catch (error) {
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async getCompanyCategoryListsById(req, res) {
        const methodName = Methods.GET_COMPANY_LIST_BY_ID;
        console.log(methodName)
        try {
            const data = postRequestParser(req);
            const response = await service.getCompanyCategoryListsByIdServices(data);
            await httpResponse(res, response)
        } catch (error) {
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async createCompanyCategoryList(req, res) {
        const methodName = Methods.CREATE_COMPANY_LIST;
        try {
            const data = postRequestParser(req)
            const response = await service.createCompanyCategoryListService(data);
            await httpResponse(res, response)
        } catch (error) {
            console.log(error)
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async updateCompanyCategoryList(req, res) {
        const methodName = Methods.UPDATE_COMPANY_LIST;
        try {
            const data = postRequestParser(req)
            const response = await service.updateCompanyCategoryListService(data);
            await httpResponse(res, response)
        } catch (error) {
            console.log(error)
            httpResponse(res, responseHandler.failure(methodName))
        }
    }

    async deleteCompanyCategoryList(req, res) {
        const methodName = Methods.DELETE_COMPANY;
        try {
            const data = postRequestParser(req);
            const response = await service.deleteCompanyCategoryListService(data);
            await httpResponse(res, response)
        } catch (error) {
            console.log(error)
            httpResponse(res, responseHandler.failure(methodName))
        }
    }
}


export default new companyCategory();
