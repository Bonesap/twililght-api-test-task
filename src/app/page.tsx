"use client";
import { useCallback, useState } from "react";
import Input from "../components/Input";
import { fetchDomains } from "../lib/api";
import { InfoDomain } from "../types/infoDomain";
import Loading from "../components/Loading";
import List from "../components/List";
import ErrorMessage from "../components/Error";
import PasswordChart from "../components/PasswordChart";

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [users, setUsers] = useState<InfoDomain[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | string>("");

  const handleSearch = useCallback(async () => {
    if (!searchInput) {
      setError("Please enter a domain");
      return;
    }

    setLoading(true);
    setActiveSearch(true);
    setUsers([]);
    setError("");

    try {
      const fetchedDomains = await fetchDomains(searchInput);
      setUsers(fetchedDomains);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  }, [searchInput]);

  return (
    <div className="grid sm:grid-cols-[1fr] lg:grid-cols-[390px_1fr] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-[100%]">
        <Input searchInput={searchInput} setSearchInput={setSearchInput} />
        <button
          onClick={handleSearch}
          className="px-4 w-full py-2 mt-[10px] font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {loading && <Loading />}

        {!loading && activeSearch && <List users={users} />}

        {error && (
          <ErrorMessage
            message={error instanceof Error ? error.message : error}
          />
        )}
      </div>
      {users.length > 0 && (
        <div className="w-full">
          <PasswordChart passwords={users.map((user) => user.password)} />
        </div>
      )}
    </div>
  );
}
