const { DataTypes, Model } = require('sequelize');

export class Buildings extends Model {
    static initialize(sequelize) {
        super.init({
            address : {
                type: DataTypes.STRING
            },
            lessorId: {
               type: DataTypes.INTEGER
            }
        }, {
            sequelize,
            tableName: 'buildings',
            underscored: true,
            timestamps: false
        });
    }

    static associate(models) {
        this.belongsTo(models.Lessors, {as: 'lessor'})
        this.hasMany(models.Rooms, {as: 'rooms'})
    }
}

module.exports = Buildings;
