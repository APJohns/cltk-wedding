import { google } from 'googleapis';
import type { Actions } from './$types';
import { clientEmail, googleSheetId, googleSheetPage, privateKey } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({cookies, request}) => {
    const guestCols = ['name', 'attendance', 'meal', 'allergies'];
		const data = await request.formData();
    console.log(data);

    const numberOfGuests = Array.from(data.keys()).map(key => key[0]).reduce((acc, cur) => {
      if (Number(cur) > acc) {
        return Number(cur)
      } else {
        return acc
      }
    }, 0);

    const rsvpData = []
    for (let i = 0; i <= numberOfGuests; i++) {
      const cols = guestCols.map(col => data.has(`${i}-${col}`) ? data.get(`${i}-${col}`) : undefined);
      rsvpData.push([data.get('guest-code'), ...cols]);
    }

    console.log(rsvpData);

    // authenticate the service account
    const googleAuth = new google.auth.JWT(
        clientEmail,
        undefined,
        privateKey.replace(/\\n/g, '\n'),
        'https://www.googleapis.com/auth/spreadsheets'
    );

    async function readSheet() {
      try {
        const sheetInstance = await google.sheets({ version: 'v4', auth: googleAuth});

        const infoObjectFromSheet = await sheetInstance.spreadsheets.values.get({
            auth: googleAuth,
            spreadsheetId: googleSheetId,
            range: `${googleSheetPage}`,
        });

        const valuesFromSheet = infoObjectFromSheet.data.values;
        return valuesFromSheet;
      }
      catch(err) {
        console.log("readSheet func() error", err);
        return null;
      }
    }

    async function updateSheet(data: any[][]) {
      try {
        const sheetInstance = await google.sheets({ version: 'v4', auth: googleAuth});

        await sheetInstance.spreadsheets.values.update({
            auth: googleAuth,
            spreadsheetId: googleSheetId,
            range: `${googleSheetPage}`,
            valueInputOption: 'RAW',
            requestBody: {
              values: data,
            },
        });
      }
      catch(err) {
        console.log("updateSheet func() error", err);
      }
    }

    const existingData = await readSheet();
    console.log(existingData);
    if (existingData) {
      if (existingData.map(cols => cols[0]).includes(data.get('guest-code'))) {
        return fail(400, { error: 'Guest of that guest code has already sent an RSVP' });
      }
      console.log(existingData.concat(rsvpData));
      updateSheet(existingData.concat(rsvpData));
    } else {
      return fail(400, { error: true });
    }

    return { success: true };
	},
} satisfies Actions;