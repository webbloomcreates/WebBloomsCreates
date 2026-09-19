/**
 * WebBloom Project Request Submission Service
 * Centralized service to handle project request validation, submission,
 * local storage persistence for retrieval, and API integration endpoints.
 */

const STORAGE_KEY = 'webbloom_project_inquiries';

/**
 * Validate project request payload
 */
export function validateProjectRequest(formData) {
  const errors = {};

  if (!formData.projectType) {
    errors.projectType = 'Please select what you are looking to build.';
  }

  if (!formData.projectDescription || !formData.projectDescription.trim()) {
    errors.projectDescription = 'Please tell us a little bit about your project idea.';
  }

  if (!formData.preferredContactMethod) {
    errors.preferredContactMethod = 'Please choose how you would like us to reach you.';
  }

  if (!formData.contactValue || !formData.contactValue.trim()) {
    if (formData.preferredContactMethod === 'Instagram') {
      errors.contactValue = 'Please enter your Instagram username.';
    } else if (formData.preferredContactMethod === 'WhatsApp') {
      errors.contactValue = 'Please enter your WhatsApp number.';
    } else {
      errors.contactValue = 'Please enter your email address.';
    }
  } else if (formData.preferredContactMethod === 'Email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactValue.trim())) {
    errors.contactValue = 'Please enter a valid email address.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Submit project request
 * Persists to LocalStorage for offline/demo retrieval and prepares API payload for backend.
 */
export async function submitProjectRequest(formData) {
  const validation = validateProjectRequest(formData);

  if (!validation.isValid) {
    throw new Error(Object.values(validation.errors)[0] || 'Please complete all required fields.');
  }

  // Construct structured API submission payload
  const payload = {
    id: `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    submittedAt: new Date().toISOString(),
    projectType: formData.projectType || 'New Website',
    selectedPackage: formData.selectedPackage || 'NOT SURE YET',
    requestedFeatures: formData.requestedFeatures || [],
    projectDescription: formData.projectDescription.trim(),
    additionalNotes: formData.additionalNotes?.trim() || null,
    contact: {
      name: formData.clientName?.trim() || null,
      preferredContactMethod: formData.preferredContactMethod || 'Instagram',
      contactValue: formData.contactValue.trim()
    },
    status: 'Pending Review'
  };

  // 1. Persist submission locally for browser retrieval
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.unshift(payload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }

  // 2. Integration point for Backend API / Webhook / Email Service
  // In production, set VITE_PROJECT_API_ENDPOINT in .env
  const apiEndpoint = import.meta.env.VITE_PROJECT_API_ENDPOINT;

  if (apiEndpoint) {
    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        console.warn('API endpoint returned non-200 status');
      }
    } catch (apiErr) {
      console.warn('Backend API request error:', apiErr);
    }
  } else {
    // Simulated network delay for smooth UX loading state
    await new Promise((resolve) => setTimeout(resolve, 800));
  }

  return { success: true, payload };
}

/**
 * Retrieve saved project requests (For studio dashboard / local retrieval)
 */
export function getSavedProjectRequests() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
