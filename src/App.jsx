import { useState, useEffect, useCallback } from 'react'
import './index.css'

// ─── CONTENT (ES / EN) ──────────────────────────────────────
const CONTENT = {
  es: {
    // Slide 1
    org: 'Club Heartitude · Panamá 2026',
    titleMain: ['Matemáticas para Panamá:', 'Una herramienta nacida del aula'],
    titleSub: 'Plataformas digitales gratuitas · Basadas en MEDUCA 2024 · Preescolar y Primaria 1° – 6°',
    authorName: 'Jiyun Kim',
    authorRole: 'Instagram: @heartitude_ba',
    // Slide 2
    s2Eyebrow: 'El punto de partida · Panamá, 2021',
    s2Title: ['Llegué a Panamá.', 'Y algo llamó mi atención.'],
    s2Scene1: ['En una cafetería, pagué y recibí el vuelto. ', 'Algo no cuadraba.', ' Conté de nuevo — era diferente.'],
    s2Scene2: ['En el supermercado, lo mismo. A veces ', 'de menos', ', a veces ', 'de más', '. No era deshonestidad — era algo más profundo.'],
    s2Question: '¿Tiene esto relación con cómo se enseñan las operaciones básicas?',
    // Slide 3
    s3Eyebrow: 'Una pregunta sincera',
    s3Title: ['Siempre amé las matemáticas.', 'Entonces me pregunté:', 'El mundo enseña lo mismo?'],
    s3Em: '¿Se enseña lo mismo en todo el mundo?',
    s3Sub: 'Revisé los currículos oficiales de los tres países y los comparé en detalle.',
    s3Flag1: 'Corea del Sur', s3Flag2: 'Estados Unidos', s3Flag3: 'Panamá — MEDUCA',
    // Slide 4
    s4Eyebrow: 'Lo que encontré',
    s4Title: 'El contenido matemático es universal',
    s4Sub: 'Los tres currículos cubren esencialmente los mismos temas',
    s4Col1: 'Grado', s4Col2: '🇰🇷 Corea', s4Col3: '🇺🇸 EE.UU.', s4Col4: '🇵🇦 MEDUCA',
    s4Rows: [
      ['1° – 2°', 'Números, suma y resta, intro multiplicación', 'Operaciones básicas, valor posicional, medidas', 'Reconocimiento numérico, operaciones básicas, figuras'],
      ['3° – 4°', 'Fracciones, decimales, mult. y div.', 'Mult. y div., fracciones, área y perímetro', 'Mult. y div., fracciones, decimales, medición'],
      ['5° – 6°', 'Razones, estadística, probabilidad', 'Razones, estadística, álgebra básica', 'Fracciones avanzadas, razones, estadística, álgebra inicial'],
    ],
    s4Badge: 'Contenidos equivalentes',
    s4Note: 'El currículo MEDUCA está alineado con estándares internacionales',
    // Slide 5
    s5Eyebrow: 'El problema que encontré',
    s5Title: ['El currículo anterior avanzaba', 'demasiado rápido'],
    s5Cards: [
      { icon:'⚡', title:'Progresión acelerada', desc:'Algunos contenidos se introducían en grados muy tempranos, antes de que los estudiantes los pudieran asimilar bien.' },
      { icon:'⏩', title:'Sin tiempo de consolidar', desc:'Se avanzaba al siguiente tema antes de que el anterior quedara bien comprendido y practicado.' },
      { icon:'🧱', title:'Base frágil', desc:'Sin dominio de las operaciones básicas, los conceptos posteriores — fracciones, razones, álgebra — se vuelven muy difíciles.' },
    ],
    // Slide 6
    s6Eyebrow: 'MEDUCA · Revisión Curricular 2024',
    s6Title: ['La reforma mejoró el ritmo.', 'Pero aún quedan brechas.'],
    s6Cards: [
      { icon:'✅', type:'suc', title:'Lo que mejoró', desc:'La progresión fue ajustada. Se adoptó el enfoque de Derechos Fundamentales de Aprendizaje (DFA) — primero comprensión, luego avance.' },
      { icon:'⚠️', type:'war', title:'Lo que aún falta', desc:'Algunos contenidos siguen introduciéndose antes que en Corea o EE.UU. — y para esos contenidos, faltan herramientas de práctica suficientes.' },
      { icon:'💡', type:'pos', title:'La oportunidad', desc:'La reforma va en la dirección correcta. Lo que necesita ahora son herramientas digitales que acompañen esa visión pedagógica.' },
    ],
    // Slide 7
    s7Eyebrow: 'Tres fuentes · Una misma conclusión',
    s7Title: 'La necesidad no surgió de un libro.',
    s7Scenes: [
      { icon:'☕', text:['Observación personal:', ' En cafeterías y supermercados, el cálculo de vuelto con frecuencia era incorrecto — señal de fragilidad en las operaciones básicas.'] },
      { icon:'👩‍🏫', text:['Voz del campo:', ' Maestros voluntarios y padres de familia confirmaron: los niños necesitan ', 'más práctica con las cuatro operaciones básicas', ' desde edad temprana.'] },
      { icon:'📊', text:['Análisis curricular:', ' La comparación de tres currículos confirmó la brecha en herramientas de práctica adaptadas al contexto panameño.'] },
    ],
    s7Question: 'Las tres fuentes apuntaban al mismo lugar: operaciones básicas · práctica temprana · herramientas accesibles',
    // Slide 8
    s8Eyebrow: 'La respuesta',
    s8Title: 'Dos plataformas · Una misma filosofía',
    s8Sub: 'Si la base es sólida desde pequeño, todo lo que viene después se construye mejor.',
    s8P1Title: 'Matemáticas para Preescolar',
    s8P1Desc: 'Operaciones básicas desde edad temprana — a través del juego. Porque si los números son divertidos desde pequeño, el camino después es mucho más fácil.',
    s8P1Tags: ['Reconocimiento numérico','Suma y resta','Bingo de tablas','Medallas y recompensas','Optimizada para móvil'],
    s8P2Title: 'Matemáticas para Primaria · 1° – 6°',
    s8P2Desc: 'Basada en los Derechos Fundamentales de Aprendizaje (DFA) · MEDUCA 2024. Para que cada estudiante comprenda, practique y avance a su ritmo.',
    s8P2Tags: ['Aprende','Vocabulario','Practica','Evalúa','Zona de Juegos'],
    // Slide 9
    s9Eyebrow: 'Plataforma Principal',
    s9Title: 'Matemáticas para Primaria',
    s9Desc: 'Elaborada en concordancia con los Derechos Fundamentales de Aprendizaje (DFA) del MEDUCA, conforme a la Guía Metodológica de Matemáticas · revisión curricular 2024.',
    s9Tags: ['DFA · MEDUCA 2024','Gratuita','1° a 6° grado','En español','Sin instalación'],
    s9Features: [
      { icon:'📖', title:'Aprende', desc:'Explicaciones conceptuales claras con ejemplos visuales adaptados al contexto panameño.' },
      { icon:'📚', title:'Vocabulario', desc:'Glosario de términos matemáticos precisos para cada grado y unidad.' },
      { icon:'✏️', title:'Practica', desc:'Ejercicios interactivos con retroalimentación inmediata — tiempo suficiente para consolidar.' },
      { icon:'📊', title:'Evalúa', desc:'Medición del logro por unidad, alineada con los indicadores DFA.' },
      { icon:'🎮', title:'Zona de Juegos', desc:'Speed Blitz · Drill Clásico · Memory Match — refuerzo lúdico.' },
    ],
    // Slide 10
    s10Eyebrow: 'Alineación curricular',
    s10Title: '🇵🇦 Basada en DFA · MEDUCA 2024',
    s10Sub: 'Contenidos, competencias e indicadores de logro · Grados 1° al 6° de Primaria',
    s10Grades: [
      { label:'1° Grado', title:'Fundamentos', topics:['Números del 0 al 100','Suma y resta básica','Figuras geométricas','Medidas de longitud'] },
      { label:'2° Grado', title:'Construyendo', topics:['Números hasta 1,000','Tablas de multiplicar','Fracciones simples','Tiempo y calendario'] },
      { label:'3° Grado', title:'Ampliando', topics:['Multiplicación y división','Números hasta 10,000','Fracciones equivalentes','Perímetro y área'] },
      { label:'4° Grado', title:'Profundizando', topics:['Decimales','Fracciones: suma y resta','Ángulos y polígonos','Estadística básica'] },
      { label:'5° Grado', title:'Aplicando', topics:['Operaciones con decimales','Razones y proporciones','Porcentajes','Volumen'] },
      { label:'6° Grado', title:'Integrando', topics:['Álgebra inicial','Estadística y probabilidad','Razones avanzadas','Geometría espacial'] },
    ],
    // Slide 11
    s11Eyebrow: 'Una solicitud sincera',
    s11Title: ['Yo construí la herramienta.', 'Ustedes tienen el conocimiento pedagógico.'],
    s11Sub: 'Soy estudiante, no experta en educación. Por eso su perspectiva como futuros maestros vale mucho más que la mía. ¿Me ayudarían a mejorarla?',
    s11Roles: [
      { num:'01', title:'Explorarla', desc:'Úsenla libremente. ¿Qué funciona bien? ¿Qué se siente extraño o incompleto desde su perspectiva como futuros docentes?' },
      { num:'02', title:'Evaluarla', desc:'¿Los contenidos y la progresión son pedagógicamente adecuados? Ustedes están formándose para saberlo mejor que yo.' },
      { num:'03', title:'Decirme qué falta', desc:'Cualquier observación, por pequeña que sea, me ayudaría enormemente a mejorar esta herramienta.' },
    ],
    // Slide 12
    s12Eyebrow: 'Gracias',
    s12Title: ['Construyamos juntos', 'el futuro matemático', 'de los niños de Panamá.'],
    s12Sub: 'Esto es solo el comienzo. Queremos que sea el inicio de una colaboración real, duradera y significativa.',
    s12L1Label: 'Primaria · 1° – 6°',
    s12L2Label: 'Preescolar',
    fullscreen: 'Pantalla completa',
  },
  en: {
    org: 'Club Heartitude · Panama 2026',
    titleMain: ['Mathematics for Panama:', 'A Tool Born from the Classroom'],
    titleSub: 'Free digital platforms · Based on MEDUCA 2024 · Preschool and Elementary Grades 1–6',
    authorName: 'Jiyun Kim',
    authorRole: 'Instagram: @heartitude_ba',
    s2Eyebrow: 'The starting point · Panama, 2021',
    s2Title: ['I arrived in Panama.', 'And something caught my attention.'],
    s2Scene1: ['At a café, I paid and received change. ', 'Something didn\'t add up.', ' I counted again — it was wrong.'],
    s2Scene2: ['At the supermarket, the same thing. Sometimes ', 'too little', ', sometimes ', 'too much', '. It wasn\'t dishonesty — there was something deeper.'],
    s2Question: 'Could this be related to how basic arithmetic operations are taught here?',
    s3Eyebrow: 'A sincere question',
    s3Title: ['I have always loved mathematics.', 'So I asked myself:', ''],
    s3Em: 'Is math taught the same way everywhere?',
    s3Sub: 'I reviewed the official curricula of all three countries and compared them in detail.',
    s3Flag1: 'South Korea', s3Flag2: 'United States', s3Flag3: 'Panama — MEDUCA',
    s4Eyebrow: 'What I found',
    s4Title: 'Mathematical content is universal',
    s4Sub: 'All three curricula cover essentially the same topics',
    s4Col1: 'Grade', s4Col2: '🇰🇷 Korea', s4Col3: '🇺🇸 USA', s4Col4: '🇵🇦 MEDUCA',
    s4Rows: [
      ['Grades 1–2', 'Numbers, addition & subtraction, intro to multiplication', 'Basic operations, place value, measurement', 'Number recognition, basic operations, shapes'],
      ['Grades 3–4', 'Fractions, decimals, multiplication & division', 'Mult. & div., fractions, area & perimeter', 'Mult. & div., fractions, decimals, measurement'],
      ['Grades 5–6', 'Ratios, statistics, probability', 'Ratios, statistics, introductory algebra', 'Advanced fractions, ratios, statistics, intro algebra'],
    ],
    s4Badge: 'Equivalent content',
    s4Note: 'The MEDUCA curriculum is aligned with international standards',
    s5Eyebrow: 'The problem I identified',
    s5Title: ['The previous curriculum', 'moved too fast'],
    s5Cards: [
      { icon:'⚡', title:'Accelerated progression', desc:'Some content was introduced in very early grades, before students could properly absorb it.' },
      { icon:'⏩', title:'No time to consolidate', desc:'Students moved to the next topic before the previous one was fully understood and practiced.' },
      { icon:'🧱', title:'Fragile foundation', desc:'Without mastery of the four basic operations, everything that follows — fractions, ratios, algebra — becomes much harder.' },
    ],
    s6Eyebrow: 'MEDUCA · 2024 Curriculum Revision',
    s6Title: ['The reform improved the pace.', 'But gaps remain.'],
    s6Cards: [
      { icon:'✅', type:'suc', title:'What improved', desc:'The progression was adjusted. The Fundamental Learning Rights (DFA) approach was adopted — comprehension first, then advancement.' },
      { icon:'⚠️', type:'war', title:'What still needs work', desc:'Some content is still introduced earlier than in Korea or the US — and for those topics, there are insufficient practice tools.' },
      { icon:'💡', type:'pos', title:'The opportunity', desc:'The reform is heading in the right direction. What it needs now are digital tools that support that pedagogical vision.' },
    ],
    s7Eyebrow: 'Three sources · One conclusion',
    s7Title: "This need didn't come from a book.",
    s7Scenes: [
      { icon:'☕', text:['Personal observation:', ' In cafés and supermarkets, change calculations were frequently incorrect — a sign of fragility in basic arithmetic.'] },
      { icon:'👩‍🏫', text:['Voices from the field:', ' Volunteer teachers and parents confirmed: children need ', 'more practice with the four basic operations', ' from an early age.'] },
      { icon:'📊', text:['Curriculum analysis:', ' Comparing three national curricula confirmed the gap in practice tools adapted to the Panamanian context.'] },
    ],
    s7Question: 'All three sources pointed to the same place: basic operations · early practice · accessible tools',
    s8Eyebrow: 'The answer',
    s8Title: 'Two platforms · One philosophy',
    s8Sub: 'If the foundation is strong from an early age, everything built on top of it is more solid.',
    s8P1Title: 'Mathematics for Preschool',
    s8P1Desc: 'Basic operations from an early age — through play. Because if numbers feel fun from the start, the path ahead becomes much easier.',
    s8P1Tags: ['Number recognition','Addition & subtraction','Times table bingo','Medals & rewards','Mobile-optimized'],
    s8P2Title: 'Mathematics for Elementary · Grades 1–6',
    s8P2Desc: 'Based on the Fundamental Learning Rights (DFA) · MEDUCA 2024. So every student can understand, practice, and move forward at their own pace.',
    s8P2Tags: ['Learn','Vocabulary','Practice','Evaluate','Game Zone'],
    s9Eyebrow: 'Primary Platform',
    s9Title: 'Mathematics for Elementary School',
    s9Desc: 'Developed in alignment with the Fundamental Learning Rights (DFA) of MEDUCA, based on the Methodological Guide for Mathematics · 2024 curriculum revision.',
    s9Tags: ['DFA · MEDUCA 2024','Free','Grades 1–6','In Spanish','No installation needed'],
    s9Features: [
      { icon:'📖', title:'Learn (Aprende)', desc:'Clear conceptual explanations with visual examples adapted to the Panamanian context.' },
      { icon:'📚', title:'Vocabulary (Vocabulario)', desc:'Precise mathematical glossary for each grade and unit.' },
      { icon:'✏️', title:'Practice (Practica)', desc:'Interactive exercises with immediate feedback — enough time to truly consolidate learning.' },
      { icon:'📊', title:'Evaluate (Evalúa)', desc:'Unit-level achievement measurement aligned with DFA indicators.' },
      { icon:'🎮', title:'Game Zone', desc:'Speed Blitz · Drill Clásico · Memory Match — playful reinforcement.' },
    ],
    s10Eyebrow: 'Curriculum alignment',
    s10Title: '🇵🇦 Based on DFA · MEDUCA 2024',
    s10Sub: 'Content, competencies, and achievement indicators · Elementary Grades 1–6',
    s10Grades: [
      { label:'Grade 1', title:'Foundations', topics:['Numbers 0–100','Basic addition & subtraction','Geometric shapes','Length measurement'] },
      { label:'Grade 2', title:'Building', topics:['Numbers up to 1,000','Multiplication tables','Simple fractions','Time & calendar'] },
      { label:'Grade 3', title:'Expanding', topics:['Multiplication & division','Numbers up to 10,000','Equivalent fractions','Perimeter & area'] },
      { label:'Grade 4', title:'Deepening', topics:['Decimals','Fractions: add & subtract','Angles & polygons','Basic statistics'] },
      { label:'Grade 5', title:'Applying', topics:['Operations with decimals','Ratios & proportions','Percentages','Volume'] },
      { label:'Grade 6', title:'Integrating', topics:['Introductory algebra','Statistics & probability','Advanced ratios','Spatial geometry'] },
    ],
    s11Eyebrow: 'A sincere request',
    s11Title: ['I built the tool.', 'You have the pedagogical knowledge.'],
    s11Sub: "I'm a student, not an education expert. That's exactly why your perspective as future teachers means so much more than mine. Would you help me improve it?",
    s11Roles: [
      { num:'01', title:'Try it out', desc:'Use it freely. What feels right? What feels incomplete or off — from the perspective of someone studying to teach?' },
      { num:'02', title:'Evaluate it', desc:'Are the content and progression pedagogically sound? You are training to know this far better than I do.' },
      { num:'03', title:'Tell me what\'s missing', desc:'Any observation, however small, would help me enormously in making this a better resource for Panamanian students.' },
    ],
    s12Eyebrow: 'Thank you',
    s12Title: ["Let's build together", "the mathematical future", "of Panama's children."],
    s12Sub: 'This is only the beginning. We hope it marks the start of a genuine, lasting, and meaningful collaboration.',
    s12L1Label: 'Elementary · Grades 1–6',
    s12L2Label: 'Preschool',
    fullscreen: 'Fullscreen',
  },
  ko: {
    org: 'Club Heartitude · 파나마 2026',
    titleMain: ['파나마의 수학:', '교실에서 탄생한 도구'],
    titleSub: '무료 디지털 플랫폼 · MEDUCA 2024 기반 · 유아 및 초등 1~6학년',
    authorName: '김지윤 (Jiyun Kim)',
    authorRole: 'Instagram: @heartitude_ba',
    s2Eyebrow: '시작점 · 파나마, 2021',
    s2Title: ['파나마에 왔습니다.', '그리고 무언가가 눈에 띄었습니다.'],
    s2Scene1: ['카페에서 커피값을 내고 거스름돈을 받았습니다. ', '뭔가 이상했습니다.', ' 다시 세어봤더니 — 달랐습니다.'],
    s2Scene2: ['슈퍼마켓에서도 마찬가지였습니다. 때로는 ', '적게', ', 때로는 ', '많게', '. 고의가 아니었습니다 — 더 깊은 이유가 있었습니다.'],
    s2Question: '이것이 기본 사칙연산을 가르치는 방식과 관련이 있지 않을까?',
    s3Eyebrow: '진심 어린 질문',
    s3Title: ['저는 항상 수학을 좋아했습니다.', '그래서 궁금해졌습니다:', ''],
    s3Em: '전 세계에서 수학을 똑같이 가르칠까요?',
    s3Sub: '세 나라의 공식 교육과정을 찾아 직접 비교해 보았습니다.',
    s3Flag1: '대한민국', s3Flag2: '미국', s3Flag3: '파나마 — MEDUCA',
    s4Eyebrow: '발견한 것',
    s4Title: '수학 내용은 세계 공통입니다',
    s4Sub: '세 나라의 교육과정은 본질적으로 동일한 주제를 다룹니다',
    s4Col1: '학년', s4Col2: '🇰🇷 한국', s4Col3: '🇺🇸 미국', s4Col4: '🇵🇦 MEDUCA',
    s4Rows: [
      ['1~2학년', '수, 덧셈·뺄셈, 곱셈 입문', '기본 연산, 자릿값, 측정', '수 인식, 기본 연산, 도형'],
      ['3~4학년', '분수, 소수, 곱셈·나눗셈', '곱셈·나눗셈, 분수, 넓이', '곱셈·나눗셈, 분수, 소수, 측정'],
      ['5~6학년', '비율, 통계, 확률', '비율, 통계, 기초 대수', '분수 심화, 비율, 통계, 대수 입문'],
    ],
    s4Badge: '내용 동일',
    s4Note: 'MEDUCA 교육과정은 국제 기준에 부합합니다',
    s5Eyebrow: '발견한 문제',
    s5Title: ['이전 교육과정은', '진도가 너무 빨랐습니다'],
    s5Cards: [
      { icon:'⚡', title:'빠른 진행', desc:'일부 내용이 너무 이른 학년에 도입되어, 아이들이 충분히 이해하기 전에 넘어가는 경우가 많았습니다.' },
      { icon:'⏩', title:'연습 시간 부족', desc:'이전 단원을 충분히 이해하고 연습하기 전에 다음 단원으로 넘어갔습니다.' },
      { icon:'🧱', title:'취약한 기초', desc:'사칙연산의 기초가 약하면, 이후의 분수·비율·대수 등 모든 내용이 어려워집니다.' },
    ],
    s6Eyebrow: 'MEDUCA · 2024년 교육과정 개정',
    s6Title: ['개정으로 속도는 개선됐습니다.', '하지만 여전히 격차가 있습니다.'],
    s6Cards: [
      { icon:'✅', type:'suc', title:'개선된 것', desc:'진행 속도가 조정되었습니다. 학습 기본권(DFA) 접근법이 도입되어 — 이해 먼저, 그 다음 진도를 나갑니다.' },
      { icon:'⚠️', type:'war', title:'여전히 부족한 것', desc:'일부 단원은 여전히 한국이나 미국보다 이른 학년에 도입되며, 그 내용을 충분히 연습할 도구가 부족합니다.' },
      { icon:'💡', type:'pos', title:'기회', desc:'개정 방향은 옳습니다. 이제 필요한 것은 그 교육 철학을 지원하는 디지털 도구입니다.' },
    ],
    s7Eyebrow: '세 가지 근거 · 하나의 결론',
    s7Title: '이 필요성은 책에서 나온 게 아닙니다.',
    s7Scenes: [
      { icon:'☕', text:['개인 관찰:', ' 카페와 슈퍼마켓에서 거스름돈 계산이 자주 틀렸습니다 — 사칙연산 기초가 취약하다는 신호였습니다.'] },
      { icon:'👩‍🏫', text:['현장의 목소리:', ' 봉사단체 선생님들과 부모님들이 확인해 주었습니다 — 아이들에게 더 많은 사칙연산 연습 기회가 필요하다고.'] },
      { icon:'📊', text:['교육과정 분석:', ' 세 나라 비교를 통해 파나마 맥락에 맞는 연습 도구의 부재를 확인했습니다.'] },
    ],
    s7Question: '세 가지 근거가 모두 같은 곳을 가리켰습니다: 사칙연산 · 조기 연습 · 접근 가능한 도구',
    s8Eyebrow: '해결책',
    s8Title: '두 개의 플랫폼 · 하나의 철학',
    s8Sub: '어릴 때 기초가 탄탄하면, 이후의 모든 것이 더 잘 쌓입니다.',
    s8P1Title: '유아용 수학 플랫폼',
    s8P1Desc: '어릴 때부터 게임을 통해 사칙연산을 익힙니다. 숫자가 재미있는 것이라는 것을 어릴 때 알게 되면, 이후의 길이 훨씬 쉬워집니다.',
    s8P1Tags: ['수 인식','덧셈·뺄셈','구구단 빙고','메달 시스템','모바일 최적화'],
    s8P2Title: '초등 수학 플랫폼 · 1~6학년',
    s8P2Desc: '학습 기본권(DFA) · MEDUCA 2024 기반. 각 학생이 이해하고, 연습하고, 자신의 속도로 앞으로 나아갈 수 있도록 설계되었습니다.',
    s8P2Tags: ['배우기','어휘','연습','평가','게임존'],
    s9Eyebrow: '주요 플랫폼',
    s9Title: '초등 수학 플랫폼',
    s9Desc: 'MEDUCA의 학습 기본권(DFA)에 따라 제작되었으며, 2024년 개정 교육과정의 수학 교수법 지침서를 기반으로 합니다.',
    s9Tags: ['DFA · MEDUCA 2024','무료','1~6학년','스페인어','설치 불필요'],
    s9Features: [
      { icon:'📖', title:'배우기 (Aprende)', desc:'파나마 맥락에 맞는 시각적 예시로 개념을 명확하게 설명합니다.' },
      { icon:'📚', title:'어휘 (Vocabulario)', desc:'학년별·단원별 수학 용어 사전.' },
      { icon:'✏️', title:'연습 (Practica)', desc:'즉각적인 피드백이 있는 대화형 문제 — 충분한 연습 시간 보장.' },
      { icon:'📊', title:'평가 (Evalúa)', desc:'DFA 지표에 맞춘 단원별 성취도 측정.' },
      { icon:'🎮', title:'게임존', desc:'Speed Blitz · Drill Clásico · Memory Match — 게임으로 복습.' },
    ],
    s10Eyebrow: '교육과정 연계',
    s10Title: '🇵🇦 DFA · MEDUCA 2024 기반',
    s10Sub: '내용·역량·성취 지표 · 초등 1~6학년',
    s10Grades: [
      { label:'1학년', title:'기초', topics:['0~100 숫자','기본 덧셈·뺄셈','기하 도형','길이 측정'] },
      { label:'2학년', title:'발전', topics:['1,000까지 수','구구단','단순 분수','시간과 달력'] },
      { label:'3학년', title:'확장', topics:['곱셈·나눗셈','10,000까지 수','동치 분수','둘레·넓이'] },
      { label:'4학년', title:'심화', topics:['소수','분수 덧셈·뺄셈','각도·다각형','기초 통계'] },
      { label:'5학년', title:'적용', topics:['소수 연산','비율·비례','백분율','부피'] },
      { label:'6학년', title:'통합', topics:['대수 입문','통계·확률','심화 비율','공간 도형'] },
    ],
    s11Eyebrow: '진심 어린 부탁',
    s11Title: ['제가 도구를 만들었습니다.', '여러분이 교수법적 전문성을 갖고 있습니다.'],
    s11Sub: '저는 학생이지, 교육 전문가가 아닙니다. 그래서 예비 교원인 여러분의 시각이 저보다 훨씬 소중합니다. 함께 이 도구를 더 좋게 만들어 주실 수 있으신가요?',
    s11Roles: [
      { num:'01', title:'써 보기', desc:'자유롭게 사용해 보세요. 교육 전공자의 시각에서 무엇이 잘 작동하고, 무엇이 어색하거나 부족한가요?' },
      { num:'02', title:'평가하기', desc:'내용과 진행 구조가 교수법적으로 적절한가요? 여러분은 그것을 저보다 더 잘 판단할 수 있도록 공부하고 있습니다.' },
      { num:'03', title:'부족한 점 알려주기', desc:'아무리 작은 의견이라도 이 도구를 개선하는 데 큰 도움이 됩니다.' },
    ],
    s12Eyebrow: '감사합니다',
    s12Title: ['함께 만들어 갑시다', '파나마 아이들의 수학적 미래를.', ''],
    s12Sub: '이것은 시작에 불과합니다. 진정하고 지속적이며 의미 있는 협업의 첫 걸음이 되기를 바랍니다.',
    s12L1Label: '초등 · 1~6학년',
    s12L2Label: '유아',
    fullscreen: '전체화면',
  }
}

