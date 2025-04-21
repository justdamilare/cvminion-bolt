import React, { useState } from 'react';
import { Save, X, Plus, Trash2 } from 'lucide-react';
import { Application } from '../../types/application';
import { toast } from 'react-hot-toast';

interface ResumeEditorProps {
  resume: NonNullable<Application['generatedResume']>['tailored_resume'];
  onSave: (resume: NonNullable<Application['generatedResume']>['tailored_resume']) => Promise<void>;
  onCancel: () => void;
}

export const ResumeEditor: React.FC<ResumeEditorProps> = ({
  resume,
  onSave,
  onCancel,
}) => {
  const [editedResume, setEditedResume] = useState(resume);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await onSave(editedResume);
      toast.success('Resume updated successfully');
    } catch (err) {
      console.error('Failed to update resume:', err);
      toast.error('Failed to update resume');
    } finally {
      setLoading(false);
    }
  };

  const updateExperience = (index: number, field: keyof NonNullable<Application['generatedResume']>['tailored_resume']['experience'][0], value: string | string[]) => {
    setEditedResume(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const updateEducation = (index: number, field: keyof NonNullable<Application['generatedResume']>['tailored_resume']['education'][0], value: string | string[]) => {
    setEditedResume(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addLanguage = () => {
    setEditedResume(prev => ({
      ...prev,
      languages: [...(prev.languages || []), { name: '', level: 'Intermediate' }]
    }));
  };

  const updateLanguage = (index: number, field: string, value: string) => {
    setEditedResume(prev => ({
      ...prev,
      languages: (prev.languages || []).map((lang, i) => 
        i === index ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const removeLanguage = (index: number) => {
    setEditedResume(prev => ({
      ...prev,
      languages: (prev.languages || []).filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    setEditedResume(prev => ({
      ...prev,
      skills: [...prev.skills, { name: '', level: 'Intermediate' }]
    }));
  };

  const updateSkill = (index: number, field: string, value: string) => {
    setEditedResume(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => 
        i === index ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (index: number) => {
    setEditedResume(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addProject = () => {
    setEditedResume(prev => ({
      ...prev,
      projects: [...(prev.projects || []), { 
        title: '', 
        description: '',
        start_date: '',
        end_date: ''
      }]
    }));
  };

  const updateProject = (index: number, field: keyof NonNullable<Application['generatedResume']>['tailored_resume']['projects'][0], value: string) => {
    setEditedResume(prev => ({
      ...prev,
      projects: (prev.projects || []).map((proj, i) => 
        i === index ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const removeProject = (index: number) => {
    setEditedResume(prev => ({
      ...prev,
      projects: (prev.projects || []).filter((_, i) => i !== index)
    }));
  };

  const addCertification = () => {
    setEditedResume(prev => ({
      ...prev,
      certifications: [...(prev.certifications || []), { 
        name: '', 
        organization: '',
      }]
    }));
  };

  const updateCertification = (index: number, field: keyof NonNullable<Application['generatedResume']>['tailored_resume']['certifications'][0], value: string) => {
    setEditedResume(prev => ({
      ...prev,
      certifications: (prev.certifications || []).map((cert, i) => 
        i === index ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const removeCertification = (index: number) => {
    setEditedResume(prev => ({
      ...prev,
      certifications: (prev.certifications || []).filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="bg-dark-light p-6 rounded-lg space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Edit Resume</h3>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-dark rounded-lg hover:bg-primary-dark disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-dark text-white rounded-lg hover:bg-dark/80 disabled:opacity-50"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <input
              type="text"
              value={editedResume.full_name}
              onChange={(e) => setEditedResume(prev => ({ ...prev, full_name: e.target.value }))}
              className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              value={editedResume.email}
              onChange={(e) => setEditedResume(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={editedResume.phone_number}
              onChange={(e) => setEditedResume(prev => ({ ...prev, phone_number: e.target.value }))}
              className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Location
            </label>
            <input
                type="text"
                value={editedResume.address}
              onChange={(e) => setEditedResume(prev => ({ ...prev, address: e.target.value }))}
              className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Summary
          </label>
          <textarea
            value={editedResume.summary}
            onChange={(e) => setEditedResume(prev => ({ ...prev, summary: e.target.value }))}
            className="w-full h-32 bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
          />
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-white font-medium mb-4">Experience</h4>
          {editedResume.experience.map((exp, index) => (
            <div key={index} className="bg-dark p-4 rounded-lg mb-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(index, 'position', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={exp.start_date}
                    onChange={(e) => updateExperience(index, 'start_date', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={exp.end_date}
                    onChange={(e) => updateExperience(index, 'end_date', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => updateExperience(index, 'location', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Key Achievements
                </label>
                <textarea
                  value={exp.key_achievements.join('\n')}
                  onChange={(e) => updateExperience(index, 'key_achievements', e.target.value.split('\n'))}
                  className="w-full h-32 bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  placeholder="One achievement per line"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Responsibilities
                </label>
                <textarea
                  value={exp.responsibilities.join('\n')}
                  onChange={(e) => updateExperience(index, 'responsibilities', e.target.value.split('\n'))}
                  className="w-full h-32 bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  placeholder="One responsibility per line"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h4 className="text-white font-medium mb-4">Education</h4>
          {editedResume.education.map((edu, index) => (
            <div key={index} className="bg-dark p-4 rounded-lg mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={edu.start_date}
                    onChange={(e) => updateEducation(index, 'start_date', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={edu.end_date}
                    onChange={(e) => updateEducation(index, 'end_date', e.target.value)}
                    className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-white font-medium">Skills</h4>
            <button
              onClick={addSkill}
              className="text-primary hover:text-primary-dark"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {editedResume.skills.map((skill, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(index, 'name', e.target.value)}
                  className="flex-1 bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Skill name"
                />
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(index, 'level', e.target.value)}
                  className="bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
                <button
                  onClick={() => removeSkill(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-white font-medium">Languages</h4>
            <button
              onClick={addLanguage}
              className="text-primary hover:text-primary-dark"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(editedResume.languages || []).map((language, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={language.name}
                  onChange={(e) => updateLanguage(index, 'name', e.target.value)}
                  className="flex-1 bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Language name"
                />
                <select
                  value={language.level}
                  onChange={(e) => updateLanguage(index, 'level', e.target.value)}
                  className="bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                  <option value="Native">Native</option>
                </select>
                <button
                  onClick={() => removeLanguage(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-white font-medium">Projects</h4>
            <button
              onClick={addProject}
              className="text-primary hover:text-primary-dark"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {(editedResume.projects || []).map((project, index) => (
              <div key={index} className="bg-dark p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Project Title
                    </label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => updateProject(index, 'title', e.target.value)}
                      className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Description
                    </label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      className="w-full h-24 bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Start Date
                    </label>
                    <input
                      type="text"
                      value={project.start_date || ''}
                      onChange={(e) => updateProject(index, 'start_date', e.target.value)}
                      className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      End Date
                    </label>
                    <input
                      type="text"
                      value={project.end_date || ''}
                      onChange={(e) => updateProject(index, 'end_date', e.target.value)}
                      className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeProject(index)}
                  className="mt-4 text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-white font-medium">Certifications</h4>
            <button
              onClick={addCertification}
              className="text-primary hover:text-primary-dark"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {(editedResume.certifications || []).map((certification, index) => (
              <div key={index} className="bg-dark p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Certification Name
                    </label>
                    <input
                      type="text"
                      value={certification.name}
                      onChange={(e) => updateCertification(index, 'name', e.target.value)}
                      className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={certification.organization || ''}
                      onChange={(e) => updateCertification(index, 'organization', e.target.value)}
                      className="w-full bg-dark-light text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeCertification(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
