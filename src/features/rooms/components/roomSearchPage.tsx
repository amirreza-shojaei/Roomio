
"use client";

import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";

import SearchHero from "./searchHero";
import RoomFilters from "./roomFilters";
import RoomResults from "./roomResults";

import { useRoomFilters } from "../hooks/useRoomFilters";
import { mockRooms } from "../data/mock-rooms";

export default function RoomSearchPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false);

  const {
    filters,
    updateFilter,
    clearFilters,
    activeFilterCount,
    filteredRooms,
    sortBy,
    setSortBy,
    view,
    setView,
  } = useRoomFilters();

  const totalBuildings = useMemo(
    () => new Set(mockRooms.map((room) => room.building)).size,
    []
  );

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-6">

      {/* Search Hero */}
      <SearchHero
        search={filters.search}
        onSearchChange={(value) =>
          updateFilter("search", value)
        }
        totalRooms={mockRooms.length}
        totalBuildings={totalBuildings}
      />

      {/* Mobile Filter Button */}
      <button
        type="button"
        onClick={() =>
          setMobileFiltersOpen((previous) => !previous)
        }
        aria-expanded={mobileFiltersOpen}
        className="
          flex w-full items-center
          justify-between rounded-xl
          border border-border bg-card
          px-4 py-3 text-sm font-semibold
          text-foreground lg:hidden
        "
      >
        <span className="flex items-center gap-2">
          <Filter size={17} className="text-primary" />
          فیلترهای جستجو

          {activeFilterCount > 0 && (
            <span className="
              flex h-5 min-w-5 items-center
              justify-center rounded-full
              bg-primary px-1 text-[10px] text-white
            ">
              {activeFilterCount}
            </span>
          )}
        </span>

        {mobileFiltersOpen ? (
          <X size={17} />
        ) : (
          <Filter size={17} />
        )}
      </button>

      {/* Main Layout */}
      <div className="
        grid grid-cols-1 items-start
        gap-5 lg:grid-cols-[280px_minmax(0,1fr)]
        xl:gap-6
      ">

        <RoomFilters
          filters={filters}
          updateFilter={updateFilter}
          clearFilters={clearFilters}
          activeFilterCount={activeFilterCount}
          resultCount={filteredRooms.length}
          isMobileOpen={mobileFiltersOpen}
          onApply={() => setMobileFiltersOpen(false)}
        />

        <RoomResults
          rooms={filteredRooms}
          filters={filters}
          updateFilter={updateFilter}
          clearFilters={clearFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
          view={view}
          setView={setView}
        />

      </div>
    </div>
  );
}
