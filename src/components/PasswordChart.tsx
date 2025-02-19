'use client';

import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface PasswordChartProps {
  passwords: string[];
}

export default function PasswordChart({ passwords }: PasswordChartProps) {
  const chartData = useMemo(() => {
    const passwordCounts: Record<string, number> = passwords.reduce(
      (acc, password) => {
        if (password) {
          acc[password] = (acc[password] || 0) + 1;
        }
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.keys(passwordCounts).map((password) => ({
      name: password,
      count: passwordCounts[password],
    }));
  }, [passwords]);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Password Frequency
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-30}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 12 }}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="red" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
