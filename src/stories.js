// ADD A STORY: copy one block below, edit it, and put it at the top of the list.
// The gallery tile, the story page, the care note and the withdraw link are all built from it.
//
// Files go in /public/stories/<slug>/ and are referenced as '/stories/<slug>/file.jpg'.
// Photographs are always shown whole. Never cropped.
//
// Story fields:
//   slug, code (e.g. 'PH-2026-04'), title, teller (initials or name), year, place,
//   told: 'Named, with permission' | 'Pseudonym' | 'Anonymous, voice altered' ...
//   reviewed: when the person last confirmed consent (e.g. 'March 2026')
//   translation: optional, e.g. 'Translated from Portuguese and checked by R.'
//   editing: optional, overrides the default editing note
//   cover: optional '/stories/slug/cover.jpg' (shown whole), coverAlt: its description
//   ratio: placeholder shape when there is no cover, e.g. '4/5', '3/2', '1'
//   intro: one or two lines
//   blocks: any mix, in any order:
//     { type: 'text',  body: 'Paragraph one.\n\nParagraph two.' }
//     { type: 'image', src: '/stories/slug/photo.jpg', alt: 'Describe it', caption: 'Optional' }
//     { type: 'audio', src: '/stories/slug/voice.mp3',
//       transcript: { en: 'English text', original: 'Original text', lang: 'es' } }
//       (transcript can also be a plain string)
//     { type: 'video', provider: 'youtube', id: 'VIDEO_ID', title: 'Describe it' }
//     { type: 'video', provider: 'vimeo',   id: '123456789', title: 'Describe it' }
//     { type: 'video', provider: 'file',    src: '/stories/slug/clip.mp4', captions: '/stories/slug/clip.vtt' }
//
// Transcript marks:  …  hesitation   [inaudible, 01:12]  unclear   […]  a cut agreed with the teller

export const stories = [
  {
    slug: 'the-night-shift',
    code: 'PH-2026-01',
    title: 'The night shift',
    teller: 'J.',
    year: 2026,
    place: 'A city I will not name',
    told: 'Pseudonym',
    reviewed: 'March 2026',
    ratio: '4/5',
    intro: 'A sample story so you can see how the page reads. Replace or delete it.',
    blocks: [
      { type: 'text', body: 'This is where the story begins. You can write it the way it was told to you, or leave it to the audio and let the text stay small.\n\nSecond paragraphs work too.' },
      { type: 'image', ratio: '3/2', alt: 'A placeholder for a photograph', caption: 'A photograph goes here, shown whole.' },
      { type: 'text', body: 'Text can come back after an image. Blocks follow the order you list them in.' },
    ],
  },
  {
    slug: 'a-voice-over-a-window',
    code: 'OH-2026-01',
    title: 'A voice over a window',
    teller: 'R.',
    year: 2026,
    place: 'Third floor, east side',
    told: 'Anonymous, voice altered',
    reviewed: 'February 2026',
    translation: 'Translated from the original and checked by R.',
    ratio: '3/2',
    intro: 'A photograph with a recording. Add an mp3 to hear it here.',
    blocks: [
      { type: 'image', ratio: '2/3', alt: 'A placeholder for a photograph', caption: 'Taken from the street.' },
      {
        type: 'audio',
        // src: '/stories/a-voice-over-a-window/voice.mp3',
        transcript: {
          en: 'I wasn’t sure … whether to say it. [inaudible, 01:12] And she just … waited. […] That was enough.',
          original: 'No estaba segura … de si decirlo. [inaudible, 01:12] Y ella solo … esperó. […] Eso fue suficiente.',
          lang: 'es',
        },
      },
    ],
  },
  {
    slug: 'what-we-kept',
    code: 'PH-2026-02',
    title: 'What we kept',
    teller: 'M.',
    year: 2025,
    place: 'Kitchen table',
    told: 'Named, with permission',
    reviewed: 'January 2026',
    ratio: '1',
    intro: 'A video story. Add a YouTube or Vimeo id to show it.',
    blocks: [
      // { type: 'video', provider: 'youtube', id: 'VIDEO_ID', title: 'M. talks about what they kept' },
      { type: 'text', body: 'Videos you host on YouTube or Vimeo, set to unlisted, appear as an embed.' },
    ],
  },
]
