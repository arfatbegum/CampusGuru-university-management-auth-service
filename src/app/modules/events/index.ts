import initAcademicDepartmentEvents from "../academicDepartment/academicDepartment.event";
import initAcademicSemesterEvents from "../academicSemeter/academicSemester.event";

const subscribeToEvents = () => {
    initAcademicSemesterEvents();
    initAcademicDepartmentEvents();
}

export default subscribeToEvents;