"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const academicDepartment_event_1 = __importDefault(require("../academicDepartment/academicDepartment.event"));
const academicFaculty_event_1 = __importDefault(require("../academicFaculty/academicFaculty.event"));
const academicSemester_event_1 = __importDefault(require("../academicSemeter/academicSemester.event"));
const subscribeToEvents = () => {
    (0, academicSemester_event_1.default)();
    (0, academicDepartment_event_1.default)();
    (0, academicFaculty_event_1.default)();
};
exports.default = subscribeToEvents;
