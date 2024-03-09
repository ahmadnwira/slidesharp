-- Step 0: Adds pitch_decks, summary_reports and slide_by_slide tables
CREATE TABLE pitch_decks (
    id SERIAL PRIMARY KEY, -- Auto-incrementing ID
    pitch_name text,
    file_url text, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id UUID NOT NULL, -- User ID from supabase auth.users table
    FOREIGN KEY (user_id) REFERENCES auth.users(id) -- Foreign key constraint
);

CREATE TABLE summary_reports (
    id SERIAL PRIMARY KEY, -- Auto-incrementing ID
    pitch_deck_id INTEGER NOT NULL,
    summary_text TEXT,
    overall_rating TEXT,  
    team_experience TEXT,
    market_potential TEXT,
    flow_of_the_pitch TEXT,
    strengths TEXT, 
    weaknesses TEXT, 
    areas_of_improvement TEXT, 
    recommendations TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pitch_deck_id) REFERENCES pitch_decks(id)
);

CREATE TABLE slide_by_slide_reports (
    id SERIAL PRIMARY KEY, -- Auto-incrementing ID
    pitch_deck_id INTEGER NOT NULL,
    slide_number INTEGER,
    slide_title TEXT, 
    slide_function TEXT, 
    feedback TEXT,
    suggestions TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pitch_deck_id) REFERENCES pitch_decks(id)
);