const SLIDES = Array.from({ length: 12 }, (_, i) => i)

// ─── SLIDE COMPONENTS ──────────────────────────────────────
function Slide1({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
      <div className="title-logo-row">
        <span className="title-flag">🇵🇦</span>
        <span className="title-org">{c.org}</span>
      </div>
      <h1 className="title-main">{c.titleMain[0]}<br /><em>{c.titleMain[1]}</em></h1>
      <div className="accent-bar" style={{ margin:'1.2rem auto 1.5rem' }}></div>
      <p className="title-sub">{c.titleSub}</p>
      <div className="author-card">
        <div className="author-info">
          <h3>{c.authorName}</h3>
          <p>{c.authorRole}</p>
        </div>
      </div>
    </div>
  )
}

function Slide2({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div className="story-wrap">
        <div className="eyebrow">{c.s2Eyebrow}</div>
        <h2 className="section-title" style={{ marginBottom:'0.5rem' }}>{c.s2Title[0]}<br />{c.s2Title[1]}</h2>
        <div className="accent-bar"></div>
        <div className="story-scene">
          <p>{c.s2Scene1[0]}<strong>{c.s2Scene1[1]}</strong>{c.s2Scene1[2]}</p>
        </div>
        <div className="story-scene">
          <p>{c.s2Scene2[0]}<strong>{c.s2Scene2[1]}</strong>{c.s2Scene2[2]}<strong>{c.s2Scene2[3]}</strong>{c.s2Scene2[4]}</p>
        </div>
        <div className="story-question">{c.s2Question}</div>
      </div>
    </div>
  )
}

