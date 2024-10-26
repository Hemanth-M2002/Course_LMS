import React, { useState } from 'react';
import { Plus, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  // Initial courses state
  const [courses, setCourses] = useState([
    { id: 1, name: 'Web Development', instructor: 'John Doe', students: 120, duration: '12 weeks' },
    { id: 2, name: 'Data Science', instructor: 'Jane Smith', students: 85, duration: '10 weeks' },
    { id: 3, name: 'Digital Marketing', instructor: 'Mike Johnson', students: 95, duration: '8 weeks' },
    { id: 4, name: 'UX Design', instructor: 'Sarah Brown', students: 70, duration: '6 weeks' },
  ]);

  const navigate = useNavigate();

  const [newCourse, setNewCourse] = useState({
    name: '',
    instructor: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCourse = () => {
    // Navigate to the course creation page
    navigate('/course/create');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="bg-transparent border-none cursor-pointer" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold">Courses</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-8 border rounded"
            />
          </div>
          <button onClick={handleAddCourse} className="flex items-center bg-blue-500 text-white rounded px-4 py-2">
            <Plus className="mr-2 h-4 w-4" />
            Add New Course
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-3">Course Name</th>
              <th className="p-3">Instructor</th>
              <th className="p-3">Enrolled Students</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="p-3 font-medium">{course.name}</td>
                <td className="p-3">{course.instructor}</td>
                <td className="p-3">{course.students}</td>
                <td className="p-3">{course.duration}</td>
                <td className="p-3">
                  <button className="px-2 py-1 border rounded-lg text-blue-600">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesPage;
