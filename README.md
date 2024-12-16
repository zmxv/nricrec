# NRIC Recovery Tool

A browser-based tool to recover possible NRIC numbers based on birth year and known suffix. Built with vanilla JavaScript, running entirely client-side.

## Purpose

This tool demonstrates that masking NRIC numbers by showing only the last 4 characters (e.g., "####123A") provides limited security value. Given just the birth year and these 4 characters, the full NRIC can be recovered with minimal computation.

NRIC numbers should not be treated as sensitive information—they are identifiers, not authenticators.

Please refer to [MDDI's post on NRIC](https://www.mddi.gov.sg/mddi-s-reply-to-media-queries-on-disclosure-of-nric-number-on-bizfile-system/) for more information.

## Usage

1. Select the year of birth from the dropdown menu (1968-2024)
2. Enter the last 4 characters of the NRIC (3 digits followed by a checksum letter)
3. Click "Recover" to see possible NRIC numbers

## Privacy & Security

- All calculations are performed locally in your browser
- No data is stored or transmitted
- No external dependencies or tracking
