const { DataTypes, Model } = require('sequelize');

export class Lessors extends Model {
    static initialize(sequelize) {
        super.init({
            name : {
                type: DataTypes.STRING
            }
        }, {
            sequelize,
            tableName: 'lessors',
            underscored: true,
            timestamps: false
        });
    }

    static associate(models) {
        this.hasMany(models.Buildings, {as: 'buildings'})
    }
}

module.exports = Lessors;
