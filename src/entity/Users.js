
export default (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: false,
            autoIncrement: true
        },
        companyId: {
            field:'company_id',
            type:DataTypes.INTEGER
        },
        firstName: {
            field: 'first_name',
            type: DataTypes.STRING(100),
        },
        lastName: {
            field: 'last_name',
            type: DataTypes.STRING(100),
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(150)
        },
        designation: {
            field: 'designation',
            type: DataTypes.STRING(100)
        },
        dob: {
            field: 'dob',
            type: DataTypes.DATE
        },
        isActive:{
            field:'is_active',
            type:DataTypes.BOOLEAN
        },
        createdAt:{
            field:'created_at',
            type:DataTypes.DATE
        },
        updatedAt:{
            field:'updated_at',
            type:DataTypes.DATE
        }
    }, {
        tableName: 'users',
        timestamps: false,
        underscored: true,
        
        classMethods: {

        }
    });

    return Users;
}
