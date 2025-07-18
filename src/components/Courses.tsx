import React from 'react';
import { courses } from '../data/portfolio';
import { Code, Brain } from 'lucide-react';

const Courses: React.FC = () => {
  const programmingCourses = courses.filter(course => course.category === 'programming');
  const mlQuantumCourses = courses.filter(course => course.category === 'ml-quantum');

  const CourseCard: React.FC<{ course: typeof courses[0] }> = ({ course }) => (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
        <img
          src={course.icon}
          alt={course.provider}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center hidden">
          <Code size={16} className="text-blue-600" />
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{course.title}</h4>
        <p className="text-sm text-gray-600">{course.provider}</p>
      </div>
    </div>
  );

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-2">Explore</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Courses</h2>
          <p className="text-lg text-gray-600">I've Completed</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming Courses */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Programming</h3>
            </div>
            <div className="space-y-4">
              {programmingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* ML & Quantum Computing Courses */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Machine Learning & <br />Quantum Computing
              </h3>
            </div>
            <div className="space-y-4">
              {mlQuantumCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;