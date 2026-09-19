import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Globe, RefreshCw, Target, Briefcase, ShoppingBag, Code2, Instagram, MessageSquare, Mail, Check, Loader2 } from 'lucide-react';
import { submitProjectRequest } from '../services/projectService';

export default function ProjectFormModal({ isOpen, onClose, initialPackage = 'BUSINESS' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: 'New Website',
    selectedPackage: 'BUSINESS',
    requestedFeatures: [],
    projectDescription: '',
    additionalNotes: '',
    clientName: '',
    preferredContactMethod: 'Instagram',
    contactValue: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initial package & project type when modal opens or prop changes
  useEffect(() => {
    if (isOpen && initialPackage) {
      let pkgStr = typeof initialPackage === 'string' ? initialPackage : initialPackage.package || '';
      let projType = typeof initialPackage === 'object' ? initialPackage.projectType || 'New Website' : 'New Website';

      let matchedPkg = 'BUSINESS';
      if (pkgStr.includes('Basic') || pkgStr.includes('Essential') || pkgStr.includes('3,000')) {
        matchedPkg = 'ESSENTIAL';
      } else if (pkgStr.includes('Business Pro') || pkgStr.includes('BUSINESS PRO') || pkgStr.includes('10,000')) {
        matchedPkg = 'BUSINESS PRO';
      } else if (pkgStr.includes('Business') || pkgStr.includes('BUSINESS') || pkgStr.includes('5,000')) {
        matchedPkg = 'BUSINESS';
      } else if (pkgStr.includes('E-commerce') || pkgStr.includes('E-COMMERCE') || pkgStr.includes('12,000')) {
        matchedPkg = 'E-COMMERCE';
        projType = 'E-commerce Website';
      } else if (pkgStr.includes('Custom') || pkgStr.includes('Not sure') || pkgStr.includes('Bespoke')) {
        matchedPkg = 'NOT SURE YET';
        projType = 'Custom Website';
      }

      if (pkgStr.includes('Landing Page')) projType = 'Landing Page';
      if (pkgStr.includes('Portfolio')) projType = 'Portfolio Website';
      if (pkgStr.includes('Redesign')) projType = 'Website Redesign';

      setFormData((prev) => ({
        ...prev,
        selectedPackage: matchedPkg,
        projectType: projType
      }));
    }
  }, [isOpen, initialPackage]);

  if (!isOpen) return null;

  const projectTypeOptions = [
    { id: 'New Website', label: 'New Website', icon: Globe, description: 'Starting fresh with a modern website' },
    { id: 'Website Redesign', label: 'Website Redesign', icon: RefreshCw, description: 'Modernizing an outdated website' },
    { id: 'Landing Page', label: 'Landing Page', icon: Target, description: 'High-converting single promo page' },
    { id: 'Portfolio Website', label: 'Portfolio Website', icon: Briefcase, description: 'Showcasing projects & visual work' },
    { id: 'E-commerce Website', label: 'E-commerce Website', icon: ShoppingBag, description: 'Online boutique store with checkout' },
    { id: 'Custom Website', label: 'Custom Website', icon: Code2, description: 'Bespoke dynamic features' }
  ];

  const packageOptions = [
    { id: 'ESSENTIAL', name: 'ESSENTIAL', price: '₹3,000', tag: 'For getting online' },
    { id: 'BUSINESS', name: 'BUSINESS', price: '₹5,000', tag: 'For growing businesses • Popular' },
    { id: 'BUSINESS PRO', name: 'BUSINESS PRO', price: '₹10,000', tag: 'Dynamic & admin control' },
    { id: 'E-COMMERCE', name: 'E-COMMERCE', price: 'Starting ₹12,000', tag: 'Online store & payments' },
    { id: 'NOT SURE YET', name: 'NOT SURE YET', price: 'Custom Quote', tag: 'We will recommend what fits' }
  ];

  const featureChips = [
    'Services',
    'Portfolio / Gallery',
    'Products',
    'Booking',
    'Contact / Enquiries',
    'WhatsApp',
    'Online Payments',
    'Admin Dashboard',
    'Blog',
    'Other'
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

  const handleNextStep = (nextStepNum) => {
    setErrors({});
    if (step === 1 && !formData.projectType) {
      setErrors({ projectType: 'Please select what you want to build.' });
      return;
    }
    if (step === 3 && !formData.projectDescription.trim()) {
      setErrors({ projectDescription: 'Please tell us a little bit about your project idea.' });
      return;
    }
    setStep(nextStepNum);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!formData.contactValue.trim()) {
      const msg =
        formData.preferredContactMethod === 'Instagram'
          ? 'Please enter your Instagram username.'
          : formData.preferredContactMethod === 'WhatsApp'
          ? 'Please enter your WhatsApp number.'
          : 'Please enter your email address.';
      setErrors({ contactValue: msg });
      return;
    }

    if (formData.preferredContactMethod === 'Email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactValue.trim())) {
      setErrors({ contactValue: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitProjectRequest(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setErrors({ submit: err.message || 'Failed to submit. Please try again.' });
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  const handleExploreWork = () => {
    resetAndClose();
    const workSec = document.getElementById('work');
    if (workSec) {
      workSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(23, 51, 34, 0.45)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 24px 60px -12px rgba(23, 51, 34, 0.25)',
          position: 'relative'
        }}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-secondary)',
            sticky: 'top'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="badge-tag" style={{ fontSize: '0.75rem' }}>
              <Sparkles size={13} /> QUICK CONSULTATION
            </span>
            <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--sage)' }}>
              web.bloomcreates
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--border-medium)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--forest)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          {isSubmitted ? (
            /* SUCCESS CONFIRMATION STATE */
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
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
                <CheckCircle2 size={38} />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 4vw, 2.8rem)',
                  color: 'var(--forest)',
                  marginBottom: '0.65rem',
                  lineHeight: '1.15'
                }}
              >
                Thanks — we've got your idea.
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--charcoal-light)',
                  lineHeight: '1.6',
                  maxWidth: '540px',
                  margin: '0 auto 2.25rem auto'
                }}
              >
                We'll review your project details and get back to you through your preferred contact method (<strong>{formData.contactValue}</strong>).
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={handleExploreWork}
                  className="btn-primary"
                  style={{ padding: '0.9rem 1.75rem', fontSize: '0.95rem' }}
                >
                  While you wait, explore our work →
                </button>

                <button
                  onClick={resetAndClose}
                  className="btn-secondary"
                  style={{ padding: '0.9rem 1.5rem', fontSize: '0.95rem' }}
                >
                  Back to web.bloomcreates →
                </button>
              </div>
            </div>
          ) : (
            /* 4-STAGE MULTI-STEP FORM */
            <div>
              {/* Step Progress Tracker Bar */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {[
                    { num: '01', title: 'Your Idea' },
                    { num: '02', title: 'Package' },
                    { num: '03', title: 'Project' },
                    { num: '04', title: 'Contact' }
                  ].map((st, idx) => {
                    const stepNum = idx + 1;
                    const isActive = step === stepNum;
                    const isPassed = step > stepNum;
                    return (
                      <div key={st.num} style={{ textAlign: 'center' }}>
                        <div
                          style={{
                            height: '4px',
                            borderRadius: '2px',
                            backgroundColor: isPassed || isActive ? 'var(--forest)' : 'var(--border-medium)',
                            transition: 'background-color 0.3s ease',
                            marginBottom: '0.35rem'
                          }}
                        />
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: isActive ? '700' : '600',
                            color: isActive ? 'var(--forest)' : 'var(--charcoal-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {st.num} {st.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Error Banner if any */}
              {errors.submit && (
                <div
                  style={{
                    backgroundColor: '#FDF2F2',
                    border: '1px solid #F87171',
                    color: '#991B1B',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem'
                  }}
                >
                  {errors.submit}
                </div>
              )}

              {/* STAGE 1 — WHAT DO YOU NEED? */}
              {step === 1 && (
                <div style={{ animation: 'fadeIn 0.25s ease forwards' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '0.35rem' }}>
                      What are you looking to build?
                    </h3>
                    <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-light)' }}>
                      Tell us what you have in mind. We'll help turn it into a website.
                    </p>
                  </div>

                  {errors.projectType && (
                    <span style={{ color: '#E53E3E', fontSize: '0.82rem', marginBottom: '1rem', display: 'block' }}>
                      {errors.projectType}
                    </span>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', marginBottom: '2rem' }}>
                    {projectTypeOptions.map((option) => {
                      const IconComp = option.icon;
                      const isSelected = formData.projectType === option.id;
                      return (
                        <div
                          key={option.id}
                          onClick={() => setFormData({ ...formData, projectType: option.id })}
                          style={{
                            padding: '1.1rem',
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid',
                            borderColor: isSelected ? 'var(--forest)' : 'var(--border-medium)',
                            backgroundColor: isSelected ? 'var(--sage-tint)' : 'var(--bg-primary)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                            <div
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                backgroundColor: isSelected ? 'var(--forest)' : 'var(--bg-secondary)',
                                color: isSelected ? '#ffffff' : 'var(--forest)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <IconComp size={18} />
                            </div>
                            {isSelected && <Check size={18} style={{ color: 'var(--forest)' }} />}
                          </div>

                          <div>
                            <span style={{ fontSize: '1.02rem', fontWeight: '700', color: 'var(--forest)', display: 'block', marginBottom: '0.2rem' }}>
                              {option.label}
                            </span>
                            <span style={{ fontSize: '0.82rem', color: 'var(--charcoal-muted)', lineHeight: '1.3' }}>
                              {option.description}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleNextStep(2)}
                    className="btn-primary"
                    style={{ width: '100%', padding: '1rem', fontSize: '0.98rem', justifyContent: 'center' }}
                  >
                    Next: Choose Package →
                  </button>
                </div>
              )}

              {/* STAGE 2 — CHOOSE YOUR PACKAGE */}
              {step === 2 && (
                <div style={{ animation: 'fadeIn 0.25s ease forwards' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '0.35rem' }}>
                      Which package are you interested in?
                    </h3>
                    <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-light)' }}>
                      Select a package that fits your goals, or choose 'Not Sure Yet'.
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {packageOptions.map((pkg) => {
                      const isSelected = formData.selectedPackage === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setFormData({ ...formData, selectedPackage: pkg.id })}
                          style={{
                            padding: '1.1rem 1.35rem',
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid',
                            borderColor: isSelected ? 'var(--forest)' : 'var(--border-medium)',
                            backgroundColor: isSelected ? 'var(--sage-tint)' : 'var(--bg-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div
                              style={{
                                width: '22px',
                                height: '22px',
                                borderRadius: '50%',
                                border: '2px solid var(--forest)',
                                backgroundColor: isSelected ? 'var(--forest)' : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}
                            >
                              {isSelected && <Check size={14} style={{ color: '#ffffff' }} />}
                            </div>

                            <div>
                              <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--forest)', display: 'block', lineHeight: '1.2' }}>
                                {pkg.name}
                              </span>
                              <span style={{ fontSize: '0.82rem', color: 'var(--charcoal-muted)' }}>
                                {pkg.tag}
                              </span>
                            </div>
                          </div>

                          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: '700', color: 'var(--forest)' }}>
                            {pkg.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary"
                      style={{ flex: 1, padding: '0.95rem' }}
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNextStep(3)}
                      className="btn-primary"
                      style={{ flex: 2, padding: '0.95rem', justifyContent: 'center' }}
                    >
                      Next: Project Details →
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 3 — TELL US ABOUT IT */}
              {step === 3 && (
                <div style={{ animation: 'fadeIn 0.25s ease forwards' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '0.35rem' }}>
                      Tell us about your project
                    </h3>
                  </div>

                  {/* Textarea 1 */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      Tell us about your business or vision *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Tell us about your business, what you want your website to do, or share any ideas/references you already have..."
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid',
                        borderColor: errors.projectDescription ? '#E53E3E' : 'var(--border-medium)',
                        backgroundColor: 'var(--bg-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
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

                  {/* Feature Chips */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--forest)', marginBottom: '0.6rem' }}>
                      What would you like your website to include?
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {featureChips.map((chip) => {
                        const isSelected = formData.requestedFeatures.includes(chip);
                        return (
                          <button
                            type="button"
                            key={chip}
                            onClick={() => toggleFeature(chip)}
                            style={{
                              padding: '0.45rem 1rem',
                              borderRadius: 'var(--radius-pill)',
                              fontSize: '0.84rem',
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

                  {/* Textarea 2 */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      Anything else you'd like us to know? <span style={{ fontWeight: '400', color: 'var(--charcoal-muted)' }}>(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="Mention specific launch dates, inspiration links, or preferences..."
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        color: 'var(--charcoal)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-secondary"
                      style={{ flex: 1, padding: '0.95rem' }}
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNextStep(4)}
                      className="btn-primary"
                      style={{ flex: 2, padding: '0.95rem', justifyContent: 'center' }}
                    >
                      Next: How to Reach You →
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 4 — HOW CAN WE REACH YOU? */}
              {step === 4 && (
                <form onSubmit={handleSubmit} style={{ animation: 'fadeIn 0.25s ease forwards' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '0.35rem' }}>
                      Where should we reach you?
                    </h3>
                    <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-light)' }}>
                      We'll review your idea and get back to you.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      Your name <span style={{ fontWeight: '400', color: 'var(--charcoal-muted)' }}>(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Sarah"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        color: 'var(--charcoal)'
                      }}
                    />
                  </div>

                  {/* Preferred Contact Method Selection */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--forest)', marginBottom: '0.5rem' }}>
                      Preferred contact method
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                      {[
                        { id: 'Instagram', label: 'Instagram', icon: Instagram },
                        { id: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare },
                        { id: 'Email', label: 'Email', icon: Mail }
                      ].map((method) => {
                        const IconComp = method.icon;
                        const isSelected = formData.preferredContactMethod === method.id;
                        return (
                          <button
                            type="button"
                            key={method.id}
                            onClick={() => setFormData({ ...formData, preferredContactMethod: method.id, contactValue: '' })}
                            style={{
                              padding: '0.75rem 0.5rem',
                              borderRadius: 'var(--radius-sm)',
                              border: '1.5px solid',
                              borderColor: isSelected ? 'var(--forest)' : 'var(--border-medium)',
                              backgroundColor: isSelected ? 'var(--sage-tint)' : 'var(--bg-primary)',
                              color: 'var(--forest)',
                              fontSize: '0.88rem',
                              fontWeight: '700',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.4rem',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <IconComp size={16} />
                            {method.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Single Contact Field */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--forest)', marginBottom: '0.4rem' }}>
                      {formData.preferredContactMethod === 'Instagram'
                        ? 'Instagram username *'
                        : formData.preferredContactMethod === 'WhatsApp'
                        ? 'WhatsApp number *'
                        : 'Email address *'}
                    </label>
                    <input
                      type={formData.preferredContactMethod === 'Email' ? 'email' : 'text'}
                      value={formData.contactValue}
                      onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                      placeholder={
                        formData.preferredContactMethod === 'Instagram'
                          ? '@yourusername'
                          : formData.preferredContactMethod === 'WhatsApp'
                          ? '+91 XXXXX XXXXX'
                          : 'you@example.com'
                      }
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

                  {/* Actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '1rem' }}
                      >
                        <ArrowLeft size={16} /> Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{
                          flex: 2,
                          padding: '1rem',
                          fontSize: '1.02rem',
                          justifyContent: 'center',
                          opacity: isSubmitting ? 0.75 : 1
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" /> Sending...
                          </>
                        ) : (
                          <>Send Project Inquiry →</>
                        )}
                      </button>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--charcoal-muted)' }}>
                      No commitment. Just tell us what you have in mind.
                    </p>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

