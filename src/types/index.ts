export interface Conversation {
  users: string[];
}

export interface AppUser {
  email: string;
  lastSeen: TimeRanges;
  photoURL: string;
}
