import React from 'react';

// Pricing Card Component
type FeatureBadge = {
  text: string;
  bg: string;
  textColor: string;
};

type Feature = {
  text: string;
  icon: string;
  badge?: string;
  badges?: FeatureBadge[];
  color?: string;
};

type PricingPlan = {
  id: string;
  name: string;
  price: string;
  pricePeriod: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features: Feature[];
  bgColor: string;
  ringColor: string;
  textColor: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonFocus: string;
  secondaryButtonBg?: string;
  secondaryButtonHoverBg?: string;
  secondaryButtonFocus?: string;
};

const PricingCard = ({ plan }: { plan: PricingPlan }) => (
  <div className={`rounded-lg p-6.5 ring-1 ${plan.bgColor} ${plan.ringColor}`}>
    <h3 id={plan.id} className={`${plan.textColor} text-[40px]/8 font-[400] select-none`}>
      {plan.name}
    </h3>
    <p className="mt-2 flex items-baseline gap-x-1">
      <span className={`${plan.textColor} text-4xl font-[400] tracking-tight select-none`}>
        {plan.price}
      </span>
      {plan.pricePeriod && (
        <span className={`${plan.textColor} text-3xl/6 font-[400] select-none`}>
          {plan.pricePeriod}
        </span>
      )}
    </p>
    <p className={`${plan.textColor === 'text-white' ? 'text-zinc-300' : 'text-zinc-800'} mt-16 text-sm/4.5 select-none`}>
      {plan.description}
    </p>
    <div className="mt-10.5 relative flex flex-col items-center w-full">
      <a
        href={plan.buttonLink}
        className={`flex justify-center items-center gap-x-1 ${plan.buttonBg} text-white shadow-xs ${plan.buttonHoverBg} ${plan.buttonFocus} block w-full rounded-full px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 z-10 select-none`}
      >
        {plan.name === 'Free' && (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z" />
          </svg>
        )}
        <span>{plan.buttonText}</span>
      </a>
      {plan.secondaryButtonText && (
        <a
          href={plan.secondaryButtonLink}
          className={`flex! justify-center items-center gap-x-1 ${plan.secondaryButtonBg} text-black ${plan.secondaryButtonHoverBg} ${plan.secondaryButtonFocus} block w-full rounded-full px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 absolute transition-all duration-300 select-none translate-y-0 opacity-0 pointer-events-none`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.501 3V11.5H3.00098V3H11.501ZM11.501 21H3.00098V12.5H11.501V21ZM12.501 3H21.001V11.5H12.501V3ZM21.001 12.5V21H12.501V12.5H21.001Z" />
          </svg>
          <span>{plan.secondaryButtonText}</span>
        </a>
      )}
    </div>
    <ul role="list" className={`${plan.textColor === 'text-white' ? 'text-zinc-300' : 'text-zinc-600'} mt-8 space-y-3 text-sm/6 xl:mt-10 transition-all duration-200 translate-y-0 pointer-events-none`}>
      {plan.features.map((feature, index) => (
        <li key={index} className="flex gap-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className={`${feature.color || (plan.textColor === 'text-white' ? 'text-white' : 'text-emerald-600')} h-6 w-4 flex-none`}
          >
            {feature.icon === 'check' ? (
              <path
                fillRule="evenodd"
                d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            )}
          </svg>
          {feature.text}
          {feature.badge && (
            <span className={`select-none h-4 mt-1 text-[10px] px-1.5 rounded-full ${plan.textColor === 'text-white' ? 'bg-zinc-800' : 'bg-[#01AB83]'} ${plan.textColor === 'text-white' ? 'text-white' : 'text-black'} flex items-center justify-center`}>
              {feature.badge}
            </span>
          )}
          {feature.badges && (
            <div className="grid -mt-2.5">
              {feature.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`select-none rotate-${idx % 2 === 0 ? '3' : '-1'} h-4 ${idx === 0 ? '' : '-mt-3'} text-[10px] px-1.5 rounded-full ${badge.bg} ${badge.textColor} flex items-center justify-center`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default PricingCard;
