/*
  # Update profiles table schema

  1. Changes
    - Add new columns for social links and title
    - Add JSON columns for education, experience, and skills
    - Add trigger to update updated_at timestamp

  2. Security
    - Maintain existing RLS policies
*/

-- Add new columns
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS title text,
ADD COLUMN IF NOT EXISTS website text,
ADD COLUMN IF NOT EXISTS linkedin text,
ADD COLUMN IF NOT EXISTS github text,
ADD COLUMN IF NOT EXISTS education jsonb[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS experience jsonb[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS skills jsonb[] DEFAULT '{}';

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger to profiles table
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();