const { DataTypes, Model } = require('sequelize');

export class RoomPrices extends Model {
    static initialize(sequelize) {
        super.init({
            deposit : {
                type: DataTypes.BIGINT
            },
            monthly: {
                type: DataTypes.INTEGER
            },
            roomId: {
                type: DataTypes.INTEGER
            }
        }, {
            sequelize,
            tableName: 'room_prices',
            underscored: true,
            timestamps: false
        });
    }
}

module.exports = RoomPrices;
