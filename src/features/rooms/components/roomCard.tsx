import {
  BedDouble,
  Bath,
  Building2,
  ChevronLeft,
  Sparkles,
  PanelsTopLeft,
  Trees,
} from "lucide-react";

import type { Room, RoomView } from "../types/room.types";
import Link from "next/link";
import { toPersianNumber, getAvailableBeds } from "../utils/room.utils";

interface RoomCardProps {
  room: Room;
  view: RoomView;
  onDetails?: (room: Room) => void;
}

const toneClasses = {
  teal: "from-teal-950 to-teal-700",
  blue: "from-blue-950 to-blue-700",
  navy: "from-slate-950 to-slate-700",
  sage: "from-emerald-950 to-emerald-700",
};

export default function RoomCard({ room, view, onDetails }: RoomCardProps) {
  const availableBeds = getAvailableBeds(room.capacity, room.occupied);

  const isList = view === "list";

  return (
    <article
      className={`
      group overflow-hidden rounded-2xl
      border border-border bg-card
      transition-all duration-200
      hover:-translate-y-1 hover:border-primary/30
      hover:shadow-lg hover:shadow-primary/5

      ${isList ? "sm:flex" : ""}
    `}
    >
      {/* Room Visual */}
      <div
        className={`
        relative flex shrink-0 items-center
        justify-center overflow-hidden
        bg-gradient-to-br
        ${toneClasses[room.tone]}
        ${isList ? "h-48 sm:h-auto sm:w-64" : "h-44"}
      `}
      >
        <div
          className="
          absolute -right-12 -top-16
          h-48 w-48 rounded-full
          border border-white/10
        "
        />

        <div
          className="
          absolute -bottom-20 -left-10
          h-52 w-52 rounded-full
          border border-white/10
        "
        />

        {/* Building Illustration */}
        <div
          className="
          relative flex h-28 w-28 flex-col
          items-center justify-center gap-2
          rounded-t-xl border-x-4 border-t-4
          border-white/30 bg-white/10
          p-3 shadow-2xl backdrop-blur-sm
        "
        >
          <div className="grid w-full grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="
                  h-4 rounded-sm border border-white/40
                  bg-white/25
                "
              />
            ))}
          </div>

          <div
            className="
            h-7 w-6 rounded-t-md border
            border-white/30 bg-white/20
          "
          />
        </div>

        <span
          className="
          absolute right-3 top-3 rounded-lg
          bg-black/25 px-3 py-1.5
          text-xs font-semibold text-white
          backdrop-blur-md
        "
        >
          اتاق {toPersianNumber(room.roomNumber)}
        </span>

        {room.balcony && (
          <span
            className="
            absolute bottom-3 left-3
            flex items-center gap-1.5
            rounded-lg bg-white/15 px-2.5 py-1.5
            text-[11px] text-white backdrop-blur-md
          "
          >
            <Trees size={13} />
            بالکن
          </span>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 p-4 sm:p-5">
        {/* Title & Compatibility */}
        <div
          className="
          flex items-start justify-between gap-3
        "
        >
          <div className="min-w-0">
            <p
              className="
              text-xs text-muted-foreground
            "
            >
              {room.building}
            </p>

            <h3
              className="
              mt-1 text-lg font-bold text-foreground
            "
            >
              اتاق {toPersianNumber(room.roomNumber)}
            </h3>
          </div>

          <div className="flex shrink-0 flex-col items-center">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="21"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/15"
                />

                <circle
                  cx="24"
                  cy="24"
                  r="21"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-primary"
                  strokeDasharray={2 * Math.PI * 21}
                  strokeDashoffset={
                    2 *
                    Math.PI *
                    21 *
                    (1 - Math.min(100, Math.max(0, room.compatibility)) / 100)
                  }
                  style={{
                    transition: "stroke-dashoffset 0.8s ease",
                  }}
                />
              </svg>

              <span className="relative text-xs font-extrabold text-primary">
                {toPersianNumber(room.compatibility)}٪
              </span>
            </div>

            <span className="mt-1 text-[10px] text-muted-foreground">
              سازگاری
            </span>
          </div>
        </div>

        {/* Room Info */}
        <div
          className="
          mt-4 flex flex-wrap items-center
          gap-x-4 gap-y-2 border-b border-border
          pb-4 text-xs text-muted-foreground
        "
        >
          <span className="flex items-center gap-1.5">
            <PanelsTopLeft size={15} />
            طبقه {toPersianNumber(room.floor)}
          </span>

          <span className="flex items-center gap-1.5">
            <BedDouble size={15} />
            {toPersianNumber(room.capacity)} تخته
          </span>

          {room.privateBath && (
            <span className="flex items-center gap-1.5">
              <Bath size={15} />
              سرویس اختصاصی
            </span>
          )}
        </div>

        {/* Occupancy */}
        <div className="mt-4">
          <div
            className="
            flex items-center justify-between gap-2
          "
          >
            <div className="flex items-center gap-2">
              <span
                className={`
                h-2 w-2 rounded-full
                ${availableBeds > 0 ? "bg-emerald-500" : "bg-red-500"}
              `}
              />

              <span
                className="
                text-xs font-semibold text-foreground
              "
              >
                {availableBeds === room.capacity
                  ? "کاملاً خالی"
                  : `${toPersianNumber(availableBeds)} تخت خالی`}
              </span>
            </div>

            <span
              className="
              text-[10px] text-muted-foreground
            "
            >
              {toPersianNumber(room.occupied)} از{" "}
              {toPersianNumber(room.capacity)} تخت اشغال
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            {Array.from({ length: room.capacity }).map((_, index) => (
              <div
                key={index}
                className={`
                  flex flex-1 items-center justify-center
                  rounded-lg py-2
                  ${
                    index < room.occupied
                      ? "bg-primary/15 text-primary"
                      : "bg-card-secondary text-muted-foreground"
                  }
                `}
              >
                <BedDouble size={15} />
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div
          className="
          mt-4 flex flex-wrap gap-2
        "
        >
          {room.highlights.map((highlight, index) => (
            <span
              key={highlight}
              className="
                inline-flex items-center gap-1
                rounded-lg bg-card-secondary
                px-2 py-1.5 text-[10px]
                text-muted-foreground
              "
            >
              {index === 0 && <Sparkles size={11} className="text-primary" />}
              {highlight}
            </span>
          ))}
        </div>

        {/* Details */}
        
<Link
  href={`/rooms/${room.id}`}
  className="
    mt-5 flex w-full items-center
    justify-center gap-2 rounded-xl
    border border-primary/20
    py-2.5 text-xs font-semibold
    text-primary transition-colors
    hover:bg-primary hover:text-white
  "
>
  مشاهده جزئیات
  <ChevronLeft size={15} />
</Link>

      </div>
    </article>
  );
}
