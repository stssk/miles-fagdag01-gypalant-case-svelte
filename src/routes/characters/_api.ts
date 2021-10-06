import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import type { Locals } from '$lib/types';
import type { EndpointOutput, Request } from '@sveltejs/kit';
import type { MaybePromise } from '@sveltejs/kit/types/helper';

/*
	This module is used by the /characters.json and /characters/[uid].json
	endpoints to make calls to api.svelte.dev, which stores characters
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /characters/_api
	will net you a 404 response.

	(The data on the character app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

export async function api(
	request: Request<Locals>,
	resource: string,
	data?: unknown
): Promise<MaybePromise<EndpointOutput>> {
	// user must have a cookie set
	if (!request.locals.userid) {
		return { status: 401 };
	}

	const filepath = `${process.cwd()}/temp/${resource}`;

	switch (request.method) {
		case 'GET': {
			try {
				const file = fs.readFileSync(filepath, { encoding: 'utf-8' });

				return { status: 200, body: JSON.parse(file) };
			} catch (error) {
				console.error(error);

				return { status: 404, body: error };
			}
		}
		case 'POST': {
			try {
				const newData = {
					uid: uuidv4(),
					created_at: Date.now(),
					...(data as Record<string, unknown>)
				};

				let newFile: string;
				if (fs.existsSync(filepath)) {
					const file = fs.readFileSync(filepath, { encoding: 'utf-8' });
					const jsonFile = JSON.parse(file);

					const newJsonFile = [newData, ...jsonFile];

					newFile = JSON.stringify(newJsonFile);
				} else {
					newFile = JSON.stringify([newData]);
				}

				fs.writeFileSync(filepath, newFile);

				return { status: 201, body: newData };
			} catch (error) {
				console.error(error);

				return { status: 409, body: error };
			}
		}
		case 'PATCH': {
			try {
				const { 1: topfilepath, 2: uid } = filepath.match(/^(.+)\/([^/]+)$/);
				const topfile = fs.readFileSync(topfilepath, { encoding: 'utf-8' });
				const jsonTopfile = JSON.parse(topfile);

				const jsonFile = jsonTopfile.find((entry) => entry.uid === uid);

				if (!jsonFile) {
					return { status: 404 };
				}

				for (const [key, value] of Object.entries(data)) {
					if (value !== undefined) {
						jsonFile[key] = value;
					}
				}

				const index = jsonTopfile.findIndex((entry) => entry.uid === uid);
				jsonTopfile[index] = jsonFile;

				fs.writeFileSync(topfilepath, JSON.stringify(jsonTopfile));

				return { status: 200, body: JSON.stringify(jsonFile) };
			} catch (error) {
				console.error(error);

				return { status: 400, body: error };
			}
		}
		case 'DELETE': {
			try {
				const { 1: topfilepath, 2: uid } = filepath.match(/^(.+)\/([^/]+)$/);
				const topfile = fs.readFileSync(topfilepath, { encoding: 'utf-8' });
				const jsonTopfile = JSON.parse(topfile);

				const jsonFile = jsonTopfile.find((entry) => entry.uid === uid);

				if (!jsonFile) {
					return { status: 404 };
				}

				const index = jsonTopfile.findIndex((entry) => entry.uid === uid);
				jsonTopfile.splice(index, 1);

				fs.writeFileSync(topfilepath, JSON.stringify(jsonTopfile));

				return { status: 200, body: JSON.stringify(jsonFile) };
			} catch (error) {
				console.error(error);

				return { status: 400, body: error };
			}
		}
		default: {
			return { status: 400, body: `Method ${request.method} not supported.` };
		}
	}
}