function Slide3({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
      <div className="eyebrow">{c.s3Eyebrow}</div>
      <h2 className="section-title" style={{ maxWidth:'700px', marginBottom:'0.5rem' }}>
        {c.s3Title[0]}<br />{c.s3Title[1]}<br /><em>{c.s3Em}</em>
      </h2>
      <div className="accent-bar" style={{ margin:'1rem auto 1.8rem' }}></div>
      <div className="country-flags">
        <div className="flag-card"><span className="flag-emoji">🇰🇷</span><span className="flag-name">{c.s3Flag1}</span></div>
        <span className="flag-divider">+</span>
        <div className="flag-card"><span className="flag-emoji">🇺🇸</span><span className="flag-name">{c.s3Flag2}</span></div>
        <span className="flag-divider">+</span>
        <div className="flag-card"><span className="flag-emoji">🇵🇦</span><span className="flag-name">{c.s3Flag3}</span></div>
      </div>
      <p className="section-sub" style={{ textAlign:'center', whiteSpace:'nowrap', maxWidth:'none' }}>{c.s3Sub}</p>
    </div>
  )
}

function Slide4({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', marginBottom:'1.8rem' }}>
        <div className="eyebrow">{c.s4Eyebrow}</div>
        <h2 className="section-title">{c.s4Title}</h2>
        <p className="section-sub" style={{ textAlign:'center', marginTop:'0.4rem' }}>{c.s4Sub}</p>
      </div>
      <table className="curriculum-table">
        <thead><tr><th>{c.s4Col1}</th><th>{c.s4Col2}</th><th>{c.s4Col3}</th><th>{c.s4Col4}</th></tr></thead>
        <tbody>{c.s4Rows.map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>)}</tbody>
      </table>
      <p className="curriculum-summary">
        <strong>{c.s4Badge}:</strong> {c.s4Note}
      </p>
    </div>
  )
}

