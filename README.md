# CampusGuru-university-management-auth-service

* The CampusGuru University Management System is a comprehensive and user-friendly web application designed to streamline and enhance the administrative and academic operations of a university. This system serves three primary user roles: Admin, Student, and Faculty, each with its specific functionalities and responsibilities. Here's an overview of the key features and functionalities of the system:

### Student Features:

- Authentication: Students can securely log in and log out of their accounts.

- Profile Management: Students can manage and update their personal profiles, including contact information, addresses, and emergency contacts.

- Academic Enrollment: Students can enroll in academic semesters and courses for specific terms.

- Tuition Payment: Students have the option to pay tuition fees online or offline, whether it's partial or full payments.

- Transaction History: Access to a transaction history feature allows students to track their financial records.

- Academic Information: Students can view their class schedules, notice boards, events, and academic results, both full and semester-wise.

- Teacher Evaluation: Students have the ability to provide feedback and evaluations for their instructors.

### Admin Features:

- Authentication: Admin users can log in and out of their accounts securely.

- Profile Management: Admins can manage their profiles and update certain fields.

- User Management: Admins can create, block/unblock, change passwords, and forcefully log out user accounts.

- Process Management: Admins have control over various university processes, including managing semesters, offered courses, sections, faculty, students, buildings, rooms, payments, permissions, and activities.

### Faculty Features:

- Authentication: Faculty members can securely log in and log out of their accounts.

- Profile Management: Faculty can manage and update their profiles, including specific fields.

- User Management: Faculty can manage student grades and access academic and personal information.

- Lecture Resources: Faculty can manage and provide lecture resources for their courses.

### Data Models and Permissions:

* The system utilizes data models like User, Student, Faculty, and Admin, each with relevant fields and references. Permission models enable fine-grained access control.

### Academic Semester and Faculty Management:

Admins can create, read, update, and delete academic semesters and faculties, ensuring proper organization and management of academic processes.

### API Endpoints:

### User:
- users/create-student (POST)
- users/create-faculty (POST)
- users/create-admin (POST)
- users/my-profile (GET)
- users/:id (GET)
- users/:id (PATCH)
- user/:id (DELETE)
- users/:id/force-logged-out
- users?page=1&limit=10 (GET)
- users/:id/available-permissions?page=1&limit=10 (GET)
- users/:id/assigned-permissions?page=1&limit=10 (GET)
- users/:id/assign-permissions (POST)
- users/:id/remove-permissions (POST)


### Student:
- students (GET)
- students?page=1&limit=10 (GET) (Pagination and Filtering)
- students/:id  (GET)
- students/:id  (PATCH)
- students/:id (DELETE)

### Faculty:
- faculties?page=1&limit=10&sortBy=gender&sortOrder=desc  (GET) 
- faculties?searchTerm=lec (GET)
- faculties/:id  (GET)
- faculties/:id    (PATCH)
- faculties/:id ( DELETE)

### Admin:
- admins?page=1&limit=10 (GET)
- admins/:id  (GET)
- admin/:id   (PATCH)

### Permission
- permissions?page=1&limit=10 (GET)
- permissions (POST)
- permissions/:id (GET)
- permissions/:id (PATCH)
- permissions/:id (DELETE)

### Auth
- auth/login (POST)
- auth/change-password (POST)
- auth/refresh-token (POST)
- auth/forgot-password(POST)
- auth/reset-password (POST)

### Academic Semester
- academic-semesters/create-semester (POST)
- academic-semesters  (GET)
- academic-semesters/:id (GET) 
- academic-semesters/:id (PATCH)
- academic-semesters/:id (DELETE)

### Authentication and Security:

* The application ensures the security of user data through features like password changes, forced logouts, and token management.
* 
### Academic Semester Management:

* Admins can efficiently create, view, update, and delete academic semesters, enhancing the academic planning process.

* In summary, the University Management System is a robust and versatile web application tailored to the unique needs of university administration, students, and faculty. It provides a centralized platform for efficient management of academic processes, user accounts, and permissions, ultimately enhancing the university's operational efficiency and academic experience.

## ER Diagram
![image](https://github.com/arfatbegum/CampusGuru-university-management-auth-service/assets/96864183/084960bd-c332-4838-a1c2-1c31ad6022f7)
