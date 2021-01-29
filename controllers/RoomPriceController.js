import CommonController from "./CommonController";

export default class RoomPriceController extends CommonController{
    constructor() {
        super();
    }

    async setRoomPrice(req, res, next) {
        const {deposit, monthly, roomId} = req.body;
        if(undefined == deposit) return res.status(400).send({code: 'MISSING_REQUIRED_PARAM'});
        if(undefined == monthly) return res.status(400).send({code: 'MISSING_REQUIRED_PARAM'});
        if(undefined == roomId) return res.status(400).send({code: 'MISSING_REQUIRED_PARAM'});

        await this.models.RoomPrices.create({deposit, monthly, roomId: roomId})
            .then(roomPrice => {
                return res.status(201).send(roomPrice)
            })
            .catch(e => {
                return res.status(400).send()
            })

    }

    async updateRoomPrice(req, res, next) {
        const {id} = req.params;
        const {deposit, monthly, roomId} = req.body;

        await this.models.RoomPrices.update({deposit, monthly, roomId: roomId}, {where: {id: id}})
            .then(roomPrice => {
                return res.status(201).send(roomPrice)
            })
            .catch(e => {
                return res.status(400).send()
            })

    }

    async deleteRoomPrice(req, res, next) {
        const {id} = req.params;

        await this.models.RoomPrices.destroy({where: {id: id}})
            .then(roomPrice => {
                return res.status(200).send({code: 'OK'})
            })
            .catch(e => {
                return res.status(400).send()
            })
    }

    async getAverage(req, res, next) {
        await this.sequelize.query('SELECT TRUNCATE(AVG(t2.monthly), 0) AS monthly, TRUNCATE(AVG(t2.deposit),0) AS deposit FROM (\n' +
            '\tSELECT MAX(monthly) AS monthly, ANY_VALUE(room_id) AS room_id \n' +
            '\tFROM room_prices\n' +
            '\tGROUP BY room_id\n' +
            ') AS t1 INNER JOIN room_prices AS t2 ON t1.room_id = t2.room_id AND t1.monthly = t2.monthly;', {type: this.Sq.QueryTypes.SELECT})
            .then(average => {
                return res.json({average:average});
            })

    }
}