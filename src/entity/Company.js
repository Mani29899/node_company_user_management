
export default (sequelize, DataTypes) => {
    const Companies = sequelize.define('Company', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: false,
            autoIncrement: true
        },
        companyName: {
            field: 'company_name',
            type: DataTypes.STRING(200),
        },
        companyAddress: {
            field: 'company_address',
            type: DataTypes.TEXT
        },
        latitude: {
            field: 'latitude',
            type: DataTypes.STRING(25)
        },
        longitude: {
            field: 'longitude',
            type: DataTypes.STRING(25)
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
        tableName: 'companies',
        timestamps: false,
        underscored: true,
        
        classMethods: {

        }
    });

    return Companies;
}
