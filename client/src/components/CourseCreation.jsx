import React from 'react';
import { Upload } from 'lucide-react';

export default function CourseCreation() {
  // Steps for the course creation process
  const steps = ['Course Information & FAQ', 'Upload Course Materials', 'Pricing', 'Publish'];

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      {/* Steps Navigation */}
      <div className="mb-8">
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500">
          {steps.map((step, index) => (
            <li key={index} className={`flex items-center ${index === 0 ? 'text-primary' : ''}`}>
              <span className="flex items-center">
                {index === 0 ? (
                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                ) : (
                  <span className="mr-2">{index + 1}</span>
                )}
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Course Information Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Course Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                placeholder="e.g. Introduction to Data Analysis"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <select id="category" className="border rounded p-2 w-full">
                <option value="">Select a category</option>
                <option value="data-management">Data Management</option>
                <option value="programming">Programming</option>
                <option value="design">Design</option>
              </select>
            </div>
            <div>
              <label htmlFor="level">Level</label>
              <select id="level" className="border rounded p-2 w-full">
                <option value="">Select a level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Enter course description"
                className="border rounded p-2 w-full"
              ></textarea>
            </div>
          </div>

          {/* FAQs Section */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <input
                placeholder="e.g. Do you offer 1:1 calls"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <input
                placeholder="e.g. Yes at a fixed cost per call"
                className="border rounded p-2 w-full"
              />
            </div>
            <button className="border rounded p-2 w-full">+ Add FAQ</button>
          </div>
        </div>

        {/* Upload Materials Section */}
        <div>
          {/* Cover Image Upload */}
          <div className="mb-6 border rounded p-4">
            <h3 className="font-semibold mb-2">Cover Image</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto mb-2" />
              <button className="border rounded p-2">Upload</button>
            </div>
          </div>

          {/* Sales Video Upload */}
          <div className="border rounded p-4">
            <h3 className="font-semibold mb-2">Sales Video</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto mb-2" />
              <button className="border rounded p-2">Upload</button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Options */}
      <div className="mt-8 flex justify-between">
        <button className="border rounded p-2">Save As Draft</button>
        <button className="border rounded p-2">Save & Continue</button>
      </div>
    </div>
  );
}
