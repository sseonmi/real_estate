import CommonController from "./CommonController";

export default class BuildingController extends CommonController{
    constructor() {
        super()
    }

    async getRoomPrices(req, res, next) {
        const findOption = {
            attributes: ['id', 'address'],
            include: [
                {model: this.models.Lessors, attributes: ['name'] , as: 'lessor'},
                {model: this.models.Rooms, attributes: ['id', 'floor', 'number'], as: 'rooms'
                    ,include: [{model: this.models.RoomPrices, attributes: ['id', 'deposit', 'monthly'], as: 'roomPrices'}]
                }
            ]
        }

        await this.models.Buildings.findAll(findOption)
            .then(buildings => {
                return res.json(buildings);
            })
            .catch(e => {
                return res.status(400).send();
            })
    }
}