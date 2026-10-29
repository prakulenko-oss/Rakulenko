/* Pavlo Rakulenko — landing (static port): i18n pl/ua/en + interactions */

const I18N = {
  pl: {
    role: "NIEZALEŻNY DEVELOPER",
    nav1: "Rozwiązania", nav2: "Treści", nav3: "O mnie", nav4: "Jak pracuję",
    contact: "Porozmawiajmy",
    available: "Otwarty na nowe projekty",
    intro: "Cześć, jestem Pavlo.",
    hero1: "Strony. Aplikacje.", hero2: "Cyfrowe procesy.", end: "Od A do Z.",
    summary: "Od pierwszego pomysłu do działającego rozwiązania. Tworzę strony, aplikacje i portale, które ułatwiają pracę. Pomagam też nadać Twoim treściom głos i obraz.",
    cta: "Opowiedz mi o projekcie",
    explore: "Poznaj rozwiązania",
    location: "POLSKA · WSPÓŁPRACA ZDALNA",
    scroll: "PRZEWIŃ, ABY POZNAĆ MNIE",
    sol_label: "01 / ROZWIĄZANIA",
    sol_title: "Dobry pomysł.\nDobrze zbudowany.",
    sol_desc: "Dla osób z pomysłem i firm z wyzwaniem. Technologia, która odpowiada na realne potrzeby.",
    concept: "PRZYKŁADOWE ROZWIĄZANIE",
    s1_title: "Strony internetowe",
    s1_desc: "Twoje miejsce w sieci. Szybkie, przemyślane strony i landing pages, które prezentują Twoją ofertę i pomagają zdobywać zapytania.",
    s1_t1: "Wizytówki", s1_t2: "Landing pages", s1_t3: "Responsywność",
    s2_title: "Aplikacje webowe",
    s2_desc: "Od pomysłu do produktu. Dedykowane aplikacje, portale klienta i narzędzia, które robią dokładnie to, czego potrzebujesz.",
    s2_t1: "MVP", s2_t2: "Portale", s2_t3: "Integracje",
    s3_title: "Procesy i automatyzacja",
    s3_desc: "Mniej chaosu, więcej kontroli. Obieg dokumentów, portale compliance i automatyzacje, które porządkują codzienną pracę.",
    s3_t1: "Dokumenty", s3_t2: "Compliance", s3_t3: "Automatyzacja",
    mock0a: "Twój pomysł.", mock0b: "Nowy wymiar.",
    mock1: "Zacznij tutaj", mock2: "Przestrzeń projektu",
    mock3: "Przegląd", mock4: "Dokumenty", mock5: "Zadania",
    mock6: "Wszystko na swoim miejscu.",
    mock7: "Wniosek", mock8: "Akceptacja", mock9: "Gotowe",
    cs_label: "02 / TREŚCI",
    cs_title: "Twój przekaz.\nGłos i obraz.",
    cs_desc: "Dla twórców, marek i osób z pomysłem. Głos, krótkie wideo i wersje językowe do publikacji na YouTube, TikToku i Instagramie.",
    cs_eyebrow: "OD TEKSTU DO MATERIAŁU",
    cs_vtitle: "Daj swojej\nidei głos",
    cs_vbottom: "GŁOS / WIDEO / JĘZYKI",
    cs_inquiry: "Porozmawiajmy o treści",
    c1_title: "Lektor do wideo",
    c1_desc: "Nagranie lektorskie na podstawie gotowego tekstu — do filmów, poradników i krótkich materiałów w social media.",
    c2_title: "Krótkie wideo z AI",
    c2_desc: "Tworzenie krótkich materiałów wideo z pomocą AI. Forma i styl dopasowane do Twojego pomysłu oraz docelowej platformy.",
    c3_title: "Napisy do wideo",
    c3_desc: "Czytelne napisy zsynchronizowane z materiałem, aby Twoje treści były zrozumiałe również bez dźwięku.",
    c4_title: "Tłumaczenie i wersje głosowe",
    c4_desc: "Tłumaczenie treści oraz nagranie w innym języku. Język i sposób realizacji uzgadniamy przed rozpoczęciem.",
    about_label: "03 / O MNIE",
    about_title: "Enterprise-doświadczenie.\nOsobiste zaangażowanie.",
    years: "lata w IT",
    about_text: "Jestem Pavlo Rakulenko. Łączę doświadczenie w architekturze korporacyjnej dużych organizacji z elastycznością niezależnego developera. Znam IT od środka — od wymagań biznesowych do utrzymania systemu w produkcji.",
    r1_title: "Jedna osoba. Pełna odpowiedzialność.",
    r1_desc: "Analiza, projektowanie, development, wdrożenie i wsparcie. Bez pośredników i bez „to nie moja działka”.",
    r2_title: "Szybciej niż w agencji.",
    r2_desc: "Bez organizacyjnych narzutów. Krótka droga od rozmowy do decyzji i pierwszych rezultatów.",
    r3_title: "Technologia dopasowana do procesu.",
    r3_desc: "Zaczynam od Twojego celu. Wybieram najprostsze rozwiązanie, które rzeczywiście działa.",
    r4_title: "Myślę o tym, co będzie dalej.",
    r4_desc: "Nie tylko uruchomienie. Czytelny kod, możliwość rozwoju i wsparcie po wdrożeniu.",
    proc_label: "04 / WSPÓŁPRACA",
    proc_title: "Od „mam pomysł”\ndo „to działa”.",
    p1_title: "Rozmawiamy", p1_desc: "Poznaję Twój pomysł, potrzeby i to, co ma się zmienić.",
    p2_title: "Projektuję", p2_desc: "Ustalamy zakres, rozwiązanie i plan realizacji.",
    p3_title: "Buduję", p3_desc: "Rozwijam produkt, a Ty widzisz postęp i masz wpływ.",
    p4_title: "Uruchamiam", p4_desc: "Wdrażam, przekazuję rozwiązanie i wspieram jego rozwój.",
    faq_label: "05 / PYTANIA", faq_title: "Warto wiedzieć.",
    q1: "Czy mogę zamówić samo nagranie lektorskie lub napisy?",
    a1: "Tak. Możesz wysłać zapytanie dotyczące pojedynczej usługi: lektora, krótkiego wideo z AI, napisów albo tłumaczenia i wersji głosowej. Zakres, materiały i warunki uzgadniamy przez e-mail.",
    q2: "Czy współpracujesz z osobami prywatnymi?",
    a2: "Tak. Pracuję zarówno z osobami prywatnymi, które mają pomysł na stronę lub aplikację, jak i z firmami potrzebującymi dedykowanego rozwiązania.",
    q3: "Ile kosztuje realizacja projektu?",
    a3: "Wycena zależy od zakresu, integracji i stopnia złożoności. Opisz swój pomysł w formularzu — omówimy potrzeby i ustalimy zakres przed wyceną.",
    q4: "Czy mogę zacząć tylko od pomysłu?",
    a4: "Oczywiście. Nie potrzebujesz gotowej specyfikacji. Pomogę przełożyć pomysł na konkretne wymagania i plan realizacji.",
    q5: "Co dzieje się po uruchomieniu?",
    a5: "Możemy ustalić dalsze wsparcie, utrzymanie i rozwój. Zakres oraz warunki uzgadniamy indywidualnie.",
    contact_label: "06 / TWÓJ NASTĘPNY KROK",
    contact_title: "Masz pomysł?\nZbudujmy go.",
    contact_desc: "Strona, aplikacja, nagranie lektorskie lub krótki film — opowiedz mi, czego potrzebujesz.",
    direct: "WOLISZ BEZPOŚREDNIO?",
    name_l: "Jak masz na imię?", name_ph: "Twoje imię",
    email_l: "Twój adres e-mail",
    service_l: "Czego potrzebujesz?",
    opt1: "Strona internetowa", opt2: "Aplikacja webowa", opt3: "Procesy / automatyzacja", opt4: "Lektor do wideo",
    opt5: "Wideo z AI", opt6: "Napisy", opt7: "Tłumaczenie / wersja głosowa", opt8: "Jeszcze nie wiem",
    message_l: "Opowiedz o swoim pomyśle",
    placeholder: "Co chcesz stworzyć lub usprawnić?",
    consent: "Zapoznałem/am się z informacją o przetwarzaniu danych.",
    privacy: "Prywatność",
    send: "Wyślij zapytanie",
    sent_title: "Wiadomość jest gotowa.",
    sent_text: "Otworzyłem Twój program pocztowy z przygotowaną wiadomością — wystarczy ją wysłać.",
    again: "Wyślij kolejne zapytanie",
    required: "Pola wymagane. Opis: minimum 10 znaków.",
    channel: "Formularz służy wyłącznie do zapytań. Ustalenia, zamówienia i faktury obsługuję przez e-mail.",
    mail_subject: "Zapytanie ze strony",
    mail_name: "Imię", mail_email: "E-mail", mail_service: "Usługa", mail_message: "Opis",
    footer_tag: "Niezależny developer. Rozwiązania od A do Z.",
    company: "Dane przedsiębiorcy",
    company_title: "Działam jako JDG w Polsce.",
    official_l: "Nazwa firmy",
    legal_l: "Forma działalności",
    legal_v: "Jednoosobowa działalność gospodarcza",
    contact_l: "Kontakt",
    register: "Sprawdź wpis w rejestrze",
    close: "Zamknij",
    privacy_title: "Informacja o przetwarzaniu danych",
    privacy_body: "Administratorem danych jest Pavlo Rakulenko, prowadzący jednoosobową działalność w Polsce. Kontakt: PashFK@icloud.com. Imię, e-mail i treść zapytania są przetwarzane w celu odpowiedzi i podjęcia działań przed zawarciem umowy (art. 6 ust. 1 lit. b RODO), a przy pozostałej korespondencji na podstawie uzasadnionego interesu (art. 6 ust. 1 lit. f). Podanie danych jest dobrowolne, ale potrzebne do odpowiedzi. Dane są przechowywane przez czas obsługi zapytania i uzasadnionej dalszej korespondencji; dłużej, gdy wymagają tego obowiązki prawne lub ochrona roszczeń. Możesz żądać dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych i wnieść sprzeciw. Możesz złożyć skargę do Prezesa UODO."
  },

  ua: {
    role: "НЕЗАЛЕЖНИЙ РОЗРОБНИК",
    nav1: "Рішення", nav2: "Контент", nav3: "Про мене", nav4: "Як працюю",
    contact: "Поговорімо",
    available: "Відкритий до нових проєктів",
    intro: "Привіт, я Павло.",
    hero1: "Сайти. Додатки.", hero2: "Цифрові процеси.", end: "Від А до Я.",
    summary: "Від першої ідеї до працюючого рішення. Створюю сайти, додатки й портали, які полегшують роботу. А ще допомагаю надати твоєму контенту голос і кадр.",
    cta: "Розкажи про свій проєкт",
    explore: "Переглянути рішення",
    location: "ПОЛЬЩА · ПРАЦЮЮ ВІДДАЛЕНО",
    scroll: "ГОРТАЙ, ЩОБ ДІЗНАТИСЯ БІЛЬШЕ",
    sol_label: "01 / РІШЕННЯ",
    sol_title: "Гарна ідея.\nЯкісна реалізація.",
    sol_desc: "Для людей з ідеєю та бізнесів із викликом. Технології, які відповідають реальним потребам.",
    concept: "ПРИКЛАД РІШЕННЯ",
    s1_title: "Вебсайти",
    s1_desc: "Твоє місце в мережі. Швидкі, продумані сайти й лендінги, які представляють твою пропозицію та допомагають отримувати заявки.",
    s1_t1: "Сайти-візитівки", s1_t2: "Лендінги", s1_t3: "Адаптивність",
    s2_title: "Вебдодатки",
    s2_desc: "Від ідеї до продукту. Індивідуальні додатки, клієнтські портали й інструменти, які роблять саме те, що тобі потрібно.",
    s2_t1: "MVP", s2_t2: "Портали", s2_t3: "Інтеграції",
    s3_title: "Процеси й автоматизація",
    s3_desc: "Менше хаосу, більше контролю. Документообіг, портали compliance та автоматизації, які впорядковують щоденну роботу.",
    s3_t1: "Документи", s3_t2: "Compliance", s3_t3: "Автоматизація",
    mock0a: "Твоя ідея.", mock0b: "Новий вимір.",
    mock1: "Почати тут", mock2: "Простір проєкту",
    mock3: "Огляд", mock4: "Документи", mock5: "Завдання",
    mock6: "Усе на своїх місцях.",
    mock7: "Запит", mock8: "Погодження", mock9: "Готово",
    cs_label: "02 / КОНТЕНТ",
    cs_title: "Твій задум.\nГолос і кадр.",
    cs_desc: "Для авторів, брендів і людей з ідеєю. Озвучення, короткі відео та мовні версії для YouTube, TikTok й Instagram.",
    cs_eyebrow: "ВІД ТЕКСТУ ДО МАТЕРІАЛУ",
    cs_vtitle: "Дай своїй\nідеї голос",
    cs_vbottom: "ГОЛОС / ВІДЕО / МОВИ",
    cs_inquiry: "Обговорити контент",
    c1_title: "Озвучення відео",
    c1_desc: "Озвучення готового тексту для роликів, інструкцій і коротких матеріалів у соціальних мережах.",
    c2_title: "Короткі AI-відео",
    c2_desc: "Створення коротких відеоматеріалів за допомогою AI. Форма і стиль — під твою ідею та цільову платформу.",
    c3_title: "Субтитри до відео",
    c3_desc: "Чіткі субтитри, синхронізовані з матеріалом, щоб твій контент був зрозумілий і без звуку.",
    c4_title: "Переклад і мовні версії",
    c4_desc: "Переклад контенту та озвучення іншою мовою. Мову та формат узгоджуємо перед початком.",
    about_label: "03 / ПРО МЕНЕ",
    about_title: "Корпоративний досвід.\nОсобиста залученість.",
    years: "роки в IT",
    about_text: "Я Павло Ракуленко. Поєдную досвід корпоративної архітектури великих організацій із гнучкістю незалежного розробника. Знаю IT зсередини — від бізнес-вимог до підтримки системи в продакшні.",
    r1_title: "Одна людина. Повна відповідальність.",
    r1_desc: "Аналіз, проєктування, розробка, впровадження і супровід. Без посередників і без «це не моя зона».",
    r2_title: "Швидше, ніж агенція.",
    r2_desc: "Без організаційних накладних. Короткий шлях від розмови до рішення та перших результатів.",
    r3_title: "Технологія під процес.",
    r3_desc: "Починаю з твоєї мети. Обираю найпростіше рішення, яке реально працює.",
    r4_title: "Думаю про те, що буде далі.",
    r4_desc: "Не лише запуск. Зрозумілий код, можливість розвитку та підтримка після впровадження.",
    proc_label: "04 / СПІВПРАЦЯ",
    proc_title: "Від «маю ідею»\nдо «це працює».",
    p1_title: "Обговорюємо", p1_desc: "Знайомлюся з твоєю ідеєю, потребами й бажаними змінами.",
    p2_title: "Проєктую", p2_desc: "Узгоджуємо обсяг, рішення та план реалізації.",
    p3_title: "Створюю", p3_desc: "Розробляю продукт, а ти бачиш прогрес і впливаєш на результат.",
    p4_title: "Запускаю", p4_desc: "Впроваджую, передаю рішення та підтримую його розвиток.",
    faq_label: "05 / ЗАПИТАННЯ", faq_title: "Варто знати.",
    q1: "Можна замовити лише озвучення або субтитри?",
    a1: "Так. Можна надіслати запит на окрему послугу: озвучення, коротке AI-відео, субтитри або переклад та іншомовне озвучення. Обсяг, матеріали й умови узгоджуємо через email.",
    q2: "Ти працюєш із приватними особами?",
    a2: "Так. Працюю як із людьми, які мають ідею сайту чи додатка, так і з компаніями, яким потрібне індивідуальне рішення.",
    q3: "Скільки коштує реалізація проєкту?",
    a3: "Вартість залежить від обсягу, інтеграцій і складності. Опиши ідею у формі — обговоримо потреби та узгодимо обсяг перед оцінкою.",
    q4: "Можна почати лише з ідеї?",
    a4: "Звісно. Готове технічне завдання не потрібне. Допоможу перетворити ідею на конкретні вимоги та план реалізації.",
    q5: "Що відбувається після запуску?",
    a5: "Можемо домовитися про підтримку, супровід і розвиток. Обсяг та умови узгоджуємо індивідуально.",
    contact_label: "06 / ТВІЙ НАСТУПНИЙ КРОК",
    contact_title: "Маєш ідею?\nСтворімо її.",
    contact_desc: "Сайт, додаток, озвучення чи коротке відео — розкажи, що тобі потрібно.",
    direct: "ЗРУЧНІШЕ НАПРЯМУ?",
    name_l: "Як тебе звати?", name_ph: "Твоє ім'я",
    email_l: "Твоя електронна пошта",
    service_l: "Що тобі потрібно?",
    opt1: "Вебсайт", opt2: "Вебдодаток", opt3: "Процеси / автоматизація", opt4: "Озвучення",
    opt5: "AI-відео", opt6: "Субтитри", opt7: "Переклад / озвучення", opt8: "Ще не знаю",
    message_l: "Розкажи про свою ідею",
    placeholder: "Що хочеш створити чи покращити?",
    consent: "Ознайомився/лася з інформацією про обробку даних.",
    privacy: "Приватність",
    send: "Надіслати запит",
    sent_title: "Лист готовий.",
    sent_text: "Я відкрив твою поштову програму з підготовленим листом — залишилося його надіслати.",
    again: "Надіслати ще один запит",
    required: "Обов'язкові поля. Опис: щонайменше 10 символів.",
    channel: "Форма призначена лише для запитів. Домовленості, замовлення та рахунки веду через email.",
    mail_subject: "Запит із сайту",
    mail_name: "Ім'я", mail_email: "Email", mail_service: "Послуга", mail_message: "Опис",
    footer_tag: "Незалежний розробник. Рішення від А до Я.",
    company: "Дані підприємця",
    company_title: "Працюю як JDG у Польщі.",
    official_l: "Назва компанії",
    legal_l: "Форма діяльності",
    legal_v: "Jednoosobowa działalność gospodarcza (ФОП)",
    contact_l: "Контакт",
    register: "Перевірити запис у реєстрі",
    close: "Закрити",
    privacy_title: "Інформація про обробку даних",
    privacy_body: "Адміністратор даних — Pavlo Rakulenko, підприємець у Польщі. Контакт: PashFK@icloud.com. Ім'я, email і текст запиту обробляються для відповіді та дій перед укладенням договору (ст. 6(1)(b) GDPR), а інша кореспонденція — на підставі законного інтересу (ст. 6(1)(f)). Надання даних добровільне, але необхідне для відповіді. Дані зберігаються протягом обробки запиту й обґрунтованого подальшого листування; довше — якщо цього потребують законодавство чи захист вимог. Можна вимагати доступу, виправлення, видалення, обмеження обробки, перенесення даних та подати заперечення. Можна подати скаргу до польського органу UODO."
  },

  en: {
    role: "INDEPENDENT DEVELOPER",
    nav1: "Solutions", nav2: "Content", nav3: "About me", nav4: "My process",
    contact: "Let's talk",
    available: "Open to new projects",
    intro: "Hi, I'm Pavlo.",
    hero1: "Websites. Apps.", hero2: "Digital processes.", end: "End to end.",
    summary: "From the first idea to a working solution. I build websites, applications and portals that make work easier. I also help give your content a voice and a visual story.",
    cta: "Tell me about your project",
    explore: "Explore solutions",
    location: "POLAND · WORKING REMOTELY",
    scroll: "SCROLL TO GET TO KNOW ME",
    sol_label: "01 / SOLUTIONS",
    sol_title: "A good idea.\nBuilt properly.",
    sol_desc: "For people with an idea and businesses with a challenge. Technology that meets real needs.",
    concept: "SAMPLE SOLUTION",
    s1_title: "Websites",
    s1_desc: "Your place on the web. Fast, thoughtfully built websites and landing pages that present your offer and help turn visitors into enquiries.",
    s1_t1: "Business websites", s1_t2: "Landing pages", s1_t3: "Responsive design",
    s2_title: "Web applications",
    s2_desc: "From idea to product. Custom applications, customer portals and tools that do exactly what you need them to do.",
    s2_t1: "MVPs", s2_t2: "Portals", s2_t3: "Integrations",
    s3_title: "Processes & automation",
    s3_desc: "Less chaos, more control. Document workflows, compliance portals and automations that bring order to everyday work.",
    s3_t1: "Documents", s3_t2: "Compliance", s3_t3: "Automation",
    mock0a: "Your idea.", mock0b: "A new dimension.",
    mock1: "Start here", mock2: "Project space",
    mock3: "Overview", mock4: "Documents", mock5: "Tasks",
    mock6: "Everything in its place.",
    mock7: "Request", mock8: "Approval", mock9: "Done",
    cs_label: "02 / CONTENT",
    cs_title: "Your message.\nVoice and visuals.",
    cs_desc: "For creators, brands and people with an idea. Voice-over, short videos and language versions for YouTube, TikTok and Instagram.",
    cs_eyebrow: "FROM TEXT TO CONTENT",
    cs_vtitle: "Give your idea\na voice",
    cs_vbottom: "VOICE / VIDEO / LANGUAGES",
    cs_inquiry: "Let's talk content",
    c1_title: "Voice-over for video",
    c1_desc: "Voice recording based on your script — for videos, tutorials and short social media content.",
    c2_title: "Short AI videos",
    c2_desc: "Short video content created with AI. Format and style tailored to your idea and target platform.",
    c3_title: "Video subtitles",
    c3_desc: "Clear subtitles synced with your footage, so your content works even with the sound off.",
    c4_title: "Translation & voice versions",
    c4_desc: "Content translation and recording in another language. Language and format agreed before we start.",
    about_label: "03 / ABOUT ME",
    about_title: "Enterprise experience.\nPersonal commitment.",
    years: "years in IT",
    about_text: "I'm Pavlo Rakulenko. I combine enterprise-architecture experience from large organisations with the flexibility of an independent developer. I know IT from the inside — from business requirements to keeping systems running in production.",
    r1_title: "One person. Full responsibility.",
    r1_desc: "Analysis, design, development, delivery and support. No middlemen, no \"that's not my job\".",
    r2_title: "Faster than an agency.",
    r2_desc: "No organisational overhead. A short path from conversation to decision and first results.",
    r3_title: "Technology that fits the process.",
    r3_desc: "I start from your goal and pick the simplest solution that actually works.",
    r4_title: "I think about what comes next.",
    r4_desc: "Not just the launch. Clean code, room to grow, and support after delivery.",
    proc_label: "04 / HOW WE WORK",
    proc_title: "From \"I have an idea\"\nto \"it works\".",
    p1_title: "We talk", p1_desc: "I get to know your idea, your needs and what should change.",
    p2_title: "I design", p2_desc: "We agree on scope, solution and a delivery plan.",
    p3_title: "I build", p3_desc: "I develop the product while you see the progress and shape the result.",
    p4_title: "I launch", p4_desc: "I deliver, hand over the solution and support its growth.",
    faq_label: "05 / QUESTIONS", faq_title: "Good to know.",
    q1: "Can I order just a voice-over or subtitles?",
    a1: "Yes. You can send an enquiry for a single service: voice-over, a short AI video, subtitles, or translation with a voice version. Scope, materials and terms are agreed by e-mail.",
    q2: "Do you work with private individuals?",
    a2: "Yes. I work both with individuals who have an idea for a website or app, and with companies that need a custom solution.",
    q3: "How much does a project cost?",
    a3: "Pricing depends on scope, integrations and complexity. Describe your idea in the form — we'll discuss your needs and agree the scope before any estimate.",
    q4: "Can I start with just an idea?",
    a4: "Of course. You don't need a ready specification. I'll help turn the idea into concrete requirements and a delivery plan.",
    q5: "What happens after launch?",
    a5: "We can agree on further support, maintenance and development. Scope and terms are arranged individually.",
    contact_label: "06 / YOUR NEXT STEP",
    contact_title: "Have an idea?\nLet's build it.",
    contact_desc: "A website, an app, a voice-over or a short video — tell me what you need.",
    direct: "PREFER TO WRITE DIRECTLY?",
    name_l: "What's your name?", name_ph: "Your name",
    email_l: "Your e-mail address",
    service_l: "What do you need?",
    opt1: "Website", opt2: "Web application", opt3: "Processes / automation", opt4: "Voice-over",
    opt5: "AI video", opt6: "Subtitles", opt7: "Translation / voice version", opt8: "Not sure yet",
    message_l: "Tell me about your idea",
    placeholder: "What would you like to create or improve?",
    consent: "I have read the data processing notice.",
    privacy: "Privacy",
    send: "Send enquiry",
    sent_title: "Your message is ready.",
    sent_text: "I've opened your e-mail app with a prepared message — just hit send.",
    again: "Send another enquiry",
    required: "Required fields. Description: at least 10 characters.",
    channel: "The form is for enquiries only. Agreements, orders and invoices are handled by e-mail.",
    mail_subject: "Enquiry from the website",
    mail_name: "Name", mail_email: "E-mail", mail_service: "Service", mail_message: "Message",
    footer_tag: "Independent developer. End-to-end solutions.",
    company: "Business details",
    company_title: "I operate as a sole proprietor (JDG) in Poland.",
    official_l: "Business name",
    legal_l: "Legal form",
    legal_v: "Sole proprietorship (jednoosobowa działalność gospodarcza)",
    contact_l: "Contact",
    register: "Check the registry entry",
    close: "Close",
    privacy_title: "Data processing notice",
    privacy_body: "The data controller is Pavlo Rakulenko, a sole proprietor in Poland. Contact: PashFK@icloud.com. Your name, e-mail and the content of your enquiry are processed to respond and to take steps prior to entering into a contract (Art. 6(1)(b) GDPR); other correspondence is processed on the basis of legitimate interest (Art. 6(1)(f)). Providing data is voluntary but necessary to receive a reply. Data is kept for the time needed to handle the enquiry and reasonable follow-up correspondence; longer where required by law or to protect claims. You may request access, rectification, erasure, restriction of processing, data portability, and you may object. You may lodge a complaint with the Polish supervisory authority (UODO)."
  }
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- voice wave bars (built once) ---------- */
const WAVE = [9,17,27,12,37,52,31,70,43,26,60,89,47,32,70,95,65,39,80,59,28,49,71,34,19,41,25,14,8];
const wave = $(".voice-wave");
if (wave) {
  WAVE.forEach((h, i) => {
    const bar = document.createElement("i");
    bar.style.height = `${h}%`;
    bar.style.animationDelay = `${i * 25}ms`;
    wave.appendChild(bar);
  });
}

/* ---------- language ---------- */
let lang = null;
try { lang = localStorage.getItem("lang"); } catch (_) {}
if (!["pl", "ua", "en"].includes(lang)) lang = "pl";

function applyLang(next) {
  lang = next;
  try { localStorage.setItem("lang", lang); } catch (_) {}
  const t = I18N[lang];

  document.documentElement.lang = lang === "ua" ? "uk" : lang;
  document.title = `Pavlo Rakulenko — ${t.hero1} ${t.hero2}`;
  const meta = $('meta[name="description"]');
  if (meta) meta.setAttribute("content", t.summary);

  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] != null) el.textContent = t[key];
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] != null) el.placeholder = t[key];
  });
  $$(".language-switch button").forEach((b) => {
    const active = b.dataset.lang === lang;
    b.setAttribute("aria-pressed", String(active));
    b.classList.toggle("active", active);
  });
}

