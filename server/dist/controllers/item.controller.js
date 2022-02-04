"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchItem = exports.getItemById = exports.createItem = void 0;
const item_model_1 = __importDefault(require("../models/item.model"));
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, photo, description, shortDescription } = req.body;
    const item = new item_model_1.default({
        title,
        photo,
        description,
        shortDescription,
    });
    try {
        yield item.save();
        return res.status(200).json({
            success: true,
            message: 'Item Created successfully',
            data: item,
        });
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: 'Error creating item', error: err.message });
    }
});
exports.createItem = createItem;
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const item = yield item_model_1.default.findById(id);
        return res.status(200).json({
            success: true,
            message: 'Item found',
            data: item,
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error founding item',
            error: err.message,
        });
    }
});
exports.getItemById = getItemById;
const searchItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.query;
    try {
        const items = yield item_model_1.default.find({
            title: { $regex: title || '', $options: 'i' },
        });
        return res.status(200).json({
            success: true,
            message: 'Items found',
            data: items,
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error founding item',
            error: err.message,
        });
    }
});
exports.searchItem = searchItem;
//# sourceMappingURL=item.controller.js.map