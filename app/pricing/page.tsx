import React from "react";
import PricingCard from "@/components/Pricing/PricingCard";
import PricingComparisonTable from "@/components/Pricing/PricingComparisonTable";

// Define comparison table data
const comparisonFeatures = [
  {
    category: "Features",
    items: [
      { name: "Custom system prompt", free: true, pro: true, enterprise: true },
      {
        name: "Pro Responses / day",
        free: "5",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Token limit",
        free: "100",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Model",
        free: "GPT-4.0-mini",
        pro: "GPT-4.1, Claude-3.7",
        enterprise: "GPT-Enterprise",
      },
      {
        name: "Single sign-on (IDP)",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Platform",
    items: [
      {
        name: "Conversations dashboard",
        free: false,
        pro: true,
        enterprise: true,
      },
      { name: "Advanced analytics", free: false, pro: false, enterprise: true },
      {
        name: "Centralized billing",
        free: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "Custom integrations (coming soon)",
        free: false,
        pro: false,
        enterprise: true,
      },
      {
        name: "User provisioning & role-based access",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    items: [
      { name: "Community support", free: true, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: true, enterprise: true },
      {
        name: "Customized onboarding",
        free: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
];

// Define pricing plans data
const pricingPlans = [
  {
    id: "tier-free",
    name: "Free",
    price: "$0",
    pricePeriod: "/mo",
    description: "Get a taste for how Cluely works with a few responses on us.",
    buttonText: "Download for Mac",
    buttonLink:
      "https://github.com/cluely/releases/releases/latest/download/cluely.dmg",
    secondaryButtonText: "Download for Windows",
    secondaryButtonLink:
      "https://github.com/cluely/releases/releases/latest/download/cluely-setup.exe",
    features: [
      { text: "5 pro responses per day", icon: "check" },
      {
        text: "Unlimited access to free models",
        icon: "check",
        badge: "GPT-4.0-mini",
      },
      { text: "100 character output limit", icon: "check" },
      { text: "Sees your screen, hears your audio", icon: "check" },
      { text: "Custom system prompt", icon: "check" },
      { text: "Community support only", icon: "check" },
    ],
    bgColor: "bg-white",
    ringColor: "ring-zinc-200",
    textColor: "text-zinc-900",
    buttonBg: "bg-blue-600",
    buttonHoverBg: "hover:bg-blue-500",
    buttonFocus: "focus-visible:outline-blue-600",
    secondaryButtonBg: "bg-black/10",
    secondaryButtonHoverBg: "hover:bg-black/20",
    secondaryButtonFocus: "focus-visible:outline-white",
  },
  {
    id: "tier-pro",
    name: "Pro",
    price: "$20",
    pricePeriod: "/mo",
    description:
      "Unlimited access to Cluely. Use the latest models, get full response output, and play with your own custom prompts.",
    buttonText: "Subscribe",
    buttonLink: "#",
    features: [
      { text: "Unlimited pro responses", icon: "check" },
      {
        text: "Unlimited access to latest models",
        icon: "check",
        badges: [
          {
            text: "Claude-3.7",
            bg: "bg-[#DE7356]",
            textColor: "text-stone-800",
          },
          { text: "GPT-4.1", bg: "bg-[#01AB83]", textColor: "text-white" },
        ],
      },
      { text: "Full access to conversations dashboard", icon: "check" },
      { text: "Priority support", icon: "check" },
      { text: "Plus everything in free", icon: "plus", color: "text-blue-600" },
    ],
    bgColor: "bg-white",
    ringColor: "ring-zinc-200",
    textColor: "text-zinc-900",
    buttonBg: "bg-blue-600",
    buttonHoverBg: "hover:bg-blue-500",
    buttonFocus: "focus-visible:outline-blue-600",
  },
  {
    id: "tier-enterprise",
    name: "Enterprise",
    price: "Custom",
    pricePeriod: "",
    description: "Specifically made for teams who need full customization.",
    buttonText: "Talk to Sales",
    buttonLink: "#",
    features: [
      { text: "Custom integrations", icon: "check", badge: "Coming soon" },
      { text: "User provisioning & role-based access", icon: "check" },
      { text: "Advanced Post-call analytics", icon: "check" },
      { text: "Single sign-on", icon: "check", badge: "IDP/SSO" },
      { text: "Advanced security features", icon: "check" },
      { text: "Centralized billing", icon: "check" },
      { text: "Usage analytics & reporting dashboard", icon: "check" },
      { text: "Plus Everything in pro", icon: "plus", color: "text-white" },
    ],
    bgColor: "bg-zinc-900",
    ringColor: "ring-zinc-900",
    textColor: "text-white",
    buttonBg: "bg-white/10",
    buttonHoverBg: "hover:bg-white/20",
    buttonFocus: "focus-visible:outline-white",
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:py-42">
      <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 select-none">
        <h1 className="flex flex-col text-5xl font-medium tracking-tight text-balance text-zinc-950 sm:text-6xl lg:text-pretty">
          Start for free. <span>Get used to winning.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg font-base text-pretty text-zinc-600 max-lg:mx-auto sm:text-xl/8">
          Whether you’re using Cluely for meetings, homework, sales calls, or
          just curious, it’s always free to start.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 flex justify-start select-none">
          <fieldset aria-label="Payment frequency">
            <div
              className="flex gap-x-2 p-1 text-center text-xs/5 font-semibold"
              id="headlessui-radiogroup-r0"
              role="radiogroup"
            >
              <span
                className="cursor-pointer rounded-md px-2.5 py-1 text-zinc-600 font-[400] text-base bg-zinc-100 data-checked:bg-zinc-700 data-checked:text-white"
                id="headlessui-radio-r1"
                role="radio"
                aria-checked="true"
                tabIndex={0}
                data-headlessui-state="checked"
                data-checked=""
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1.5">Monthly</span>
                </span>
              </span>
              <span
                className="cursor-pointer rounded-md px-2.5 py-1 text-zinc-600 font-[400] text-base bg-zinc-100 data-checked:bg-zinc-700 data-checked:text-white"
                id="headlessui-radio-r2"
                role="radio"
                aria-checked="false"
                tabIndex={-1}
                data-headlessui-state=""
              >
                <span className="flex items-center">
                  <span className="">Annually</span>
                </span>
              </span>
            </div>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingPlans.map(
            (
              plan: {
                id: string;
                name: string;
                price: string;
                pricePeriod: string;
                description: string;
                buttonText: string;
                buttonLink: string;
                secondaryButtonText?: string;
                secondaryButtonLink?: string;
                features: {
                  text: string;
                  icon: string;
                  badge?: string;
                  badges?: { text: string; bg: string; textColor: string }[];
                  color?: string;
                }[];
                bgColor: string;
                ringColor: string;
                textColor: string;
                buttonBg: string;
                buttonHoverBg: string;
                buttonFocus: string;
                secondaryButtonBg?: string;
                secondaryButtonHoverBg?: string;
                secondaryButtonFocus?: string;
              },
              index: React.Key | null | undefined
            ) => (
              <PricingCard key={index} plan={plan} />
            )
          )}
        </div>
      </div>
      <PricingComparisonTable features={comparisonFeatures} />
    </div>
  );
}
