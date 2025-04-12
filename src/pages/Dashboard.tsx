import React from 'react';
import { toast } from 'react-hot-toast';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ApplicationCard } from '../components/dashboard/ApplicationCard';
import { ApplicationModal, ApplicationFormData } from '../components/applications/ApplicationModal';
import { ApplicationDetails } from '../components/applications/ApplicationDetails';
import { FadeIn } from '../components/ui/FadeIn';
import { getApplications, createApplication, updateApplication } from '../lib/applications';
import { Application } from '../types/application';
import { getSupabaseClient } from '../lib/supabase';

export const Dashboard = () => {
  const [applications, setApplications] = React.useState<Application[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedApplication, setSelectedApplication] = React.useState<Application | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const supabase = getSupabaseClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const apps = await getApplications(user.id);
      setApplications(apps);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewApplication = async (data: ApplicationFormData) => {
    try {
      const supabase = getSupabaseClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      await createApplication(user.id, data);
      await loadApplications();
      toast.success('Application created successfully');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleUpdateApplication = async (id: string, data: Partial<Application>) => {
    try {
      const supabase = getSupabaseClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const updated = await updateApplication(user.id, id, data);
      
      // Update both the applications list and the selected application
      setApplications(apps => apps.map(app => app.id === id ? updated : app));
      setSelectedApplication(current => current?.id === id ? updated : current);
      
      toast.success('Application updated successfully');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-dark p-6 text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-6xl mx-auto">
        <DashboardHeader onNewApplication={() => setIsModalOpen(true)} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application, index) => (
            <FadeIn key={application.id} delay={index * 0.1}>
              <ApplicationCard
                application={application}
                onView={() => setSelectedApplication(application)}
              />
            </FadeIn>
          ))}
        </div>

        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleNewApplication}
        />

        {selectedApplication && (
          <ApplicationDetails
            application={selectedApplication}
            isOpen={true}
            onClose={() => setSelectedApplication(null)}
            onUpdate={handleUpdateApplication}
          />
        )}
      </div>
    </div>
  );
};