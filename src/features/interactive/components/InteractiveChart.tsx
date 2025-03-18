import React, { useState, useEffect, useRef, useMemo } from "react";

interface DataPoint {
  month: string;
  value: number;
}

interface DataSet {
  name: string;
  data: DataPoint[];
  color: string;
}

const InteractiveChart: React.FC = () => {
  const [activeDataset, setActiveDataset] = useState<string>("website");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Sample data sets
  const dataSets: Record<string, DataSet> = useMemo(
    () => ({
      website: {
        name: "Website Visits",
        color: "#6366f1", // Indigo
        data: [
          { month: "Jan", value: 1200 },
          { month: "Feb", value: 1900 },
          { month: "Mar", value: 3000 },
          { month: "Apr", value: 2500 },
          { month: "May", value: 2800 },
          { month: "Jun", value: 3500 },
        ],
      },
      signups: {
        name: "User Signups",
        color: "#10b981", // Emerald
        data: [
          { month: "Jan", value: 500 },
          { month: "Feb", value: 700 },
          { month: "Mar", value: 1000 },
          { month: "Apr", value: 1200 },
          { month: "May", value: 900 },
          { month: "Jun", value: 1500 },
        ],
      },
      revenue: {
        name: "Revenue ($)",
        color: "#f59e0b", // Amber
        data: [
          { month: "Jan", value: 2000 },
          { month: "Feb", value: 3500 },
          { month: "Mar", value: 4000 },
          { month: "Apr", value: 4200 },
          { month: "May", value: 3800 },
          { month: "Jun", value: 5000 },
        ],
      },
    }),
    [],
  );

  const currentData = dataSets[activeDataset].data;
  const maxValue = Math.max(...currentData.map((d) => d.value));

  // Chart dimensions
  const width = 500;
  const height = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Calculate bar width and positions
  const barWidth = (chartWidth / currentData.length) * 0.8;
  const barMargin = (chartWidth / currentData.length) * 0.2;

  // Scale for y-axis
  const yScale = (value: number) => chartHeight * (1 - value / maxValue);

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
          Interactive Chart
        </h3>
        <div className="flex space-x-2">
          {Object.entries(dataSets).map(([key, dataset]) => (
            <button
              key={key}
              className={`rounded-md px-3 py-1 text-sm transition-colors ${
                activeDataset === key
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setActiveDataset(key)}
            >
              {dataset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <svg
          ref={svgRef}
          width={width}
          height={height}
          className="overflow-visible"
        >
          {/* Y-axis */}
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={height - padding.bottom}
            stroke="#9ca3af"
            strokeWidth={1}
          />

          {/* X-axis */}
          <line
            x1={padding.left}
            y1={height - padding.bottom}
            x2={width - padding.right}
            y2={height - padding.bottom}
            stroke="#9ca3af"
            strokeWidth={1}
          />

          {/* Y-axis ticks and labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
            const yPos = padding.top + yScale(maxValue * tick);
            return (
              <g key={tick}>
                <line
                  x1={padding.left - 5}
                  y1={yPos}
                  x2={padding.left}
                  y2={yPos}
                  stroke="#9ca3af"
                  strokeWidth={1}
                />
                <text
                  x={padding.left - 10}
                  y={yPos}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize={12}
                  fill="#6b7280"
                >
                  {formatNumber(maxValue * (1 - tick))}
                </text>
              </g>
            );
          })}

          {/* X-axis labels */}
          {currentData.map((d, i) => (
            <text
              key={i}
              x={padding.left + (i + 0.5) * (chartWidth / currentData.length)}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              fontSize={12}
              fill="#6b7280"
            >
              {d.month}
            </text>
          ))}

          {/* Bars */}
          {currentData.map((d, i) => {
            const barHeight = chartHeight - yScale(d.value);
            const barX =
              padding.left +
              i * (chartWidth / currentData.length) +
              barMargin / 2;
            const barY = padding.top + yScale(d.value);

            return (
              <g key={i}>
                <rect
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={dataSets[activeDataset].color}
                  opacity={hoveredBar === i ? 0.8 : 0.6}
                  rx={4}
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                  className="transition-opacity duration-200"
                />

                {/* Tooltip */}
                {hoveredBar === i && (
                  <g>
                    <rect
                      x={barX - 40 + barWidth / 2}
                      y={barY - 40}
                      width={80}
                      height={30}
                      rx={4}
                      fill="#1f2937"
                    />
                    <text
                      x={barX + barWidth / 2}
                      y={barY - 20}
                      textAnchor="middle"
                      fontSize={12}
                      fill="white"
                    >
                      {formatNumber(d.value)}
                    </text>
                    <polygon
                      points={`${barX + barWidth / 2 - 5},${barY - 10} ${barX + barWidth / 2 + 5},${barY - 10} ${barX + barWidth / 2},${barY - 5}`}
                      fill="#1f2937"
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 rounded-md bg-gray-50 p-3">
        <p className="text-sm text-gray-700">
          Currently viewing:{" "}
          <span className="font-medium">{dataSets[activeDataset].name}</span>
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Click on the buttons above to switch between datasets
        </p>
      </div>
    </div>
  );
};

export default InteractiveChart;
