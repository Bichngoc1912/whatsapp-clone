export interface Conversation {
  users: string[];
}

export interface AppUser {
  email: string;
  lastSeen: TimeRanges;
  photoURL: string;
}

export interface IMessage {
  id: string;
  conversation_id: string;
  text: string;
  sent_at: string;
  user: string;
}