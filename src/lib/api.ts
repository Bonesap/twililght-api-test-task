import { InfoDomain } from '../types/infoDomain';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchDomains = async (domain: string): Promise<InfoDomain[]> => {
  const response = await fetch(
    `/api/proxy/leaked_creds/_search?domain=${domain}&page=1&size=10`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.entries;
};
