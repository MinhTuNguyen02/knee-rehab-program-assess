export type Zone = 'green' | 'amber' | 'red';

export interface AssessmentResponse {
  id: string;
  display_id: number;
  pain: number;
  functionScore: number;
  score: number;
  zone: Zone;
  timestamp: string;
  source?: string;
  entry_type?: string;
}

export interface NotificationPrefs {
  followUpKRP: boolean;
  kneeGuidance: boolean;
  reassessReminder: boolean;
}

export interface OptInFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  age: number;
  gender: 'male' | 'female' | 'other' | '';
  kneeSide: 'left' | 'right' | 'both' | '';
  consentAccepted: boolean;
  notificationPrefs: NotificationPrefs;
}