function Slide5({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', marginBottom:'2rem' }}>
        <div className="eyebrow red">{c.s5Eyebrow}</div>
        <h2 className="section-title">{c.s5Title[0]}<br /><em className="red">{c.s5Title[1]}</em></h2>
        <div className="accent-bar" style={{ margin:'1rem auto 0' }}></div>
      </div>
      <div className="info-cards">
        {c.s5Cards.map(card => (
          <div className="info-card negative" key={card.title}>
            <span className="card-icon">{card.icon}</span>
            <h3>{card.title}</h3><p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide6({ c }) {
  const typeClass = { suc:'success', war:'warning', pos:'positive' }
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', marginBottom:'2rem' }}>
        <div className="eyebrow">{c.s6Eyebrow}</div>
        <h2 className="section-title">{c.s6Title[0]}<br /><em className="red">{c.s6Title[1]}</em></h2>
        <div className="accent-bar" style={{ margin:'1rem auto 0' }}></div>
      </div>
      <div className="info-cards">
        {c.s6Cards.map(card => (
          <div className={`info-card ${typeClass[card.type]}`} key={card.title}>
            <span className="card-icon">{card.icon}</span>
            <h3>{card.title}</h3><p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide7({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div className="story-wrap" style={{ maxWidth:'min(1100px, 90vw)' }}>
        <div className="eyebrow">{c.s7Eyebrow}</div>
        <h2 className="section-title" style={{ marginBottom:'0.5rem', whiteSpace:'nowrap' }}>{c.s7Title}</h2>
        <div className="accent-bar"></div>
        {c.s7Scenes.map((s, i) => (
          <div className="story-scene" key={i}>
            <p>
              <strong>{s.text[0]}</strong>
              {s.text[1]}
              {s.text[2] && <strong>{s.text[2]}</strong>}
              {s.text[3]}
            </p>
          </div>
        ))}
        <div className="story-question">{c.s7Question}</div>
      </div>
    </div>
  )
}

function Slide8({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', marginBottom:'1.8rem' }}>
        <div className="eyebrow green">{c.s8Eyebrow}</div>
        <h2 className="section-title">{c.s8Title}</h2>
        <p className="section-sub" style={{ textAlign:'center', marginTop:'0.4rem', whiteSpace:'nowrap', maxWidth:'none' }}>{c.s8Sub}</p>
        <div className="accent-bar" style={{ margin:'1rem auto 0' }}></div>
      </div>
      <div className="two-platform-grid">
        <div className="platform-card red">
          <h3>{c.s8P1Title}</h3>
          <p style={{ marginBottom:'1rem' }}>{c.s8P1Desc}</p>
          <div className="platform-tags" style={{ marginBottom:'1rem' }}>{c.s8P1Tags.map(t => <span key={t} className="platform-tag">{t}</span>)}</div>
          <a className="platform-url" href="https://latidos-ninos.vercel.app/p/index.html" target="_blank" rel="noopener noreferrer">latidos-ninos.vercel.app</a>
        </div>
        <div className="platform-card blue">
          <h3 style={{ whiteSpace:'nowrap' }}>{c.s8P2Title}</h3>
          <p style={{ marginBottom:'1rem' }}>{c.s8P2Desc}</p>
          <div className="platform-tags" style={{ marginBottom:'1rem' }}>{c.s8P2Tags.map(t => <span key={t} className="platform-tag featured">{t}</span>)}</div>
          <a className="platform-url" href="https://jy-matematica-panama.vercel.app/" target="_blank" rel="noopener noreferrer">jy-matematica-panama.vercel.app</a>
        </div>
      </div>
    </div>
  )
}

function Slide9({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div className="platform-layout">
        <div className="platform-info">
          <div className="eyebrow" style={{ marginBottom:'0.8rem' }}>{c.s9Eyebrow}</div>
          <h2 className="section-title" style={{ fontSize:'clamp(1.4rem,2.5vw,2rem)', marginBottom:'0.8rem' }}>{c.s9Title}</h2>
          <div className="accent-bar"></div>
          <p className="platform-desc">{c.s9Desc}</p>
          <div className="platform-tags">{c.s9Tags.map((t,i) => <span key={t} className={`platform-tag ${i<2?'featured':''}`}>{t}</span>)}</div>
          <a className="platform-url" href="https://jy-matematica-panama.vercel.app/" target="_blank" rel="noopener noreferrer">jy-matematica-panama.vercel.app</a>
        </div>
        <div className="platform-features">
          {c.s9Features.map(f => (
            <div className="feature-item" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <div><h4>{f.title}</h4><p>{f.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide10({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center', marginBottom:'1.8rem' }}>
        <div className="eyebrow">{c.s10Eyebrow}</div>
        <h2 className="section-title">{c.s10Title}</h2>
        <p className="section-sub" style={{ textAlign:'center', marginTop:'0.4rem' }}>{c.s10Sub}</p>
      </div>
      <div className="grade-grid">
        {c.s10Grades.map(g => (
          <div className="grade-card" key={g.label}>
            <div className="grade-label">{g.label}</div>
            <div className="grade-title">{g.title}</div>
            <ul className="grade-topics">{g.topics.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide11({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
      <div className="eyebrow">{c.s11Eyebrow}</div>
      <h2 className="section-title" style={{ maxWidth:'760px', marginBottom:'0.4rem', fontSize:'clamp(1.3rem, 2vw, 2rem)' }}>
        {c.s11Title[0]}<br /><em>{c.s11Title[1]}</em>
      </h2>
      <div className="accent-bar" style={{ margin:'0.6rem auto 0.6rem' }}></div>
      <p className="section-sub" style={{ textAlign:'center', marginBottom:'1.2rem' }}>{c.s11Sub}</p>
      <div className="role-cards">
        {c.s11Roles.map(r => (
          <div className="role-card" key={r.num}>
            <div className="role-num">{r.num}</div>
            <h3>{r.title}</h3><p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Slide12({ c }) {
  return (
    <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
      <div className="eyebrow green">{c.s12Eyebrow}</div>
      <h2 className="section-title" style={{ maxWidth:'680px', marginBottom:'0.5rem' }}>
        {c.s12Title[0]}<br /><em>{c.s12Title[1]}</em><br />{c.s12Title[2]}
      </h2>
      <div className="accent-bar" style={{ margin:'1rem auto 1rem' }}></div>
      <p className="section-sub" style={{ textAlign:'center', marginBottom:'1.8rem' }}>{c.s12Sub}</p>
      <div className="closing-links">
        <a className="closing-link-card" href="https://jy-matematica-panama.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="link-label">{c.s12L1Label}</div>
          <div className="link-url">jy-matematica-panama.vercel.app</div>
        </a>
        <a className="closing-link-card" href="https://latidos-ninos.vercel.app/p/index.html" target="_blank" rel="noopener noreferrer">
          <div className="link-label">{c.s12L2Label}</div>
          <div className="link-url">latidos-ninos.vercel.app</div>
        </a>
      </div>
      <div className="contact-info">
        <div className="contact-item">jiyun.k.heartitude@gmail.com</div>
        <div className="contact-item">Instagram: @heartitude_ba</div>
      </div>
    </div>
  )
}

const SLIDE_COMPS = [Slide1,Slide2,Slide3,Slide4,Slide5,Slide6,Slide7,Slide8,Slide9,Slide10,Slide11,Slide12]

// ─── MAIN APP ───────────────────────────────────────────────
export default function App() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('pref_lang') || 'es'
    } catch {
      return 'es'
    }
  })
  const total = SLIDES.length
  const c = CONTENT[lang] || CONTENT.es

  const changeLang = (newLang) => {
    setLang(newLang)
    try {
      localStorage.setItem('pref_lang', newLang)
    } catch {}
  }

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= total) return
    setPrev(current); setCurrent(idx)
  }, [current, total])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') goNext()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  useEffect(() => {
    if (prev !== null) { const t = setTimeout(() => setPrev(null), 500); return () => clearTimeout(t) }
  }, [prev])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen()
    else document.exitFullscreen()
  }

  return (
    <div className="presentation">
      {SLIDE_COMPS.map((SlideComp, i) => (
        <div key={i} className={`slide ${i === current ? 'active' : ''} ${i === prev ? 'exit-left' : ''}`}>
          <SlideComp c={c} />
        </div>
      ))}

      {/* Top left: fullscreen */}
      <button className="fullscreen-btn" onClick={toggleFullscreen}>⛶ {c.fullscreen}</button>

      {/* Top right: language switcher */}
      <div
        style={{
          position:'fixed', top:'1.5rem', right:'5.5rem',
          background:'white', border:'1px solid var(--color-border)',
          borderRadius:'var(--radius-sm)', padding:'3px',
          zIndex:100, display:'flex', alignItems:'center', gap:'2px',
          boxShadow:'var(--shadow-card)'
        }}
      >
        {[
          { id: 'ko', label: '🇰🇷 한국어' },
          { id: 'es', label: '🇪🇸 Español' },
          { id: 'en', label: '🇺🇸 English' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => changeLang(item.id)}
            style={{
              background: lang === item.id ? 'var(--color-primary)' : 'transparent',
              color: lang === item.id ? '#ffffff' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '6px',
              padding: '5px 10px',
              fontSize: '0.78rem',
              fontWeight: lang === item.id ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              fontFamily: 'var(--font-body)'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Slide number */}
      <div className="slide-badge">{current + 1} / {total}</div>

      {/* Bottom nav */}
      <nav className="nav-bar">
        <button className="nav-btn" onClick={goPrev} disabled={current === 0}>←</button>
        <div className="progress-dots">
          {SLIDES.map(i => (
            <button key={i} className={`progress-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="nav-btn" onClick={goNext} disabled={current === total - 1}>→</button>
      </nav>
    </div>
  )
}
