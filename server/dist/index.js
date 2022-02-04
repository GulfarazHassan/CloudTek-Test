"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
db_1.default();
app_1.default.listen(80, () => {
    console.log('app is running on port 8080');
});
//# sourceMappingURL=index.js.map