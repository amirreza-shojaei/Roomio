
"use client";

import { useMemo, useState } from "react";

import { mockRooms } from "../data/mock-rooms";

import type {
  RoomFiltersState,
  RoomSortOption,
  RoomView,
} from "../types/room.types";

import { normalizeDigits } from "../utils/room.utils";

const initialFilters: RoomFiltersState = {
  search: "",
  building: "all",
  floor: "all",
  capacity: null,
  status: "all",
  balcony: false,
  privateBath: false,
};

export function useRoomFilters() {
  const [filters, setFilters] =
    useState<RoomFiltersState>(initialFilters);

  const [sortBy, setSortBy] =
    useState<RoomSortOption>("compatibility");

  const [view, setView] = useState<RoomView>("grid");

  const filteredRooms = useMemo(() => {
    const searchTerm = normalizeDigits(
      filters.search.trim().toLowerCase()
    );

    const result = mockRooms.filter((room) => {
      const roomNumber = normalizeDigits(room.roomNumber);

      const matchesSearch =
        !searchTerm ||
        roomNumber.includes(searchTerm) ||
        room.building.toLowerCase().includes(searchTerm);

      const matchesBuilding =
        filters.building === "all" ||
        room.building === filters.building;

      const matchesFloor =
        filters.floor === "all" ||
        room.floor === Number(filters.floor);

      const matchesCapacity =
        filters.capacity === null ||
        room.capacity === filters.capacity;

      const matchesStatus =
        filters.status === "all" ||
        room.status === filters.status;

      const matchesBalcony =
        !filters.balcony || room.balcony;

      const matchesBath =
        !filters.privateBath || room.privateBath;

      return (
        matchesSearch &&
        matchesBuilding &&
        matchesFloor &&
        matchesCapacity &&
        matchesStatus &&
        matchesBalcony &&
        matchesBath
      );
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "floor":
          return a.floor - b.floor;

        case "capacity":
          return a.capacity - b.capacity;

        case "newest":
          return b.createdAt - a.createdAt;

        case "compatibility":
        default:
          return b.compatibility - a.compatibility;
      }
    });
  }, [filters, sortBy]);

  const activeFilterCount = [
    filters.building !== "all",
    filters.floor !== "all",
    filters.capacity !== null,
    filters.status !== "all",
    filters.balcony,
    filters.privateBath,
  ].filter(Boolean).length;

  const updateFilter = <K extends keyof RoomFiltersState>(
    key: K,
    value: RoomFiltersState[K]
  ) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return {
    filters,
    updateFilter,
    clearFilters,
    activeFilterCount,
    filteredRooms,
    sortBy,
    setSortBy,
    view,
    setView,
  };
}
