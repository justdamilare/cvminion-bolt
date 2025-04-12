import React, { useState } from 'react';
import { Check, X, Edit2 } from 'lucide-react';

interface EditableFieldProps {
  value: string;
  onSave: (value: string) => Promise<void>;
  className?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  optional?: boolean;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  value,
  onSave,
  className = '',
  icon,
  placeholder,
  optional = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!editValue.trim() && !optional) return;
    
    setLoading(true);
    try {
      await onSave(editValue.trim());
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        {icon && <span className="text-gray-400">{icon}</span>}
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="bg-dark text-white px-2 py-1 rounded focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder={placeholder}
          autoFocus
        />
        <button
          onClick={handleSave}
          disabled={loading || (!editValue.trim() && !optional)}
          className="text-green-400 hover:text-green-300 disabled:opacity-50"
        >
          <Check className="w-4 h-4" />
        </button>
        <button
          onClick={handleCancel}
          disabled={loading}
          className="text-red-400 hover:text-red-300 disabled:opacity-50"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="group relative inline-flex items-center gap-2">
      {icon && <span className="text-gray-400">{icon}</span>}
      <span className={`${className} ${!value && 'text-gray-500 italic'}`}>
        {value || placeholder || 'Click to edit...'}
      </span>
      <button
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white ml-2"
      >
        <Edit2 className="w-4 h-4" />
      </button>
    </div>
  );
};