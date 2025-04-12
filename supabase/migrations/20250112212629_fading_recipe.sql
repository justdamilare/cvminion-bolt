/*
  # Add Generated Resume Storage

  1. New Columns
    - `generated_resume` - Stores the complete generated resume JSON
    - `last_generated_at` - Timestamp of last resume generation

  2. Changes
    - Add columns to applications table
    - Add trigger to update last_generated_at
*/

ALTER TABLE applications
ADD COLUMN IF NOT EXISTS generated_resume jsonb,
ADD COLUMN IF NOT EXISTS last_generated_at timestamptz;