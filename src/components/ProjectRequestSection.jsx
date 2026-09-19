import React, { useState, useEffect } from 'react';
import { Check, Send, Instagram, Mail, CheckCircle2, Loader2, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { submitProjectRequest } from '../services/projectService';
import { studioInfo } from '../data/studioData';
import ScrollReveal from './ScrollReveal';

export default function ProjectRequestSection({ preselectedPackage }) {
  const [formData, setFormData] = useState({
    clientName: '',
    businessName: '',
    service: 'Basic Website',
    projectType: 'Basic Website',
    selectedPackage: 'Basic Website',
    requestedFeatures: [],
    projectDescription: '',
    hasExistingWebsite: 'No',
    existingWebsiteUrl: '',
    preferredContactMethod: 'Instagram',
    contactValue: '',
    budget: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Basic Website',
    'Standard Website',
    'Premium Website',
    'E-commerce Website',
    'Event Website',
    'Website Redesign',
    'Custom Project'
  ];

  // Sync package/service preselection if prop updates
  useEffect(() => {
    if (preselectedPackage) {
      let pkgStr = typeof preselectedPackage === 'string' ? preselectedPackage : preselectedPackage.package || preselectedPackage.serviceName || '';

      let matchedService = '';
      if (pkgStr.includes('Basic') || pkgStr.includes('2,999')) {
        matchedService = 'Basic Website';
      } else if (pkgStr.includes('Standard') || pkgStr.includes('4,999')) {
        matchedService = 'Standard Website';
      } else if (pkgStr.includes('Premium') || pkgStr.includes('9,999')) {
        matchedService = 'Premium Website';
      } else if (pkgStr.includes('E-commerce') || pkgStr.includes('Store') || pkgStr.includes('commerce')) {
        matchedService = 'E-commerce Website';
      } else if (pkgStr.includes('Event')) {
        matchedService = 'Event Website';
      } else if (pkgStr.includes('Redesign')) {
        matchedService = 'Website Redesign';
      } else if (pkgStr.includes('Custom')) {
        matchedService = 'Custom Project';
      } else {
        const found = serviceOptions.find((s) => s.toLowerCase() === pkgStr.toLowerCase());
        if (found) matchedService = found;
      }

      if (matchedService) {
        setFormData((prev) => ({
          ...prev,
          service: matchedService,
          selectedPackage: matchedService,
          projectType: matchedService
        }));
      }
    }
  }, [preselectedPackage]);

  const projectTypesList = [
    'New Website',
    'Website Redesign',
    'Landing Page',
    'Portfolio Website',
    'E-commerce Website',
    'Custom Website'
  ];

  const packagesList = [
    'Essential — ₹3,000',
    'Business — ₹5,000',
    'Business Pro — ₹10,000',
    'E-commerce — From ₹12,000',
    'Not sure yet'
  ];

  const featuresList = [
    'About / Business Information',
    'Services',
    'Portfolio / Gallery',
    'Products',
    'Contact / Enquiries',
    'WhatsApp Integration',
    'Booking',
    'Online Payments',
    'Admin Dashboard',
    'Blog',
    'Other'
  ];

  const budgetOptions = [
    '₹3,000 – ₹5,000',
    '₹5,000 – ₹10,000',
    '₹10,000 – ₹15,000+',
    'Not sure yet'
  ];

  const toggleFeature = (chip) => {
    if (formData.requestedFeatures.includes(chip)) {
      setFormData((prev) => ({
        ...prev,
        requestedFeatures: prev.requestedFeatures.filter((f) => f !== chip)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        requestedFeatures: [...prev.requestedFeatures, chip]
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.clientName.trim()) {
      newErrors.clientName = 'Please enter your name.';
    }
    if (!formData.projectType) {
      newErrors.projectType = 'Please select what you would like to build.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please tell us about your project.';
    }
    if (!formData.preferredContactMethod) {
      newErrors.preferredContactMethod = 'Please choose a preferred contact method.';
    }

    if (!formData.contactValue.trim()) {
      newErrors.contactValue =
        formData.preferredContactMethod === 'Instagram'
          ? 'Please enter your Instagram username.'
          : 'Please enter your email address.';
    } else if (formData.preferredContactMethod === 'Email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactValue.trim())) {
      newErrors.contactValue = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitProjectRequest(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setErrors({ submit: err.message || 'Failed to send inquiry. Please try again.' });
    }
  };

  return (
    <section
      id="project"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        scrollMarginTop: '80px'
      }}
    >
      {/* Anchor duplicate for #contact links */}
      <div id="contact" style={{ position: 'absolute', top: '-80px' }} />

      <div className="container" style={{ maxWidth: '1180px' }}>
        {/* Section Header Label */}
        <ScrollReveal>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="subheading">START A PROJECT</span>
          </div>
        </ScrollReveal>

        {/* Desktop Two-Column Layout / Mobile Stacked Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start'
          }}
        >
          {/* LEFT SIDE: Heading & Contact Info */}
          <ScrollReveal delay={0.1}>
            <div>
              <h2
                className="heading"
                style={{
                  fontSize: 'clamp(2.5rem, 4.8vw, 4rem)',
                  lineHeight: '1.08',
                  marginBottom: '1.5rem',
                  color: 'var(--forest)'
                }}
              >
                Have an idea? <br />
                <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--sage)' }}>
                  Let's build it.
                </span>
              </h2>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--charcoal-light)',
                  lineHeight: '1.65',
                  marginBottom: '3rem',
                  maxWidth: '480px'
                }}
              >
                Tell us what you're looking to build and we'll get back to you with the next steps.
              </p>

              {/* Direct Contact Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-medium)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: '2rem'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    color: 'var(--forest)',
                    marginBottom: '1.25rem'
                  }}
                >
                  Let's talk about your project.
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  {/* Instagram Direct Link */}
                  <a
                    href={studioInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      color: 'var(--forest)',
                      textDecoration: 'none',
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--forest)';
                      e.currentTarget.style.backgroundColor = 'var(--sage-tint)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--sage-tint)',
                        color: 'var(--forest)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Instagram size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        INSTAGRAM DM
                      </span>
                      <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--forest)' }}>
                        {studioInfo.handle}
                      </span>
                    </div>
                  </a>

                  {/* Email Direct Link */}
                  <a
                    href={`mailto:${studioInfo.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      color: 'var(--forest)',
                      textDecoration: 'none',
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--forest)';
                      e.currentTarget.style.backgroundColor = 'var(--sage-tint)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--sage-tint)',
                        color: 'var(--forest)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        DIRECT EMAIL
                      </span>
                      <span style={{ fontSize: '0.96rem', fontWeight: '700', color: 'var(--forest)' }}>
                        {studioInfo.email}
                      </span>
                    </div>
                  </a>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--charcoal-muted)', lineHeight: '1.5' }}>
                  Prefer to message us directly? You can reach us on Instagram or email.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: The Project Inquiry Form Card */}
          <ScrollReveal delay={0.2}>
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-medium)',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}
            >
              {isSubmitted ? (
                /* CONFIRMATION SUCCESS MESSAGE */
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--sage-tint)',
                      color: 'var(--forest)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                      border: '1px solid rgba(163, 194, 158, 0.5)'
                    }}
                  >
                    <CheckCircle2 size={40} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2.2rem, 3.8vw, 2.8rem)',
                      color: 'var(--forest)',
                      marginBottom: '0.75rem',
                      lineHeight: '1.2'
                    }}
                  >
                    Thanks for reaching out!
                  </h3>

                  <p
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--charcoal-light)',
                      lineHeight: '1.65',
                      maxWidth: '520px',
                      margin: '0 auto 2rem auto'
                    }}
                  >
                    Your project inquiry has been received. We'll review your idea and get back to you through your preferred contact method.
                  </p>

                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      padding: '1.5rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      marginBottom: '2rem',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--forest)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>
                      DIRECT CONTACT CHANNELS:
                    </span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <a
                        href={studioInfo.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--forest)', fontWeight: '600', fontSize: '0.92rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <Instagram size={16} /> Instagram: {studioInfo.handle}
                      </a>
                      <a
                        href={`mailto:${studioInfo.email}`}
                        style={{ color: 'var(--forest)', fontWeight: '600', fontSize: '0.92rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <Mail size={16} /> Email: {studioInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        clientName: '',
                        businessName: '',
                        projectType: 'New Website',
                        selectedPackage: '',
                        requestedFeatures: [],
                        projectDescription: '',
                        hasExistingWebsite: 'No',
                        existingWebsiteUrl: '',
                        preferredContactMethod: 'Instagram',
                        contactValue: '',
                        budget: '',
                        additionalNotes: ''
                      });
                    }}
                    className="btn-primary"
                    style={{ padding: '0.95rem 2.2rem' }}
                  >
                    Submit Another Inquiry →
                  </button>
                </div>
              ) : (
                /* MAIN INQUIRY FORM */
                <form onSubmit={handleSubmit} noValidate>
                  {/* Global Error Banner if any */}
                  {errors.submit && (
                    <div
                      style={{
                        backgroundColor: '#FDF2F2',
                        border: '1px solid #F87171',
                        color: '#991B1B',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.75rem',
                        fontSize: '0.9rem'
                      }}
                    >
                      {errors.submit}
                    </div>
                  )}

                  {/* 1. YOUR NAME * */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      1. YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid',
                        borderColor: errors.clientName ? '#E53E3E' : 'var(--border-medium)',
                        backgroundColor: 'var(--bg-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--charcoal)'
                      }}
                    />
                    {errors.clientName && (
                      <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                        {errors.clientName}
                      </span>
                    )}
                  </div>

                  {/* 2. BUSINESS / BRAND NAME */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      2. BUSINESS / BRAND NAME <span style={{ fontWeight: '400', color: 'var(--charcoal-muted)' }}>(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your business or brand"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--charcoal)'
                      }}
                    />
                  </div>

                  {/* 3. CHOOSE SERVICE * */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.6rem' }}>
                      3. CHOOSE SERVICE *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        name="service"
                        value={formData.service || formData.selectedPackage || 'Basic Website'}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData((prev) => ({
                            ...prev,
                            service: val,
                            selectedPackage: val,
                            projectType: val
                          }));
                        }}
                        style={{
                          width: '100%',
                          padding: '0.9rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid var(--forest)',
                          backgroundColor: 'var(--bg-primary)',
                          fontSize: '0.98rem',
                          fontWeight: '600',
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--forest)',
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23173322' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 5. WHAT SHOULD YOUR WEBSITE INCLUDE? */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.6rem' }}>
                      5. WHAT SHOULD YOUR WEBSITE INCLUDE? <span style={{ fontWeight: '400', color: 'var(--charcoal-muted)' }}>(Optional)</span>
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {featuresList.map((chip) => {
                        const isSelected = formData.requestedFeatures.includes(chip);
                        return (
                          <button
                            type="button"
                            key={chip}
                            onClick={() => toggleFeature(chip)}
                            style={{
                              padding: '0.45rem 0.95rem',
                              borderRadius: 'var(--radius-pill)',
                              fontSize: '0.83rem',
                              fontWeight: '600',
                              border: '1.5px solid',
                              borderColor: isSelected ? 'var(--forest)' : 'var(--border-medium)',
                              backgroundColor: isSelected ? 'var(--forest)' : 'var(--bg-primary)',
                              color: isSelected ? '#ffffff' : 'var(--charcoal)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {isSelected && <Check size={12} />}
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 6. TELL US ABOUT YOUR PROJECT * */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      6. TELL US ABOUT YOUR PROJECT *
                    </label>
                    <textarea
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Tell us about your business, your idea, what you want the website to achieve, or any references you have in mind..."
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid',
                        borderColor: errors.projectDescription ? '#E53E3E' : 'var(--border-medium)',
                        backgroundColor: 'var(--bg-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--charcoal)',
                        resize: 'vertical'
                      }}
                    />
                    {errors.projectDescription && (
                      <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                        {errors.projectDescription}
                      </span>
                    )}
                  </div>

                  {/* 7. DO YOU ALREADY HAVE A WEBSITE? */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.5rem' }}>
                      7. DO YOU ALREADY HAVE A WEBSITE? <span style={{ fontWeight: '400', color: 'var(--charcoal-muted)' }}>(Optional)</span>
                    </label>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {['Yes', 'No'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, hasExistingWebsite: opt })}
                          style={{
                            padding: '0.5rem 1.4rem',
                            borderRadius: 'var(--radius-pill)',
                            fontSize: '0.86rem',
                            fontWeight: '600',
                            border: '1.5px solid',
                            borderColor: formData.hasExistingWebsite === opt ? 'var(--forest)' : 'var(--border-medium)',
                            backgroundColor: formData.hasExistingWebsite === opt ? 'var(--forest)' : 'var(--bg-primary)',
                            color: formData.hasExistingWebsite === opt ? '#ffffff' : 'var(--charcoal)',
                            cursor: 'pointer'
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {formData.hasExistingWebsite === 'Yes' && (
                      <div style={{ marginTop: '0.75rem' }}>
                        <input
                          type="url"
                          name="existingWebsiteUrl"
                          value={formData.existingWebsiteUrl}
                          onChange={handleChange}
                          placeholder="Current website URL (e.g. https://yourwebsite.com)"
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-medium)',
                            backgroundColor: 'var(--bg-primary)',
                            fontSize: '0.92rem',
                            fontFamily: 'var(--font-sans)',
                            color: 'var(--charcoal)'
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* 8. YOUR PREFERRED CONTACT METHOD * */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.5rem' }}>
                      8. YOUR PREFERRED CONTACT METHOD *
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.85rem' }}>
                      {[
                        { id: 'Instagram', label: 'Instagram', icon: Instagram },
                        { id: 'Email', label: 'Email', icon: Mail }
                      ].map((method) => {
                        const IconComp = method.icon;
                        const isSelected = formData.preferredContactMethod === method.id;
                        return (
                          <button
                            type="button"
                            key={method.id}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                preferredContactMethod: method.id,
                                contactValue: ''
                              })
                            }
                            style={{
                              padding: '0.8rem 0.5rem',
                              borderRadius: 'var(--radius-sm)',
                              border: '1.5px solid',
                              borderColor: isSelected ? 'var(--forest)' : 'var(--border-medium)',
                              backgroundColor: isSelected ? 'var(--sage-tint)' : 'var(--bg-primary)',
                              color: 'var(--forest)',
                              fontSize: '0.9rem',
                              fontWeight: '700',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.45rem',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <IconComp size={16} />
                            {method.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Single Dynamic Contact Input */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: 'var(--forest)', marginBottom: '0.35rem' }}>
                        {formData.preferredContactMethod === 'Instagram' ? 'Instagram username *' : 'Email address *'}
                      </label>
                      <input
                        type={formData.preferredContactMethod === 'Email' ? 'email' : 'text'}
                        name="contactValue"
                        value={formData.contactValue}
                        onChange={handleChange}
                        placeholder={formData.preferredContactMethod === 'Instagram' ? '@yourusername' : 'you@example.com'}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid',
                          borderColor: errors.contactValue ? '#E53E3E' : 'var(--border-medium)',
                          backgroundColor: 'var(--bg-primary)',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--charcoal)'
                        }}
                      />
                      {errors.contactValue && (
                        <span style={{ color: '#E53E3E', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
                          {errors.contactValue}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 9. BUDGET */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.5rem' }}>
                      9. BUDGET <span style={{ fontWeight: '400', color: 'var(--charcoal-muted)' }}>(Optional)</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                      {budgetOptions.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: isSelected ? '' : b })}
                            style={{
                              padding: '0.65rem 0.75rem',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '0.84rem',
                              fontWeight: '600',
                              border: '1.5px solid',
                              borderColor: isSelected ? 'var(--forest)' : 'var(--border-medium)',
                              backgroundColor: isSelected ? 'var(--sage-tint)' : 'var(--bg-primary)',
                              color: 'var(--forest)',
                              cursor: 'pointer',
                              textAlign: 'center',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 10. ANYTHING ELSE? */}
                  <div style={{ marginBottom: '2.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      10. ANYTHING ELSE? <span style={{ fontWeight: '400', color: 'var(--charcoal-muted)' }}>(Optional)</span>
                    </label>
                    <textarea
                      name="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Anything else you'd like us to know?"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--charcoal)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '1.15rem',
                      fontSize: '1.05rem',
                      justifyContent: 'center',
                      opacity: isSubmitting ? 0.75 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> Sending Inquiry...
                      </>
                    ) : (
                      <>Send Project Inquiry →</>
                    )}
                  </button>

                  <p style={{ textAlign: 'center', fontSize: '0.84rem', color: 'var(--charcoal-muted)', marginTop: '0.85rem' }}>
                    No commitment — just tell us what you have in mind.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
