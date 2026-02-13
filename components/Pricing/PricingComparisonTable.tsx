// Comparison Table Component
import React from 'react';


interface FeatureItem {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

interface FeatureCategory {
  category: string;
  items: FeatureItem[];
}

interface PricingComparisonTableProps {
  features: FeatureCategory[];
}

const pricingPlans = [
  { name: 'Free' },
  { name: 'Pro' },
  { name: 'Enterprise' },
];

const PricingComparisonTable: React.FC<PricingComparisonTableProps> = ({ features }) => (
  <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
    <table className="w-full text-left max-sm:hidden">
      <caption className="sr-only">Pricing plan comparison</caption>
      <colgroup>
        <col className="w-2/5" />
        <col className="w-1/5" />
        <col className="w-1/5" />
        <col className="w-1/5" />
      </colgroup>
      <thead>
        <tr>
          <td className="p-0" />
          {pricingPlans.map((plan, index) => (
            <th key={index} scope="col" className="p-0">
              <div className="text-sm font-semibold text-blue-900 select-none">
                {plan.name} <span className="sr-only">plan</span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {features.map((category, catIndex) => (
        <tbody key={catIndex} className="group">
          <tr>
            <th
              scope="colgroup"
              colSpan={4}
              className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
            >
              <div className="-mx-4 rounded-lg bg-zinc-50 px-4 py-3 text-sm/6 font-semibold text-zinc-950 select-none">
                {category.category}
              </div>
            </th>
          </tr>
          {category.items.map((item, itemIndex) => (
            <tr key={itemIndex} className="border-b border-zinc-100 last:border-none">
              <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-zinc-600">
                {item.name}
              </th>
              {[item.free, item.pro, item.enterprise].map((value, colIndex) => (
                <td key={colIndex} className="p-4 max-sm:text-center">
                  {typeof value === 'boolean' ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className={`inline-block size-4 fill-${value ? 'green-600' : 'zinc-400'}`}
                      >
                        <path
                          d={value
                            ? "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                            : "M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"}
                          fillRule={value ? "evenodd" : undefined}
                          clipRule={value ? "evenodd" : undefined}
                        />
                      </svg>
                      <span className="sr-only">{value ? 'Included' : 'Not included'} in {pricingPlans[colIndex].name}</span>
                    </>
                  ) : (
                    <>
                      <span className="sr-only">{pricingPlans[colIndex].name} includes:</span>
                      <span className="text-sm/6 text-zinc-950">{value}</span>
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ))}
    </table>
    {/* Mobile Tabs */}
    <div className="sm:hidden">
      <div className="flex" role="tablist" aria-orientation="horizontal">
        {pricingPlans.map((plan, index) => (
          <button
            key={index}
            className={`w-1/3 border-b border-zinc-100 py-4 text-base/8 font-medium text-blue-600 data-selected:border-blue-600 [&:not([data-focus])]:focus:outline-hidden`}
            id={`headlessui-tabs-tab-r${index + 3}`}
            role="tab"
            type="button"
            aria-selected={index === 0}
            tabIndex={index === 0 ? 0 : -1}
            data-headlessui-state={index === 0 ? 'selected' : ''}
            data-selected={index === 0 ? '' : undefined}
            aria-controls={`headlessui-tabs-panel-r${index + 9}`}
          >
            {plan.name}
          </button>
        ))}
      </div>
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          id={`headlessui-tabs-panel-r${index + 9}`}
          role="tabpanel"
          tabIndex={index === 0 ? 0 : -1}
          data-headlessui-state={index === 0 ? 'selected' : ''}
          data-selected={index === 0 ? '' : undefined}
          aria-labelledby={`headlessui-tabs-tab-r${index + 3}`}
          style={index !== 0 ? {
            position: 'fixed',
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0px, 0px, 0px, 0px)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          } : {}}
        >
          {features.map((category: { category: string; items: any[] }, catIndex: number) => (
            <React.Fragment key={catIndex}>
              <div className="-mx-6 mt-10 rounded-lg bg-zinc-50 px-6 py-3 text-sm/6 font-semibold text-zinc-950 group-first-of-type:mt-5">
                {category.category}
              </div>
              <dl>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="grid grid-cols-2 border-b border-zinc-100 py-4 last:border-none">
                    <dt className="text-sm/6 font-normal text-zinc-600">{item.name}</dt>
                    <dd className="text-center">
                      {typeof item[plan.name.toLowerCase()] === 'boolean' ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className={`inline-block size-4 fill-${item[plan.name.toLowerCase()] ? 'green-600' : 'zinc-400'}`}
                          >
                            <path
                              d={item[plan.name.toLowerCase()]
                                ? "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                : "M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"}
                              fillRule={item[plan.name.toLowerCase()] ? "evenodd" : undefined}
                              clipRule={item[plan.name.toLowerCase()] ? "evenodd" : undefined}
                            />
                          </svg>
                          <span className="sr-only">{item[plan.name.toLowerCase()] ? 'Yes' : 'No'}</span>
                        </>
                      ) : (
                        <span className="text-sm/6 text-zinc-950">{item[plan.name.toLowerCase()]}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default PricingComparisonTable;