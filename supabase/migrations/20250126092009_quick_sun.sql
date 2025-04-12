-- Add languages column to profiles table
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS languages jsonb[] DEFAULT ARRAY[]::jsonb[];

-- Update trigger to handle the new column
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();