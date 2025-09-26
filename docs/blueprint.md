# **App Name**: Sacred Hearts Novena Portal

## Core Features:

- Dynamic Novena Display: Dynamically render and display the selected novena's content, divided into daily tabs.
- Interactive Saint Selection: Enable browsing of saints by month with a 'stories' style interface to load novenas on demand.
- Themed Card Interface: Provide four theme options (default, dark gray, light gray, red) for the main content card, changing its color scheme dynamically.
- AI Reflection Generator: Integrate with the Gemini API to generate short, theologically relevant reflections on each day's prayer. Uses gemini-2.5-flash-preview-05-20 as a tool to provide insight and depth.
- AI Prayer Audio Generation: Utilize the Gemini API's text-to-speech model (gemini-2.5-flash-preview-tts) to convert the novena prayer text into audible WAV audio format. The generated PCM base64 data must then be converted into playable audio using a tool within the user's browser.
- Monthly Saint Filtering: Allow users to filter and view saints' novenas based on the selected month.
- Social Media Integration: Add social media links (Instagram, WhatsApp) and a link to the developer's portfolio in the footer.

## Style Guidelines:

- Background: Light gray gradients, shifting subtly.
- Primary color: Dark red (#7c0909) to convey a sense of sacredness.
- Accent color: Gold (#D4AF37) to highlight interactive elements.
- Headline Font: 'Cinzel Decorative', serif, for headings, titles, and emphasized text. Note: currently only Google Fonts are supported.
- Body Font: 'EB Garamond', serif, for main text and descriptions. Note: currently only Google Fonts are supported.
- Use classic, gothic-style icons relevant to Catholicism.
- Card-based layout for displaying novena content with clear sectioning.
- Subtle transitions and animations when switching between novena days.