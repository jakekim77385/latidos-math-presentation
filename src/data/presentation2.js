// Content for Presentation 2 (Discussion Format): "함께 만드는 수학 플랫폼: 토론 안건"
// 8 slides (Title + Context + 5 Agendas + Closing), 3 languages (es/en/ko)

export const CONTENT_P2 = {
  es: {
    badge: '2ª Presentación',
    editionTitle: '2ª: Discusión',

    // Slide 1 - Title
    org: 'Club Heartitude · Panamá 2026',
    titleMain: ['Plataforma de Matemáticas:', 'Construyamos Juntos el Siguiente Paso'],
    titleSub: '5 temas clave para discutir · Construyamos juntos el camino de este proyecto',
    authorName: 'Jiyun Kim · Julio Carballeda',
    authorRole: 'Club Heartitude · Instagram: @heartitude_ba',

    // Slide 2 - Context & Purpose
    s2Eyebrow: 'Contexto · ¿Por qué estamos aquí hoy?',
    s2Title: ['Por los hermosos niños de Panamá,', 'estamos aquí para hacerlo juntos.'],
    s2Recap: 'En la 1ª sesión presentamos la plataforma. Hoy queremos avanzar juntos en las decisiones clave para su desarrollo.',
    s2FormatTitle: 'Formato de hoy:',
    s2FormatItems: [
      { icon: '📋', text: '3 temas previamente mencionados + 2 propuestas adicionales' },
      { icon: '💬', text: 'Cada tema: breve contexto → sus opiniones → decisión colectiva' },
      { icon: '🤝', text: 'Proyecto colaborativo entre Club Heartitude y la Dra. Morales de la Universidad de Panamá' },
    ],

    // Slide 3 - Agenda Overview
    sovTitle: 'Temas de hoy',
    sovPrevLabel: 'Desarrollo de los temas mencionados la semana pasada',
    sovNewLabel: 'Propuestas adicionales',
    sovItems: [
      { num: '01', title: 'Fortalecimiento del Contenido Teórico', type: 'prev' },
      { num: '02', title: 'Separación de Interfaces: Estudiante vs. Docente', type: 'prev' },
      { num: '03', title: 'Sistema de Inicio de Sesión', type: 'prev' },
      { num: '04', title: 'Comunicación y Proceso', type: 'new' },
      { num: '05', title: 'Coordinación de Calendario', type: 'new' },
    ],

    // Slide 4 - Agenda 1
    s3AgendaNum: '안건 01',
    s3Eyebrow: 'Agenda 1 · Fortalecimiento del Contenido Teórico',
    s3Title: ['¿Cómo mejorar las explicaciones', 'conceptuales de cada unidad?'],
    s3Context: 'Actualmente la plataforma solo tiene texto y ejercicios. Los docentes sugirieron agregar videos explicativos.',
    s3Questions: [
      {
        icon: '🎓',
        question: '¿Los hacemos juntos?',
        desc: 'Si la plataforma incluye los rostros de quienes estamos aquí hoy, se convierte de verdad en un proyecto de todos. Eso es lo que la haría especial.'
      },
      {
        icon: '🎯',
        question: '¿Por dónde empezamos? (Piloto)',
        desc: '¿Solo 1° grado primero? ¿O un área de aprendizaje (ej. Numeración, Operaciones Básicas) en todos los grados? No podemos hacerlo todo a la vez: definamos el alcance del piloto.'
      },
      {
        icon: '💬',
        question: '¿Otras ideas sobre los videos?',
        desc: 'Formato, duración, estilo… Cualquier opinión o sugerencia es bienvenida. Este es su espacio.'
      },
    ],

    // Slide 4 - Agenda 2
    s4AgendaNum: '안건 02',
    s4Eyebrow: 'Agenda 2 · Separación de Interfaces',
    s4Title: ['¿Debe haber un modo para estudiantes', 'y otro para docentes?'],
    s4Context: 'Actualmente todos ven la misma interfaz. ¿Tendría sentido ofrecer vistas diferenciadas?',
    s4Questions: [
      {
        icon: '🧒',
        question: '¿Qué necesitan los estudiantes?',
        desc: 'Desde la perspectiva de un niño de primaria: ¿qué funciones harían que disfruten aprender matemáticas?'
      },
      {
        icon: '👩‍🏫',
        question: '¿Qué necesitan los docentes?',
        desc: '¿Qué herramientas facilitarían la gestión del aula? ¿Seguimiento de progreso? ¿Asignación de tareas? ¿Reportes?'
      },
      {
        icon: '💬',
        question: '¿Otras ideas?',
        desc: '¿Separar en dos modos? ¿Mantener uno solo? ¿Un enfoque diferente? Todas las opiniones son bienvenidas.'
      },
    ],

    // Slide 5 - Agenda 3
    s5AgendaNum: '안건 03',
    s5Eyebrow: 'Agenda 3 · Sistema de Inicio de Sesión',
    s5Title: ['¿Cómo deberían los usuarios', 'acceder a la plataforma?'],
    s5Context: 'Actualmente la plataforma está abierta a todos. Pero a medida que avancemos, podríamos crear accesos exclusivos para quienes estamos aquí, haciendo de esto nuestro proyecto.',
    s5Questions: [
      {
        icon: '🔑',
        question: 'ID + Contraseña para nosotros',
        desc: 'Cada participante recibe su propio acceso. Así gestionamos juntos el contenido como un equipo exclusivo.'
      },
      {
        icon: '📱',
        question: 'OTP (contraseña de un solo uso)',
        desc: 'Más seguro. Pero requiere un celular o correo. ¿Es viable en todas las escuelas de Panamá?'
      },
      {
        icon: '🚫',
        question: '¿Sin login por ahora?',
        desc: 'Mantener acceso libre y abierto. Máximo de accesibilidad. ¿Es suficiente por ahora?'
      },
    ],

    // Slide 6 - Agenda 4
    s6AgendaNum: '안건 04',
    s6Eyebrow: 'Propuesta adicional 1 · Comunicación y Proceso',
    s6Title: ['Para llevar este proceso juntos,', 'primero necesitamos comunicarnos.'],
    s6Context: 'Este proyecto es un camino que construimos juntos. Empezando por Instagram, conversemos libremente sobre la comunicación y el proceso de trabajo.',
    s6Questions: [
      {
        icon: '📱',
        question: 'Seguir en Instagram',
        desc: '@heartitude_ba — Nuestro canal de conexión directa e inmediata. En la siguiente diapositiva escanearemos el código QR juntos.'
      },
      {
        icon: '💬',
        question: '¿Cómo nos comunicaremos?',
        desc: 'Escríbannos por DM (mensaje directo) o comentarios en cualquier momento. Un espacio abierto y sin formalidades para dudas, ideas y sugerencias.'
      },
      {
        icon: '🤝',
        question: '¿Cómo desarrollamos el proceso?',
        desc: 'Conversemos libremente sobre cómo trabajar juntos: planificación de contenidos, videos o revisión. Diseñemos un proceso cómodo para todos.'
      },
    ],

    // Slide 7 - QR Code
    sqrTitle: '¡Síganos ahora!',
    sqrSub: 'Escaneen este código QR para seguir a @heartitude_ba',

    // Slide 8 - Agenda 5
    s7AgendaNum: '안건 05',
    s7Eyebrow: 'Propuesta adicional 2 · Coordinación de Calendario',
    s7Title: ['¿Cuándo pueden ustedes', 'dedicarle tiempo al proyecto?'],
    s7Context: 'Para planificar los próximos pasos, necesitamos saber cómo están sus tiempos. Con esa información podemos avanzar.',
    s7Questions: [
      {
        icon: '📅',
        question: '¿Cuándo termina su semestre?',
        desc: 'Saber su calendario académico nos ayuda a coordinar los tiempos del proyecto.'
      },
      {
        icon: '⏰',
        question: '¿Hay algún momento ideal para reunirnos?',
        desc: 'Virtual o presencial, puntual o periódico… lo que funcione mejor para todos.'
      },
      {
        icon: '💬',
        question: '¿Otras ideas sobre la coordinación?',
        desc: 'Cualquier sugerencia sobre cómo organizarnos es bienvenida.'
      },
    ],

    // Slide 9 - Closing
    s8Eyebrow: 'Espacio abierto · Sus voces importan',
    s8Title: ['¿Qué más les gustaría', 'compartir con nosotros?'],
    s8Sub: 'Este es el momento para cualquier idea, sugerencia o inquietud que quieran expresar libremente:',
    s8L1Label: 'Plataforma Primaria (1° – 6°)',
    s8L2Label: 'Plataforma Preescolar',
    s8ActionTitle: 'También pueden escribirnos después:',
    fullscreen: 'Pantalla completa',
  },

  en: {
    badge: '2nd Presentation',
    editionTitle: '2nd: Discussion',

    org: 'Club Heartitude · Panama 2026',
    titleMain: ['Math Platform:', 'Let\'s Build the Next Step Together'],
    titleSub: '5 key topics to discuss · Let\'s build this project together',
    authorName: 'Jiyun Kim · Julio Carballeda',
    authorRole: 'Club Heartitude · Instagram: @heartitude_ba',

    s2Eyebrow: 'Context · Why are we here today?',
    s2Title: ['For the beautiful children of Panama,', 'we\'re here to do this together.'],
    s2Recap: 'In session 1, we introduced the platform. Today we want to make key development decisions together.',
    s2FormatTitle: 'Today\'s format:',
    s2FormatItems: [
      { icon: '📋', text: '3 previously discussed topics + 2 additional proposals' },
      { icon: '💬', text: 'Each topic: brief context → your opinions → collective decision' },
      { icon: '🤝', text: 'A collaborative project between Club Heartitude and Dra. Morales of the Universidad de Panamá' },
    ],

    // Slide 3 - Agenda Overview
    sovTitle: 'Today\'s Agenda',
    sovPrevLabel: 'Topics discussed last session',
    sovNewLabel: 'Additional proposals',
    sovItems: [
      { num: '01', title: 'Strengthening Concept Explanations', type: 'prev' },
      { num: '02', title: 'Interface Separation: Student vs. Teacher', type: 'prev' },
      { num: '03', title: 'Login System', type: 'prev' },
      { num: '04', title: 'Communication & Process', type: 'new' },
      { num: '05', title: 'Schedule Coordination', type: 'new' },
    ],

    s3AgendaNum: 'Agenda 01',
    s3Eyebrow: 'Agenda 1 · Strengthening Concept Explanations',
    s3Title: ['How should we improve', 'the theoretical content of each unit?'],
    s3Context: 'Currently the platform only has text and exercises. Teachers suggested adding explanatory videos.',
    s3Questions: [
      {
        icon: '🎓',
        question: 'Shall we make them together?',
        desc: 'If the platform features the faces of everyone here today, it truly becomes a project that belongs to all of us. That\'s what would make it special.'
      },
      {
        icon: '🎯',
        question: 'Where do we start? (Pilot)',
        desc: 'Just 1st grade first? Or one learning area (e.g. Numeration, Basic Operations) across all grades? We can\'t do everything at once: let\'s define the pilot scope.'
      },
      {
        icon: '💬',
        question: 'Any other ideas about the videos?',
        desc: 'Format, length, style… Any opinion or suggestion is welcome. This is your space.'
      },
    ],

    s4AgendaNum: 'Agenda 02',
    s4Eyebrow: 'Agenda 2 · Interface Separation',
    s4Title: ['Should there be a student mode', 'and a separate teacher mode?'],
    s4Context: 'Currently everyone sees the same interface. Would differentiated views add real value?',
    s4Questions: [
      {
        icon: '🧒',
        question: 'What do students need?',
        desc: 'From a child\'s perspective: what features would make learning math enjoyable?'
      },
      {
        icon: '👩‍🏫',
        question: 'What do teachers need?',
        desc: 'What tools would help manage the classroom? Progress tracking? Task assignment? Reports?'
      },
      {
        icon: '💬',
        question: 'Other ideas?',
        desc: 'Separate into two modes? Keep one? A different approach? All opinions are welcome.'
      },
    ],

    s5AgendaNum: 'Agenda 03',
    s5Eyebrow: 'Agenda 3 · Login System',
    s5Title: ['How should users', 'access the platform?'],
    s5Context: 'Currently the platform is open to everyone. But as we progress, we could create exclusive access for those of us here, making this truly our project.',
    s5Questions: [
      {
        icon: '🔑',
        question: 'ID + Password for us',
        desc: 'Each participant gets their own access. We manage the content together as an exclusive team.'
      },
      {
        icon: '📱',
        question: 'OTP (one-time password)',
        desc: 'More secure. But requires a phone or email. Is this viable across all Panamanian schools?'
      },
      {
        icon: '🚫',
        question: 'No login for now?',
        desc: 'Keep access free and open. Maximum accessibility. Is that enough for now?'
      },
    ],

    s6AgendaNum: 'Agenda 04',
    s6Eyebrow: 'Additional Proposal 1 · Communication & Process',
    s6Title: ['To carry out this process together,', 'we first need to communicate.'],
    s6Context: 'This project is a journey we build together. Starting with Instagram, let\'s openly discuss our communication and collaboration process.',
    s6Questions: [
      {
        icon: '📱',
        question: 'Follow on Instagram',
        desc: '@heartitude_ba — Our direct and immediate connection. In the next slide, we will scan the QR code together.'
      },
      {
        icon: '💬',
        question: 'How We Will Communicate',
        desc: 'Reach out anytime via DMs or comments. An open, casual space for your questions, feedback, and spontaneous ideas.'
      },
      {
        icon: '🤝',
        question: 'How Should We Shape the Process?',
        desc: 'Content planning, video creation, or review: let\'s openly share ideas on how to collaborate in a way that fits your schedule.'
      },
    ],

    sqrTitle: 'Follow us now!',
    sqrSub: 'Scan this QR code to follow @heartitude_ba',

    s7AgendaNum: 'Agenda 05',
    s7Eyebrow: 'Additional Proposal 2 · Schedule Coordination',
    s7Title: ['When can you', 'dedicate time to the project?'],
    s7Context: 'To plan our next steps, we need to understand your availability. With that info, we can move forward.',
    s7Questions: [
      {
        icon: '📅',
        question: 'When does your semester end?',
        desc: 'Knowing your academic calendar helps us coordinate project timelines.'
      },
      {
        icon: '⏰',
        question: 'Is there an ideal time to meet?',
        desc: 'Virtual or in person, one-time or recurring… whatever works best for everyone.'
      },
      {
        icon: '💬',
        question: 'Other ideas about coordination?',
        desc: 'Any suggestions on how to organize ourselves are welcome.'
      },
    ],

    s8Eyebrow: 'Open Floor · Your voices matter',
    s8Title: ['What else would you like', 'to share with us?'],
    s8Sub: 'This is the moment for any ideas, suggestions, or thoughts you\'d like to express freely:',
    s8L1Label: 'Elementary Platform (Grades 1\u20136)',
    s8L2Label: 'Preschool Platform',
    s8ActionTitle: 'You can also reach out to us later:',
    fullscreen: 'Fullscreen',
  },

  ko: {
    badge: '제 2회 발표',
    editionTitle: '2회: 토론',

    org: 'Club Heartitude · 파나마 2026',
    titleMain: ['수학 플랫폼:', '다음 단계를 함께 만들어 갑시다'],
    titleSub: '5가지 핵심 안건 · 같이 논의하고 함께 만들어 갔으면 좋겠습니다',
    authorName: '김지윤 (Jiyun Kim) · Julio Carballeda',
    authorRole: 'Club Heartitude · Instagram: @heartitude_ba',

    s2Eyebrow: '오늘의 목적 · 왜 여기 모였나요?',
    s2Title: ['아름다운 파나마 아이들을 위하여,', '같이하기 위해 모였습니다.'],
    s2Recap: '1회차에서 플랫폼을 소개했습니다. 오늘은 주요 방향을 함께 결정하고자 합니다.',
    s2FormatTitle: '오늘의 진행 방식:',
    s2FormatItems: [
      { icon: '📋', text: '지난번 논의 안건 3건 + 추가 제안 2건' },
      { icon: '💬', text: '각 안건: 배경 설명 → 여러분의 의견 → 함께 결정' },
      { icon: '🤝', text: '이 프로젝트는 Club Heartitude와 파나마 대학교(Universidad de Panamá) Dra. Morales 교수님의 공동 프로젝트입니다' },
    ],

    // Slide 3 - Agenda Overview
    sovTitle: '오늘의 안건',
    sovPrevLabel: '지난번 논의된 안건',
    sovNewLabel: '추가 제안',
    sovItems: [
      { num: '01', title: '개념(이론) 설명 강화', type: 'prev' },
      { num: '02', title: '학생용 vs 선생님용 구분', type: 'prev' },
      { num: '03', title: '로그인 시스템', type: 'prev' },
      { num: '04', title: '소통 및 협업 프로세스', type: 'new' },
      { num: '05', title: '일정 조율', type: 'new' },
    ],

    s3AgendaNum: '안건 01',
    s3Eyebrow: '안건 1 · 개념(이론) 설명 강화',
    s3Title: ['각 단원의 이론 설명을', '어떻게 강화할 수 있을까요?'],
    s3Context: '현재 플랫폼에는 텍스트와 문제만 있습니다. 여러분이 동영상 설명을 추가하자고 제안해 주셨습니다.',
    s3Questions: [
      {
        icon: '🎓',
        question: '우리가 함께 만들까요?',
        desc: '여기 계신 분들의 모습이 플랫폼에 함께 담긴다면, 그때 비로소 진정한 모두의 플랫폼이 되지 않을까요? 그것이 이 프로젝트를 특별하게 만들어 줄 것입니다.'
      },
      {
        icon: '🎯',
        question: '어디서부터 시작? (파일럿)',
        desc: '1학년만 먼저? 아니면 하나의 학습 영역(예: 수 체계, 기본 연산)을 전 학년에? 한께번에 다 못하니까, 파일럿 범위를 함께 정합시다.'
      },
      {
        icon: '💬',
        question: '동영상 관련 기타 의견',
        desc: '형식, 길이, 스타일… 어떤 의견이든 환영합니다. 여러분의 시간입니다.'
      },
    ],

    s4AgendaNum: '안건 02',
    s4Eyebrow: '안건 2 · 학생용 vs 선생님용 구분',
    s4Title: ['학생 모드와 교사 모드를', '따로 나눠야 할까요?'],
    s4Context: '현재 모든 사용자가 동일한 화면을 봅니다. 역할별로 다른 화면을 제공하면 좋을까요?',
    s4Questions: [
      {
        icon: '🧒',
        question: '초등학생에게 무엇이 필요할까요?',
        desc: '아이들 눈높이에서: 수학을 즐겁게 배울 수 있는 기능은 무엇일까요?'
      },
      {
        icon: '👩‍🏫',
        question: '선생님에게 무엇이 필요할까요?',
        desc: '학급 관리에 도움되는 도구는? 진도 추적? 과제 지정? 성취도 리포트?'
      },
      {
        icon: '💬',
        question: '기타 의견',
        desc: '두 모드로 분리? 하나로 유지? 또 다른 방법이 있을까요? 모든 의견을 환영합니다.'
      },
    ],

    s5AgendaNum: '안건 03',
    s5Eyebrow: '안건 3 · 로그인 시스템',
    s5Title: ['사용자가 플랫폼에', '어떻게 접근해야 할까요?'],
    s5Context: '현재 플랫폼은 누구에게나 열려 있습니다. 하지만 프로젝트가 진행되면, 여기 계신 분들만의 전용 계정을 만들어 우리만의 프로젝트로 운영할 수 있습니다.',
    s5Questions: [
      {
        icon: '🔑',
        question: '우리만의 아이디 + 비밀번호',
        desc: '참여자 각자가 전용 계정을 받습니다. 함께 콘텐츠를 관리하는 특별한 팀이 됩니다.'
      },
      {
        icon: '📱',
        question: 'OTP (일회용 비밀번호)',
        desc: '보안성 높음. 하지만 휴대폰이나 이메일 필요. 파나마 모든 학교에서 가능한가?'
      },
      {
        icon: '🚫',
        question: '로그인 없이 유지?',
        desc: '누구나 자유롭게 접근 가능. 접근성은 최고. 지금은 이것으로 충분할까요?'
      },
    ],

    s6AgendaNum: '안건 04',
    s6Eyebrow: '추가 제안 1 · 소통 및 협업 프로세스',
    s6Title: ['우리의 프로세스를 함께 진행하려면,', '먼저 소통이 필요합니다.'],
    s6Context: '이 프로젝트는 함께 만들어가는 과정입니다. 먼저 인스타 팔로우로 연결하고, 소통 방식과 앞으로의 협업 프로세스를 자유롭게 이야기해 봅시다.',
    s6Questions: [
      {
        icon: '📱',
        question: '인스타그램 팔로우',
        desc: '@heartitude_ba — 가장 빠르고 직접적인 소통 창구입니다. 다음 슬라이드의 QR 코드로 바로 팔로우해 주세요.'
      },
      {
        icon: '💬',
        question: '팔로우 후 어떻게 소통할까요?',
        desc: 'DM(메시지)이나 댓글로 질문, 피드백, 작은 아이디어까지 언제든 편하게 말 걸어주세요. 격식 없는 실시간 소통 창구입니다.'
      },
      {
        icon: '🤝',
        question: '협업 프로세스는 어떻게 진행할까요?',
        desc: '콘텐츠 기획, 영상 제작, 검수 참여 등 우리가 어떤 방식으로 함께 만들어 가면 좋을지 여러분의 생각을 자유롭게 들려주세요.'
      },
    ],

    sqrTitle: '지금 팔로우하세요!',
    sqrSub: '이 QR코드를 스캔해서 @heartitude_ba를 팔로우해 주세요',

    s7AgendaNum: '안건 05',
    s7Eyebrow: '추가 제안 2 · 일정 조율',
    s7Title: ['여러분의 일정은', '어떻게 되나요?'],
    s7Context: '다음 단계를 계획하려면, 여러분의 시간을 알아야 합니다. 그래야 함께 앞으로 나아갈 수 있습니다.',
    s7Questions: [
      {
        icon: '📅',
        question: '이번 학기는 언제 끝나나요?',
        desc: '학사 일정을 알면 프로젝트 일정을 조율할 수 있습니다.'
      },
      {
        icon: '⏰',
        question: '만날 수 있는 적합한 시기가 있나요?',
        desc: '온라인 또는 대면, 일회성 또는 정기적… 모두에게 맞는 방식으로.'
      },
      {
        icon: '💬',
        question: '일정 조율 관련 기타 의견',
        desc: '어떻게 조직하면 좋을지 어떤 제안이든 환영합니다.'
      },
    ],

    s8Eyebrow: '의견 청취 · 여러분의 목소리가 중요합니다',
    s8Title: ['또 나누고 싶은 이야기가', '있으신가요?'],
    s8Sub: '지금이 어떤 아이디어, 제안, 고민이든 자유롭게 말씀해 주실 시간입니다:',
    s8L1Label: '초등 수학 플랫폼 (1~6학년)',
    s8L2Label: '유아 수학 플랫폼',
    s8ActionTitle: '나중에도 언제든 연락해 주세요:',
    fullscreen: '전체화면',
  }
}
