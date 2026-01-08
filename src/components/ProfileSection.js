import React from 'react';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

const ProfileSection = ({ aboutMe }) => {
  return (
    <div className="md:sticky top-12 space-y-8">
      <div className="flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
        {aboutMe.imageUrl && (
          <div className="w-1/3 md:w-full flex-shrink-0">
            <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4]">
              <img
                src={aboutMe.imageUrl}
                alt={aboutMe.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        )}
        <div className="w-2/3 md:w-full">
          <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
            {aboutMe.name}
          </h1>
          <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
            {aboutMe.title}
            <br />
            {aboutMe.institution}
          </p>
          <div className="space-y-2">
            <a
              href={`mailto:${aboutMe.email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={14} />
              {aboutMe.email}
            </a>
            <br />
            <a
              href={`tel:${aboutMe.phone}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <Phone size={14} />
              {aboutMe.phone}
            </a>
            <br />
            <div className="inline-flex items-center gap-2 text-sm text-zinc-600">
              <MapPin size={14} />
              {aboutMe.location}
            </div>
            {aboutMe.linkedinUsername && (
              <>
                <br />
                <a
                  href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={14} />
                  linkedin.com/in/{aboutMe.linkedinUsername}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

