import React, { useState } from 'react';
import { Home, BookOpen, Users, PlusCircle, Settings, HelpCircle, LogOut, Search, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const courses = [
    { id: 1, name: 'Web Development', students: 120, progress: 65 },
    { id: 2, name: 'Data Science', students: 85, progress: 72 },
    { id: 3, name: 'Digital Marketing', students: 95, progress: 58 },
    { id: 4, name: 'UX Design', students: 70, progress: 80 },
  ];

  const recentAssignments = [
    { id: 1, course: 'Web Development', student: 'Alice Johnson', date: '2024-10-22' },
    { id: 2, course: 'Data Science', student: 'Bob Smith', date: '2024-10-23' },
    { id: 3, course: 'Digital Marketing', student: 'Charlie Brown', date: '2024-10-24' },
    { id: 4, course: 'UX Design', student: 'Diana Prince', date: '2024-10-25' },
  ];

  const handleCourse = () => {
    navigate('/course');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg flex flex-col transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <header className="p-4 flex items-center gap-2 border-b">
          <div className="h-8 w-8 rounded-full bg-blue-600"></div>
          <div className="hidden lg:block">
            <h1 className="text-sm font-semibold">CourseHub Admin</h1>
            <span className="text-xs text-gray-500">Manage & Assign</span>
          </div>
        </header>
        <nav className="flex-grow p-4 space-y-2">
          {[
            { icon: Home, label: 'Dashboard' },
            { onclick: handleCourse, icon: BookOpen, label: 'Courses' }, // Ensure onclick is called
            { icon: Users, label: 'Students' },
            { icon: PlusCircle, label: 'Assign Course' },
            { icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center w-full text-left p-2 rounded-lg ${
                activeItem === item.label ? 'bg-blue-100' : ''
              }`}
              onClick={() => {
                setActiveItem(item.label);
                if (item.onclick) item.onclick();
              }}
            >
              <item.icon className="h-5 w-5 mr-2" />
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </nav>
        <footer className="p-4 border-t space-y-2">
          <button className="flex items-center w-full text-left p-2 rounded-lg">
            <HelpCircle className="h-5 w-5 mr-2" />
            <span className="hidden lg:inline">Help</span>
          </button>
          <button className="flex items-center w-full text-left p-2 rounded-lg">
            <LogOut className="h-5 w-5 mr-2" />
            <span className="hidden lg:inline">Sign Out</span>
          </button>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-6 overflow-y-auto lg:pl-64">
        {/* Toggle button for small screens */}
        <header className="flex justify-between items-center mb-4 lg:mb-6">
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold lg:text-2xl">{activeItem}</h1>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="pl-10 pr-4 py-2 w-full border rounded-lg"
              placeholder="Search courses or students..."
            />
          </div>
        </header>

        {/* Statistics Section */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {[
            { title: 'Total Courses', description: 'Active courses on the platform', count: courses.length },
            { title: 'Total Students', description: 'Enrolled across all courses', count: courses.reduce((sum, course) => sum + course.students, 0) },
            { title: 'Average Progress', description: 'Across all courses', count: Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length) + '%' },
            { title: 'Recent Assignments', description: 'In the last 7 days', count: recentAssignments.length },
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-sm font-semibold">{stat.title}</h2>
              <p className="text-gray-500 text-xs mb-2">{stat.description}</p>
              <p className="text-2xl lg:text-3xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Course Overview Section */}
        <section>
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Course Overview</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-3 text-sm lg:text-base">Course Name</th>
                  <th className="p-3 text-sm lg:text-base">Enrolled Students</th>
                  <th className="p-3 text-sm lg:text-base">Progress</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td className="p-3 border-b">{course.name}</td>
                    <td className="p-3 border-b">{course.students}</td>
                    <td className="p-3 border-b">{course.progress}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Assignments Section */}
        <section className="mt-6">
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Recent Assignments</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-3 text-sm lg:text-base">Course</th>
                  <th className="p-3 text-sm lg:text-base">Student</th>
                  <th className="p-3 text-sm lg:text-base">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentAssignments.map(assignment => (
                  <tr key={assignment.id}>
                    <td className="p-3 border-b">{assignment.course}</td>
                    <td className="p-3 border-b">{assignment.student}</td>
                    <td className="p-3 border-b">{assignment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}