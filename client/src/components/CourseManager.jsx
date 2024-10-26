import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Eye, Edit, Trash, Settings } from 'lucide-react';

const CourseManager = () => {
  const [chapters, setChapters] = useState([
    {
      id: 1,
      title: 'Chapter 1',
      isExpanded: true,
      topics: [
        {
          id: 1,
          title: 'Topic 1',
          description: 'Course Content (Default)',
          isDefault: true,
          isExpanded: true
        }
      ]
    }
  ]);

  // Add new chapter
  const addChapter = () => {
    const newChapter = {
      id: chapters.length + 1,
      title: `Chapter ${chapters.length + 1}`,
      isExpanded: true,
      topics: [
        {
          id: 1,
          title: 'Topic 1',
          description: 'Course Content (Default)',
          isDefault: true,
          isExpanded: true
        }
      ]
    };
    setChapters([...chapters, newChapter]);
  };

  // Toggle chapter expansion
  const toggleChapter = (chapterId) => {
    setChapters(chapters.map(chapter => 
      chapter.id === chapterId 
        ? { ...chapter, isExpanded: !chapter.isExpanded }
        : chapter
    ));
  };

  // Add new topic to chapter
  const addTopic = (chapterId) => {
    setChapters(chapters.map(chapter => {
      if (chapter.id === chapterId) {
        const newTopic = {
          id: chapter.topics.length + 1,
          title: `Topic ${chapter.topics.length + 1}`,
          description: '',
          isDefault: false,
          isExpanded: true
        };
        return {
          ...chapter,
          topics: [...chapter.topics, newTopic]
        };
      }
      return chapter;
    }));
  };

  // Toggle topic expansion
  const toggleTopic = (chapterId, topicId) => {
    setChapters(chapters.map(chapter => {
      if (chapter.id === chapterId) {
        return {
          ...chapter,
          topics: chapter.topics.map(topic => 
            topic.id === topicId 
              ? { ...topic, isExpanded: !topic.isExpanded }
              : topic
          )
        };
      }
      return chapter;
    }));
  };

  // Delete topic
  const deleteTopic = (chapterId, topicId) => {
    setChapters(chapters.map(chapter => {
      if (chapter.id === chapterId) {
        return {
          ...chapter,
          topics: chapter.topics.filter(topic => topic.id !== topicId)
        };
      }
      return chapter;
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {chapters.map(chapter => (
        <div key={chapter.id} className="mb-4 border rounded">
          <div 
            className="flex items-center justify-between p-3 bg-red-200 cursor-pointer"
            onClick={() => toggleChapter(chapter.id)}
          >
            <span className="font-medium">{chapter.title}</span>
            <div className="flex items-center gap-2">
              <Settings size={16} />
              {chapter.isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>

          {chapter.isExpanded && (
            <div className="p-4">
              {chapter.topics.map(topic => (
                <div key={topic.id} className="mb-3">
                  <div 
                    className="flex items-center justify-between p-3 bg-blue-500 text-white cursor-pointer"
                    onClick={() => toggleTopic(chapter.id, topic.id)}
                  >
                    <span>{topic.title}</span>
                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      <Edit size={16} />
                      {!topic.isDefault && (
                        <Trash 
                          size={16}
                          className="cursor-pointer" 
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTopic(chapter.id, topic.id);
                          }}
                        />
                      )}
                      {topic.isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>

                  {topic.isExpanded && (
                    <div className="p-3 border border-gray-200 mt-1">
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Course Content"
                        value={topic.description}
                        onChange={(e) => {
                          const newDescription = e.target.value;
                          setChapters(chapters.map(c => {
                            if (c.id === chapter.id) {
                              return {
                                ...c,
                                topics: c.topics.map(t => 
                                  t.id === topic.id 
                                    ? { ...t, description: newDescription }
                                    : t
                                )
                              };
                            }
                            return c;
                          }));
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
              
              <button
                className="flex items-center gap-2 mt-2 text-blue-500"
                onClick={() => addTopic(chapter.id)}
              >
                <Plus size={16} />
                <span>Add Topic</span>
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        className="flex items-center gap-2 mt-4 text-red-500"
        onClick={addChapter}
      >
        <Plus size={16} />
        <span>Add Chapter</span>
      </button>
    </div>
  );
};

export default CourseManager;
