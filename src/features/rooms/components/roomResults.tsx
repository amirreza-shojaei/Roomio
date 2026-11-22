
import ResultsToolbar from "./resultsToolbar";
import ActiveFilters from "./activeFilters";
import RoomCard from "./roomCard";
import EmptyState from "./emptyState";

import type {
  Room,
  RoomFiltersState,
  RoomSortOption,
  RoomView,
} from "../types/room.types";

interface RoomResultsProps {
  rooms: Room[];
  filters: RoomFiltersState;
  updateFilter: <K extends keyof RoomFiltersState>(
    key: K,
    value: RoomFiltersState[K]
  ) => void;
  clearFilters: () => void;
  sortBy: RoomSortOption;
  setSortBy: (value: RoomSortOption) => void;
  view: RoomView;
  setView: (value: RoomView) => void;
}

export default function RoomResults({
  rooms,
  filters,
  updateFilter,
  clearFilters,
  sortBy,
  setSortBy,
  view,
  setView,
}: RoomResultsProps) {
  return (
    <section className="min-w-0 space-y-5">

      <ResultsToolbar
        count={rooms.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
        view={view}
        setView={setView}
      />

      <ActiveFilters
        filters={filters}
        updateFilter={updateFilter}
      />

      {rooms.length > 0 ? (
        <div className={`
          grid gap-4
          ${
            view === "grid"
              ? "grid-cols-1 xl:grid-cols-2"
              : "grid-cols-1"
          }
        `}>
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              view={view}
              onDetails={(selectedRoom) => {
                console.log("Selected room:", selectedRoom.id);
              }}
            />
          ))}
        </div>
      ) : (
        <EmptyState onClear={clearFilters} />
      )}

    </section>
  );
}
