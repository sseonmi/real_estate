const { DataTypes, Model } = require('sequelize');

export class Rooms extends Model {
    static initialize(sequelize) {
        super.init({
            floor : {
                type: DataTypes.TINYINT
            },
            number: {
                type: DataTypes.INTEGER
            },
            buildingId: {
                type: DataTypes.INTEGER
            }
        }, {
            sequelize,
            tableName: 'rooms',
            underscored: true,
            timestamps: false
        });
    }

    static associate(models) {
        this.hasMany(models.RoomPrices, {as: 'roomPrices'})
    }
}

module.exports = Rooms;
