import Entity from '../../entity/index.js'
import responseHandler from '../../utill/responseHandler.js';
import Methods from './Methods.js';

class RoutesService {
    
    async getCompanyCategoryListsServices() {
        const methodName = Methods.GET_COMPANY_LIST;
        console.log(methodName);
        try {
            let companyCategoryList = await Entity.Company.findAll({
                where: {
                    isActive: true
                }
            });
            return responseHandler.success(methodName, companyCategoryList)
        } catch (error) {
            console.log(error, 'errr')
            return responseHandler.failure(methodName, 'Sorry something went wrong ');
        }
    }

    async getCompanyCategoryListsByIdServices(data) {
        const methodName = Methods.GET_COMPANY_LIST;
        console.log(methodName);
        try {
            if (!data.id) return responseHandler.invalid(methodName, 'id is not found')
            let companyListById = await Entity.Company.findOne({
                where: {
                    id: data && data.id,
                    isActive: true
                }
            })
            if (!companyListById) return responseHandler.invalid(methodName, 'Data Not Found')
            return responseHandler.success(methodName, companyListById)
        } catch (error) {
            console.log(error, 'errr')
            return responseHandler.failure(methodName, 'Sorry something went wrong handle');
        }
    }

    async createCompanyCategoryListService(data) {
        const methodName = Methods.CREATE_COMPANY_LIST;
        console.log(methodName);
        try {

            if (!data || !data.companyName || !data.companyAddress || !data.latitude || !data.longitude) {
                console.log(data, 'data')
                return responseHandler.invalid(methodName, 'required all details about the company')
            }
            const createdCompanyDetails = await Entity.Company.create({
                companyName: data && data.companyName,
                companyAddress: data && data.companyAddress,
                latitude: data && data.latitude,
                longitude: data && data.longitude,
                isActive: true,
                createdAt: new Date()
            })
            return responseHandler.created(methodName, createdCompanyDetails)
        } catch (error) {
            return responseHandler.failure(methodName, 'sorry something went wrong')
        }
    }

    async updateCompanyCategoryListService(data) {
        const methodName = Methods.UPDATE_COMPANY_LIST;
        try {
            const updateCompanyDetails = await Entity.Company.findOne({
                where: {
                    id: data && data.id,
                }
            })
            if (!updateCompanyDetails) {
                return responseHandler.invalid(methodName, 'Id is not found,So we cannot update the company details')
            }
            data.updatedAt = new Date();
            updateCompanyDetails.update(Object.assign({}, data))
            return responseHandler.success(methodName, updateCompanyDetails)
        } catch (error) {
            return responseHandler.failure(methodName, 'Sorry Something Went Wrong')
        }
    }

    async deleteCompanyCategoryListService(data) {
        const methodName = Methods.DELETE_COMPANY;
        try {
            const deletedCompanyDetails = await Entity.Company.findOne({
                where: {
                    id: data && data.id,
                    isActive: true
                }
            })
            if (!deletedCompanyDetails) {
                return responseHandler.invalid(methodName, 'Id is not found,So we cannot remove the details')
            }
            data.isActive = false;
            deletedCompanyDetails.update(Object.assign({}, data))
            return responseHandler.success(methodName, deletedCompanyDetails)
        } catch (error) {
            return responseHandler.failure(methodName, 'sorry went something wrong')
        }
    }
}

export default new RoutesService();

