import { AssessmentResponse, OptInFormData } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function submitAssessment(pain: number, func: number): Promise<AssessmentResponse> {
  const response = await fetch(`${API_BASE_URL}/assessments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pain, function: func }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to submit assessment');
  }

  return response.json();
}

export async function submitOptIn(
  formData: OptInFormData,
  assessmentId?: string
): Promise<any> {
  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    mobile: formData.mobile,
    age: Number(formData.age),
    gender: formData.gender,
    kneeSide: formData.kneeSide === 'left' ? 'L' : formData.kneeSide === 'right' ? 'R' : 'both',
    consentAccepted: formData.consentAccepted,
    notificationPrefs: formData.notificationPrefs,
    ...(assessmentId ? { assessmentId } : {}),
  };

  const response = await fetch(`${API_BASE_URL}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to submit registration');
  }

  return response.json();
}
