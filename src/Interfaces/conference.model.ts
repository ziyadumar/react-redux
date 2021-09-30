export interface ConferenceModel {
    id:          number;
    description: string;
    url:         string;
    types:       string[];
    topics:      string[];
    levels:      Level[];
}

export enum Level {
    Advanced = "advanced",
    Beginner = "beginner",
    Intermediate = "intermediate",
}