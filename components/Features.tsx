import React from "react";

interface FeatureItem {
  imageSrc: string;
  title: string;
  description: string;
  imageAlt?: string;
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ title, subtitle, features }) => {
  return (
    <div
      id="features"
      className="mx-auto max-w-7xl pt-20 lg:pt-65 select-none lg:border-x border-orange-200 overflow-hidden"
    >
      <div className="mx-auto max-w-2xl sm:text-center px-5 lg:px-0">
        <h2 className="text-lg/10 font-base text-zinc-500 uppercase">
          {title}
        </h2>
        <p className="mt-2 text-4xl font-medium tracking-tight text-pretty text-black sm:text-5xl sm:text-balance">
          {subtitle}
        </p>
      </div>
      <div className="grid lg:grid-cols-2 mt-20 mb-16 lg:mb-0 pointer-events-none lg:border-y border-orange-200 lg:divide-x divide-orange-200">
        {features.slice(0, 2).map((feature, index) => (
          <div key={index} className="relative">
            <img src={feature.imageSrc} alt={feature.imageAlt || feature.title} />
            <div className="lg:absolute px-8 -mt-36 lg:mt-0 lg:pl-0 bottom-16 left-10 w-full lg:w-auto">
              <h2 className="text-2xl font-medium break-words">
                {feature.title}
              </h2>
              <p
                className={`w-full ${
                  index === 1 ? "lg:w-110" : "lg:w-100"
                } mt-3 text-base leading-5 text-zinc-600 break-words`}
              >
                {feature.description}
              </p>
            </div>
            <div className="hidden lg:block absolute bg-[#ea580c] w-1 h-8.5 bottom-28.5 -left-[1px]" />
          </div>
        ))}
      </div>
      {features.slice(2).map((feature, index) => (
        <div
          key={index + 2}
          className="relative pointer-events-none lg:border-b border-orange-200"
        >
          <img src={feature.imageSrc} alt={feature.imageAlt || feature.title} />
          <div className="lg:absolute pl-8 mt-8 lg:mt-0 lg:pl-0 bottom-16 left-10 w-full lg:w-auto">
            <h2 className="text-2xl font-medium break-words">
              {feature.title}
            </h2>
            <p className="w-full lg:w-100 mt-3 text-base leading-5 text-zinc-600 break-words">
              {feature.description}
            </p>
          </div>
          <div className="hidden lg:block absolute bg-[#ea580c] w-1 h-8.5 bottom-34 -left-[1px]" />
        </div>
      ))}
    </div>
  );
};

export default Features;
