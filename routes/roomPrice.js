const express = require('express');
const router = express.Router();
import RoomPriceController from "../controllers/RoomPriceController";
const roomPriceController = new RoomPriceController();
import BuildingController from "../controllers/BuildingController";
const buildingController = new BuildingController();

router.get('/avg', async (req, res, next) => { await roomPriceController.getAverage(req, res, next)})
    .get('/', async (req, res, next) => { await buildingController.getRoomPrices(req, res, next)})
    .post('/', async (req, res, next) => { await roomPriceController.setRoomPrice(req, res, next)})
    .put('/:id', async (req, res, next) => { await roomPriceController.updateRoomPrice(req, res, next)})
    .delete('/:id', async (req, res, next) => { await roomPriceController.deleteRoomPrice(req, res, next)})

module.exports = router;