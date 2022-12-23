export type MenuDropdownSizeType = "lg" | "md";

export const MenuDropdownWidth = {
  lg: 60,
  md: 30,
} as const;

export const MenuDropdownHeight = {
  lg: 80,
  md: 40,
} as const;

export type MenuDropdownWidthType =
  typeof MenuDropdownWidth[keyof typeof MenuDropdownWidth];

export type MenuDropdownHeightType =
  typeof MenuDropdownHeight[keyof typeof MenuDropdownHeight];

export interface MenuDropdownProps {
  sizeType: MenuDropdownSizeType;
  onModify: () => void;
  onDelete: () => void;
}
