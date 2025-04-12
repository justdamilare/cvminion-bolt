/*
  # Add job description column

  1. Changes
    - Add `job_description` column to `applications` table
    - Make it nullable initially to support existing records
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'applications' 
    AND column_name = 'job_description'
  ) THEN
    ALTER TABLE applications 
    ADD COLUMN job_description text;
  END IF;
END $$;