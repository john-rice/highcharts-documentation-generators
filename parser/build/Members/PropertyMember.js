"use strict";
/*!*
 *
 *  Copyright (C) Highsoft AS
 *
 * */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyMember = void 0;
const Member_1 = __importDefault(require("../Member"));
const typescript_1 = __importDefault(require("typescript"));
/* *
 *
 *  Class
 *
 * */
class PropertyMember extends Member_1.default {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(file, node) {
        super(file, node);
        this.name = node.name.getText(file.node);
    }
    /* *
     *
     *  Static Functions
     *
     * */
    static parse(file, node) {
        if (!typescript_1.default.isPropertyAssignment(node) &&
            !typescript_1.default.isPropertyDeclaration(node) &&
            !typescript_1.default.isPropertySignature(node)) {
            return;
        }
        return new PropertyMember(file, node);
    }
    /* *
     *
     *  Functions
     *
     * */
    toJSON(_skipChildren) {
        const functionMember = this, name = functionMember.name;
        return Object.assign(Object.assign({}, super.toJSON(true)), { kind: 'property', name });
    }
}
exports.PropertyMember = PropertyMember;
/* *
 *
 *  Registry
 *
 * */
Member_1.default.register(PropertyMember);
/* *
 *
 *  Default Export
 *
 * */
exports.default = PropertyMember;
//# sourceMappingURL=PropertyMember.js.map