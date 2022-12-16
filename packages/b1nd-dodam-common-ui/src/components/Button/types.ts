export type ButtonSizeType = "lg" | "md" | "sm"

export const ButtonHeight = {
    lg : 50,
    md : 40,
    sm : 30
} as const;

export type ButtonHeightType = typeof ButtonHeight[keyof typeof ButtonHeight];

export const ButtonPadding = {
    lg : 20,
    md : 15,
    sm : 15
} as const;

export type ButtonPaddingType = typeof ButtonPadding[keyof typeof ButtonPadding];
