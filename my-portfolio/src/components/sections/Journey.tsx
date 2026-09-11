/**
 * ======================================================================
 * JOURNEY SECTION - Education Timeline
 * ======================================================================
 *
 * This component displays my education journey as
 * a visual timeline with connecting dots and cards
 *
 * Key Features:
 * - Chronological display of education history
 * - Visual timeline with connecting lines
 * - Status badges (Current, Degree, Certificate, Secondary)
 * - Hover effects on cards(lift, shadow, border change)
 * - Responsive layout
 * - Terminal aesthetic with green accents to match the rest of the app
 *
 * Data Source:(Will be dynamic later)
 * - Imports from `@/lib/data/education.ts`
 * - Currently static data(will later connect to database)
 */

import { educationStack } from "@/lib/data/education";
/**
 * Education Data
 *
 * Array of education objects imported from the data layer.
 * Each object contains:
 * - id: Unique identifier (Primary Key)
 * - title: Degree/Certificate name
 * - institution: School/University name
 * - period: Date range (e.g. "2020-2024")
 * - badge: Status Label (e.g. "Current", "Degree")
 * - BadgeColor: Tailwind classes for badge styling
 * - icon: Emoji icon for visual representation
 * - status: 'current' | 'completed'
 * - modules: Array of relevant modules (Still thinking)
 * - grade: Grade achieved (Still thinking)
 */

/**
 * ======================================================================
 * MAIN COMPONENT
 * ======================================================================
 *
 * Journey Component
 *
 * Renders a vertical timeline of education history
 * - Chronological order (newest first)
 *
 */
export default function Journey() {
  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-mono font-bold">Journey</h2>
        </div>

        <div className="space-y-6">
          {/**
           * Map Through Education Data
           *
           * Iterates through the educationStack array and renders
           * each item as a timeline entry
           *
           * Key: Uses index as key (acceptable for static data)
           * Future: Should use unique `id` when data is dynamic
           */}
          {educationStack.map((item, index) => (
            <div key={index} className="relative">
              {/* Conditional Rendering:
               * - Only render if NOT the last item
               * - Last item doesn't need a connecting line
               *
               * Logic: `index !== educationStack.length -1
               * - If true: Renders the line
               * - If False: Doesn't render (last item has no line below it)
               */}
              {index !== educationStack.length - 1 && (
                <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-green-700/20"></div>
              )}

              <div className="flex gap-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-700 mt-1.5"></div>
                </div>

                {/*
                 * ======================================================================
                 * CONTENT CARD
                 *======================================================================
                 */}
                <div className="flex-1 bg-gray-900/50 rounded-lg border border-green-700/30 p-4 hover:border-green-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-700/5">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-lg font-mono font-bold text-green-700">
                      {/** Title - Renders the education title from data*/}
                      {item.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded font-mono ${item.badgeColor}`}
                    >
                      {/** badge - Renders the education badge from data*/}
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-mono mt-1">
                    {/** institution - Renders the education institution from data*/}
                    {item.institution}
                  </p>
                  <p className="text-xs text-gray-500 font-mono mt-2">
                    {/** period - Renders the education period from data*/}
                    📅 {item.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
