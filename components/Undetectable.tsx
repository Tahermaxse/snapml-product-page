import React from "react";

interface FeatureItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverseOrder?: boolean; // To handle alternating layout (text on left/right)
}

interface UndetectableProps {
  title: string;
  subtitle: string;
  headerImageSrc: string;
  headerImageAlt?: string;
  features: FeatureItem[];
}

const Undetectable: React.FC<UndetectableProps> = ({
  title,
  subtitle,
  headerImageSrc,
  headerImageAlt,
  features,
}) => {
  return (
    <div className="bg-[#fff9f5]">
      <div className="mx-auto max-w-6xl sm:text-center pt-18 lg:pt-26">
        <div className="max-w-80 mx-auto lg:max-w-6xl">
          <h2 className="mt-2 text-3xl lg:text-5xl font-medium tracking-tight text-black sm:text-5xl sm:text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg lg:text-xl max-w-lg mx-auto font-base tracking-tight text-black/70 leading-6">
            {subtitle}
          </p>
        </div>
        <img
          className="h-46 lg:h-50 mt-8 mx-auto"
          src={headerImageSrc}
          alt={headerImageAlt || title}
        />
        <div className="mt-12 select-none pointer-events-none">
          {features.map((feature, index) => (
            <div
              key={index}
              className="py-16 mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center"
            >
              <div
                className={`${
                  feature.reverseOrder ? "lg:ml-auto lg:order-2" : "lg:pr-8"
                } pl-8 lg:pl-0 col-span-2`}
              >
                <div className="text-left">
                  <h2 className="text-2xl font-medium tracking-tight text-black mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-base text-zinc-700">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div
                className={`${
                  feature.reverseOrder ? "lg:order-1" : "lg:order-2"
                } col-span-3 p-8 lg:p-0 -mt-14 lg:mt-0`}
              >
                <img
                  alt={feature.imageAlt || feature.title}
                  className="bg-[#fff2e8] rounded-[18px] w-full max-w-none ring-1 ring-orange-200"
                  src={feature.imageSrc}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Undetectable;
