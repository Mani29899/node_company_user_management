import Entity from '../../entity/index.js'
import responseHandler from '../../utill/responseHandler.js';
import Methods from './Methods.js';

class RoutesService {
    
    async getUserCategoryListsServices() {
        const methodName = Methods.GET_USERS_LIST;
        console.log(methodName);
        try {
            let companyCategoryList = await Entity.Users.findAll({
                where: {
                    isActive: true,
                }
            });

            if(!companyCategoryList) return responseHandler.forbidden(methodName ,'No data found')
            return responseHandler.success(methodName, companyCategoryList)
        } catch (error) {
            console.log(error, 'errr')
            return responseHandler.failure(methodName, 'Sorry something went wrong ');
        }
    }

    async getUserCategoryListsByIdServices(data) {
        const methodName = Methods.GET_USERS_LIST_BY_ID;
        console.log(methodName);
        try {
            if (!data.id) return responseHandler.invalid(methodName, 'user is not found')
            let userListId = await Entity.Users.findOne({
                where: {
                    id: data && data.id,
                    isActive: true
                }
            })
            if (!userListId) return responseHandler.invalid(methodName, 'Data Not Found')
            return responseHandler.success(methodName, userListId)
        } catch (error) {
            console.log(error, 'errr')
            return responseHandler.failure(methodName, 'Sorry something went wrong handle');
        }
    }

    async createUserCategoryListService(data) {
        const methodName = Methods.CREATE_COMPANY_LIST;
        console.log(methodName);
        try {

            if (!data || !data.firstName || !data.lastName || !data.email || !data.designation || !data.dob) {
                return responseHandler.invalid(methodName, 'required all details about the Users')
            }
            const createdUserDetails = await Entity.Users.create({
                firstName: data && data.firstName,
                lastName: data && data.lastName,
                email: data && data.email,
                designation: data && data.designation,
                dob: data && data.dob,
                companyId:data && data.companyId,
                isActive: true,
                createdAt: new Date()
            })
            return responseHandler.created(methodName, createdUserDetails)
        } catch (error) {
            return responseHandler.failure(methodName, 'sorry something went wrong')
        }
    }

    async updateUserCategoryListService(data) {
        const methodName = Methods.UPDATE_USERS_LIST;
        try {
            const updateCompanyDetails = await Entity.Users.findOne({
                where: {
                    id: data && data.id,
                }
            })
            if (!updateCompanyDetails) {
                return responseHandler.invalid(methodName, 'Id is not found,So we cannot update the user details')
            }
            data.updatedAt = new Date();
            updateCompanyDetails.update(Object.assign({}, data))
            return responseHandler.success(methodName, updateCompanyDetails)
        } catch (error) {
            return responseHandler.failure(methodName, 'Sorry Something Went Wrong')
        }
    }

    

    async deactivateUserCategoryListService(data) {
        const methodName = Methods.UPDATE_USERS_LIST;
        try {
            const updateCompanyDetails = await Entity.Users.findOne({
                where: {
                    id: data && data.id,
                    isActive:true
                }
            })
            if (!updateCompanyDetails) {
                return responseHandler.invalid(methodName, 'Id is not found,So we cannot update the user details')
            }
            data.updatedAt = new Date();
            data.isActive = false;
            updateCompanyDetails.update(Object.assign({}, data))
            return responseHandler.success(methodName, updateCompanyDetails)
        } catch (error) {
            return responseHandler.failure(methodName, 'Sorry Something Went Wrong')
        }
    }

    async deleteUserCategoryListService(data) {
        const methodName = Methods.DELETE_USERS;
        try {
            const deletedCompanyDetails = await Entity.Users.findOne({
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