$$(".language-switch button").forEach((b) =>
  b.addEventListener("click", () => applyLang(b.dataset.lang))
);
applyLang(lang);

/* ---------- reveal on scroll ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion || !("IntersectionObserver" in window)) {
  $$(".reveal").forEach((el) => el.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 }
  );
  $$(".reveal").forEach((el) => observer.observe(el));
}

/* ---------- mobile menu ---------- */
const menuToggle = $("#menuToggle");
const mobileNav = $("#mobileNav");
function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
}
menuToggle.addEventListener("click", () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
});
mobileNav.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});

/* ---------- service selection (cards → form) ---------- */
const radios = $$('#serviceOptions input[type="radio"]');
function selectService(index) {
  radios.forEach((r) => {
    const on = Number(r.value) === index;
    r.checked = on;
    r.closest("label").classList.toggle("selected", on);
  });
}
radios.forEach((r) =>
  r.addEventListener("change", () => selectService(Number(r.value)))
);
$$("[data-select]").forEach((btn) =>
  btn.addEventListener("click", () => {
    selectService(Number(btn.dataset.select));
    $("#contact").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  })
);

/* ---------- dialogs ---------- */
const privacyDialog = $("#privacyDialog");
const businessDialog = $("#businessDialog");
$$(".privacy-trigger").forEach((b) =>
  b.addEventListener("click", () => privacyDialog.showModal())
);
$("#businessBtn").addEventListener("click", () => businessDialog.showModal());
$$("[data-close]").forEach((b) =>
  b.addEventListener("click", () => $("#" + b.dataset.close).close())
);
[privacyDialog, businessDialog].forEach((d) =>
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); })
);

/* ---------- form → mailto ---------- */
const form = $("#contactForm");
const success = $("#formSuccess");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  if ((data.get("website") || "").trim() !== "") return; // honeypot

  const t = I18N[lang];
  const serviceIndex = Number(data.get("service") || 0);
  const serviceLabel = t["opt" + (serviceIndex + 1)];
  const subject = `${t.mail_subject} — ${serviceLabel}`;
  const body =
    `${t.mail_name}: ${(data.get("name") || "").trim()}\n` +
    `${t.mail_email}: ${(data.get("email") || "").trim()}\n` +
    `${t.mail_service}: ${serviceLabel}\n\n` +
    `${t.mail_message}:\n${(data.get("message") || "").trim()}`;

  window.location.href =
    `mailto:PashFK@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  form.hidden = true;
  success.hidden = false;
});
$("#againBtn").addEventListener("click", () => {
  success.hidden = true;
  form.hidden = false;
  form.message.value = "";
  form.querySelector('input[type="checkbox"]').checked = false;
});

/* ---------- footer year ---------- */
$("#year").textContent = new Date().getFullYear();
