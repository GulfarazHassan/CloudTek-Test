"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_request_1 = require("../middlewares/validate-request");
const item_controller_1 = require("../controllers/item.controller");
const item_dto_1 = require("../dtos/item.dto");
const router = express_1.default.Router();
exports.itemRouter = router;
router.post('/api/item', validate_request_1.validateAuth(item_dto_1.createItemDto), item_controller_1.createItem);
router.get('/api/item/search', item_controller_1.searchItem);
router.get('/api/item/:id', item_controller_1.getItemById);
//# sourceMappingURL=item.route.js.map