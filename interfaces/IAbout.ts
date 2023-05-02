import { DEFAULT_COVER_IMAGE } from "@/libs/constants";

export interface IAbout {
  coverImage1: string;
  coverImage2: string;
}

export const DEFAULT_ABOUT = {
  coverImage1: DEFAULT_COVER_IMAGE,
  coverImage2: DEFAULT_COVER_IMAGE,
} as IAbout;