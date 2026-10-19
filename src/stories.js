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
//       (add original: 'Original text', lang: 'fr' to give visitors an English / Original toggle;
//        add lines: true to keep every line break, for spoken or poem-like texts)
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
    slug: 'resilience',
    code: 'OH-2025-01',
    title: 'Resilience',
    teller: 'Anonymous',
    year: 2025,
    told: 'Anonymous',
    reviewed: '[date to confirm]',
    translation: 'Translated from the French original. The original is available above the text.',
    editing:
      'Excerpt from a 4′27″ voice recording made on 30 June 2025, in which the teller travels back to 15 July 2019. Light edit for readability.',
    cover: '/stories/resilience/photo.jpg',
    coverAlt:
      'Blurred photograph of a person seen from behind, one arm stretched toward a plate on a table, in soft blue-gray light.',
    intro: 'Voyage into the past: 15 July 2019.',
    blocks: [
      {
        type: 'image',
        src: '/stories/resilience/photo.jpg',
        alt: 'Blurred photograph of a person seen from behind, one arm stretched toward a plate on a table, in soft blue-gray light.',
      },
      {
        type: 'text',
        lang: 'fr',
        body: `When I think of resilience, I always think back to the years I spent working in a restaurant, three hours from home. My days began at six in the morning. I had to take a train, then a bus, then another train… and from the last station, I walked for half an hour. Sometimes I ran, to cut that down to fifteen minutes, because I couldn’t afford to be late.

I worked there every day, until I could go back to school. Even after that, I kept working on weekends. But more often than not, when they needed me, I gave up my Friday classes to work as an extra. I was constantly exhausted. One Monday morning, my French teacher found me asleep at my desk. After class, he took me aside to talk about my “behaviour”. He knew a little about my situation. He knew I had to work because, unlike my classmates, I didn’t receive family allowance. But he didn’t know everything: on weekends I worked until midnight, got home around one in the morning… and at six I had to be up already for school.

When I explained it to him, I saw his expression change. His eyes filled with tears. He said to me: “Forget all that. Never be ashamed of being tired in class.” That moment changed everything for me. He became one of the few people who truly supported me. He helped me with the papers I was preparing for the Ministry of Foreign Affairs, guided me through the administrative procedures, and encouraged me to stand up for myself.

He often told me: “Before being from this country or that one, you are a human being. You count as much as anyone else.” He even convinced my other teachers to write letters on my behalf, so that I could stay in the country, to try to change the Ministry’s decision and grant me residence papers. He showed me how to contact human rights organisations, ministries, the government. And he kept telling me: “When you go to claim your rights, go with your head held high. And if they try to intimidate you, answer them, never let yourself be reduced to silence.”

Even today, whenever I feel small or powerless, I think back to that moment. To his words. They remind me that even in the hardest situations, there are always people ready to see you, to support you, and to remind you that you belong.`,
        original: `Quand je pense à la résilience, je repense toujours aux années passées à travailler dans un restaurant, à trois heures de chez moi. Mes journées commençaient à six heures du matin. Je devais prendre un train, puis un bus, puis encore un train… et depuis la dernière station, je marchais une demi-heure. Parfois, je courais pour réduire ce temps à quinze minutes, parce que je ne pouvais pas me permettre d’être en retard.

J’y ai travaillé tous les jours, jusqu’à ce que je puisse retourner à l’école. Même après ça, j'ai continué à bosser le week-end. Mais le plus souvent, quand on avait besoin de moi, je sacrifiais les cours du vendredi pour assurer comme extra. J’étais constamment épuisée. Un lundi matin, mon prof de français m’a trouvée endormie à mon bureau. Après le cours, il m’a pris à part pour discuter de mon “comportement”. Il connaissait un peu ma situation. Il savait que je devais travailler parce que, contrairement à mes camarades, je ne recevais pas d'allocations familiales. Mais il ne savait pas tout : le week-end, je bossais jusqu’à minuit, je rentrais vers une heure du matin… et à six heures, je devais déjà être debout pour les cours.

Quand je lui ai expliqué, j’ai vu son regard changer. Ses yeux se sont remplis de larmes. Il m’a dit : « Oublie tout ça. N’aie jamais honte d’être fatiguée en cours. » Ce moment-là a tout changé pour moi. Il est devenu l’une des rares personnes à vraiment me soutenir. Il m’a aidée avec mes papiers que je rédigeais au Ministère des Affaires Étrangères, il m’a guidé dans les démarches administratives, m’a encouragée à me défendre.

Il me disait souvent : « Avant d’être originaire de tel ou tel pays, tu es un être humain. Tu comptes autant que n’importe qui d’autre. » Il a même convaincu mes autres professeurs d’écrire des lettres en ma faveur, pour rester dans le pays, pour essayer de faire changer la décision du Ministère et m’accorder les papiers de séjour. Il m’a montrée comment contacter des associations de défense des droits humains, les ministères, le gouvernement. Et il me répétait : « Quand tu vas revendiquer tes droits, vas-y la tête haute. Et s’ils essaient de t’intimider, réponds-leur, ne te laisse jamais réduire au silence. »

Aujourd’hui encore, chaque fois que je me sens petite ou impuissante, je repense à ce moment. À ses mots. Ils me rappellent que même dans les situations les plus difficiles, il y a toujours des gens prêts à te voir, à te soutenir, et à te rappeler que tu as ta place.`,
      },
    ],
  },
  {
    slug: 'to-survive',
    code: 'OH-2025-02',
    title: 'To survive',
    teller: 'B.J.',
    year: 2025,
    told: 'Initials only',
    reviewed: '[date to confirm]',
    translation: 'Translated from the French original. The original is available above the text.',
    editing:
      'Excerpt from a 3′53″ voice recording made on 3 July 2025, in which the teller travels back to 11 October 2018. Light edit for readability.',
    ratio: '4/5',
    intro: 'Voyage into the past: 11 October 2018.',
    blocks: [
      {
        type: 'text',
        lang: 'fr',
        lines: true,
        body: `I get up before the sun. I pull on my boots. Off to the building site. It’s all I know how to do: work, provide for myself and my little family.
Sometimes I even work weekends.
And yet… there’s this weight I can’t shake off.
My little boy… he’s seven years old. Seven.
Every day I watch him grow, and I feel… I feel like I’m missing it.
I miss him.
I build houses for other people, but am I… am I building memories with him?
I wonder… when I finally slow down, will he already be grown?
Will I have lost everything?
I work for him. For his future. To give him what I never had.
But some days I ask myself: am I doing things right?
In trying to give him everything… am I losing what matters most? The little things that count?
I hope… I hope that one day he’ll understand.
That every exhausting morning, every aching muscle, every hour of absence… was for him.
Even if I feel that this time can never be recovered.
This is what it costs.
This is what it means to survive.`,
        original: `Je me lève avant le soleil. J'enfile mes bottes. Direction le chantier. C'est tout ce que je sais faire : travailler, subvenir à mes besoins et ceux de ma petite famille.
Parfois, je travaille même le week-end.
Et pourtant… il y a ce poids dont je n'arrive pas à me débarrasser.
Mon petit garçon… il a sept ans. Sept ans.
Chaque jour, je le regarde grandir, et j'ai l'impression… j'ai l'impression que ça me manque.
Il me manque.
Je construis des maisons pour d'autres, mais est-ce que je… est-ce que je construis des souvenirs avec lui ?
Je me demande… quand je ralentirai enfin, sera-t-il déjà grand ?
Aurai-je tout perdu ?
Je travaille pour lui. Pour son avenir. Pour lui donner ce que je n'ai jamais eu.
Mais certains jours, je me demande : est-ce que je fais bien les choses ?
En essayant de tout lui donner… est-ce que je perds l'essentiel ? Les petites choses qui comptent ?
J'espère… j'espère qu'un jour il comprendra.
Que chaque matinée épuisante, chaque muscle douloureux, chaque heure d'absence… c'était pour lui.
Même si j'ai l'impression que ce temps est irrécupérable.
C'est ce que ça coûte.
C'est ce que ça signifie de survivre.`,
      },
    ],
  },
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
