"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Service } from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-600">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">À propos de cette prestation</h3>
            <p className="text-gray-700">{service.longDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Avantages</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Déroulement de la séance</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              {service.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Informations pratiques</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Durée</p>
                <p>{service.duration}</p>
              </div>
              <div>
                <p className="font-medium">Prix</p>
                <p className="text-primary font-bold">{service.price}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Fermer
            </Button>
            <Button onClick={() => window.location.href = '/#contact'}>
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}