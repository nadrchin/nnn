'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

// ⚠️ REMPLACEZ CES VALEURS PAR LES VÔTRES ⚠️
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_m9pxnta', // Ex: service_abcdef
  TEMPLATE_NOTIFICATION: 'template_13q4g7a', // Ex: template_123
  TEMPLATE_CONFIRMATION: 'template_f2fdzby', // Ex: template_456
  USER_ID: 'jtBfZXvajPvBUldJT', // Ex: user_abc123
};

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Rehaussement de cils",
    "Soin du visage complet",
    "Maquillage semi-permanent sourcils",
    "Maquillage permanent lèvres",
    "Massage du crâne",
    "Massage du dos tonique",
    "Massage californien",
    "Drainage lymphatique",
    "Réflexologie plantaire",
    "Lipocavitation des cuisses",
    "Blanchiment dentaire"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Email de notification pour le propriétaire (vous)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_NOTIFICATION,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: new Date(formData.date).toLocaleDateString('fr-FR'),
          time: formData.time,
          message: formData.message || 'Aucun message'
        },
        EMAILJS_CONFIG.USER_ID
      );

      // 2. Email de confirmation pour le client
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_CONFIRMATION,
        {
          to_email: formData.email,
          to_name: formData.name,
          service: formData.service,
          date: new Date(formData.date).toLocaleDateString('fr-FR'),
          time: formData.time,
        },
        EMAILJS_CONFIG.USER_ID
      );

      alert('✅ Réservation confirmée ! Un email de confirmation vous a été envoyé.');
      
      // Réinitialiser le formulaire
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        service: '', 
        date: '', 
        time: '', 
        message: '' 
      });

    } catch (error) {
      console.error('Erreur EmailJS:', error);
      alert('❌ Une erreur est survenue. Veuillez nous appeler directement au [votre numéro].');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-elegant p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        Réserver un rendez-vous
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Nom complet *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Téléphone *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="flex items-center gap-2">
              Service souhaité *
            </Label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:opacity-50"
              required
              disabled={isSubmitting}
            >
              <option value="">Sélectionnez un service</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date souhaitée *
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Heure souhaitée *
            </Label>
            <Input
              id="time"
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message (optionnel)</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Informations supplémentaires, allergies, préférences..."
            disabled={isSubmitting}
            rows={4}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Envoi en cours...
            </span>
          ) : (
            'Confirmer la réservation'
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          * Champs obligatoires. Vous recevrez un email de confirmation.
        </p>
      </form>
    </div>
  );
};