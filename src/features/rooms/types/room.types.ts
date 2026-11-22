
export type RoomStatus = "available" | "partial";

export type RoomTone =
  | "teal"
  | "blue"
  | "navy"
  | "sage";

export interface Room {
  id: number;

  building: string;
  roomNumber: string;
  floor: number;

  capacity: number;
  occupied: number;

  compatibility: number;

  status: RoomStatus;

  balcony: boolean;
  privateBath: boolean;

  highlights: string[];

  tone: RoomTone;

  createdAt: number;
}

export type RoomView = "grid" | "list";

export type RoomSortOption =
  | "compatibility"
  | "floor"
  | "capacity"
  | "newest";

export interface RoomFiltersState {
  search: string;
  building: string;
  floor: string;
  capacity: number | null;
  status: RoomStatus | "all";
  balcony: boolean;
  privateBath: boolean;
}
