import { Plus, X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Project } from "../../types/profile";


interface ProjectSectionProps {
  projects: Project[];
  onUpdate: (data: { projects: Project[] }) => Promise<void>;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, onUpdate }) => {
  const [newProject, setNewProject] = useState('');
  
  const handleAddProject = async () => {
    if (!newProject.trim()) return;

    // Check for duplicates
    if (projects.some(project => project.title.toLowerCase() === newProject.trim().toLowerCase())) {
      toast.error('This project is already added');
      return;
    }

    try {
      await onUpdate({
        projects: [...projects, {
          id: crypto.randomUUID(),
          title: newProject.trim(),
          start_date: '',
          end_date: '',
        }]
      });
      setNewProject('');
      toast.success('Project added successfully');
    } catch (error: any) {
      toast.error('Failed to add project: ' + error.message);
    }
  };

  const handleRemoveProject = async (id: string) => {
    try {
      await onUpdate({
        projects: projects.filter(project => project.id !== id)
      });
      toast.success('Project removed successfully');
    } catch (error: any) {
      toast.error('Failed to remove project: ' + error.message);
    }
  };

  return (
    <div className="space-y-4">

        <h2 className="text-xl font-bold text-white">Projects</h2>
        <div className="flex gap-4">
       <input 
        type="text"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        className="flex-1 bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        placeholder="Add a project..."
      />
      <button
        onClick={handleAddProject}
        disabled={!newProject.trim()}
        className="bg-primary text-dark px-4 py-2 rounded-lg hover:bg-primary-dark disabled:opacity-50"
      >
        <Plus className="w-5 h-5" />
      </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {projects.map(project => (
          <div
            key={project.id}
            className="flex items-center gap-2 bg-dark-light text-white px-3 py-1 rounded-full"
          >
            <span>{project.title}</span>
            <button
              onClick={() => handleRemoveProject(project.id)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

