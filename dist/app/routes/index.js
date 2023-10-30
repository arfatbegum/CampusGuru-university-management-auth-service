"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const academicSemester_route_1 = require("../modules/academicSemeter/academicSemester.route");
const academicFaculty_route_1 = require("../modules/academicFaculty/academicFaculty.route");
const academicDepartment_route_1 = require("../modules/academicDepartment/academicDepartment.route");
const student_route_1 = require("../modules/student/student.route");
const faculty_route_1 = require("../modules/faculty/faculty.route");
const admin_route_1 = require("../modules/admin/admin.route");
const managementDepartment_route_1 = require("../modules/managementDepartment/managementDepartment.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: auth_route_1.AuthRoutes,
    },
    {
        path: '/users',
        routes: user_route_1.UserRoutes,
    },
    {
        path: '/academic-semesters',
        routes: academicSemester_route_1.AcademicSemesterRoutes,
    },
    {
        path: '/academic-faculties',
        routes: academicFaculty_route_1.AcademicFacultyRoutes,
    },
    {
        path: '/academic-departments',
        routes: academicDepartment_route_1.AcademicDepartmentRoutes,
    },
    {
        path: '/management-departments',
        routes: managementDepartment_route_1.ManagementDepartmentRoutes,
    },
    {
        path: '/students',
        routes: student_route_1.StudentRoutes,
    },
    {
        path: '/faculties',
        routes: faculty_route_1.FacultyRoutes,
    },
    {
        path: '/admins',
        routes: admin_route_1.AdminRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
