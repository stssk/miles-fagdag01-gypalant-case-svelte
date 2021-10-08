/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export type Character = {
	uid: string;
	created_at: Date;
	name: string;
	inPlay: boolean;
	pending_delete: boolean;
	gnome: Gnome
};

export type GnomeHead = {
	uid: string;
	colour: string;
}

export type Gnome = {
	hat: Hat;
	facialHair: FacialHair;
	gnomeBody: GnomeBody;
};

export type BodyType = "Square" | "Round" | "UpTriangle" | "DownTriangle"

export type HatType = "Triangle" | "TopHat" | "Beanie"

export type Hat = {
	uid: string;
	colour: string;
	image: URL;
};

export type FacialHair = {
	uid: string;
	colour: string;
	image: URL;
};

export type GnomeBody = {
	uid: string;
	colour: string;
	bodyType: BodyType;
};