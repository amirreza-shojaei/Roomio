
export function toPersianNumber(value: number | string): string {
  return String(value).replace(
    /\d/g,
    (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]
  );
}

export function normalizeDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
    )
    .replace(/[٠-٩]/g, (digit) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    );
}

export function getAvailableBeds(
  capacity: number,
  occupied: number
): number {
  return Math.max(0, capacity - occupied);
}

export function getRoomStatusLabel(status: string): string {
  return status === "available"
    ? "کاملاً خالی"
    : "نیمه‌پر";
}
