import initAcademicDepartmentEvents from "../academicDepartment/academicDepartment.event";
import initAcademicFacultyEvents from "../academicFaculty/academicFaculty.event";
import initAcademicSemesterEvents from "../academicSemeter/academicSemester.event";

const subscribeToEvents = () => {
    initAcademicSemesterEvents();
    initAcademicDepartmentEvents();
    initAcademicFacultyEvents();
}

export default subscribeToEvents;