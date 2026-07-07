export interface Project {
    id: string
    title: string
    type: string[]
    description: string
    role: string
    stack: string[]
    highlights: string[]
    technicalDetails: string[]
    screenshots: {
        src: string
        alt: string
        caption?: string
    }[]
    liveUrl?: string
    githubUrls?: {
        label: string
        url: string
    }[]
}

export const projects: Project[] = [
    {
        id: "unitygram",
        title: "UnityGram",
        type: ["Team Project", "Social Network", "Product"],
        description: "Социальная сеть с лентой, профилями пользователей, поиском, мессенджером, настройками аккаунта и отдельной административной панелью.",
        role: "Frontend Developer",
        stack: ["Next.js", "React", "TypeScript", "React Query", "React Hook Form", "OpenAPI", "GraphQL", "Apollo Client", "SCSS Modules"],
        highlights: [
            "Пользовательские сценарии: auth, profile, feed, search, messenger, settings",
            "Типизированная интеграция с API",
            "Работа с формами и валидацией",
            "Командная разработка",
            "Отдельная admin panel для управления продуктом",
        ],
        technicalDetails: [
            "Работа с server state через React Query",
            "Формы на React Hook Form и Zod",
            "Интеграция с REST API и GraphQL",
            "Разделение пользовательской и административной частей продукта",
        ],
        screenshots: [
            {
                src: "https://sun9-53.userapi.com/s/v1/ig2/RYYcgqFJekeq02EDckulMOsbqwituFAmDMHQ9h7nYesZ2BuJKUVLkxPPsxWP8IrwddyGO6LPNCNGudHuP3VfXGzw.jpg?quality=95&as=32x18,48x27,72x41,108x62,160x91,240x137,360x206,480x274,540x309,640x366,720x411,1080x617,1280x731,1440x823,1890x1080&from=bu&cs=1890x0",
                alt: "UnityGram project preview",
                caption: "Main product interface",
            },
        ],
        liveUrl: "https://unitygram.ru/",
        githubUrls: [
            {
                label: "Frontend",
                url: "https://github.com/SocialNetwork17/social-network",
            },
            {
                label: "Admin",
                url: "https://github.com/SocialNetwork17/social-network-admin",
            },
        ],
    },
    {
        id: "lavka-studenta",
        title: "Книжная Лавка Студента",
        type: ["Commercial", "CMS", "Business Website"],
        description: "Сайт книжного магазина с каталогом, рецензиями, книжным клубом, контактами и CMS-зоной для управления контентом.",
        role: "Frontend Developer",
        stack: ["Next.js", "React", "TypeScript", "Sanity CMS", "Tailwind CSS", "SEO"],
        highlights: [
            "Сайт для реального бизнес-контекста",
            "Интеграция с Sanity CMS",
            "SEO metadata, canonical, Open Graph",
            "Адаптивная верстка",
            "Контентные разделы: каталог, рецензии, книжный клуб, контакты",
        ],
        technicalDetails: [
            "CMS-driven структура контента",
            "SEO-метаданные для страниц",
            "Адаптивная верстка под разные устройства",
            "Смешанная модель данных: статический контент и данные из CMS",
        ],
        screenshots: [
            {
                src: "https://sun9-9.userapi.com/s/v1/ig2/MCn5KkMP1iKWrqWnlkSiRRjhMfF20dEVPKB-EMG0li1VK_V2jH2DPEJr7Gm_LdJoB5FYMPM6ambYTJKe3V4Asx-_.jpg?quality=95&as=32x15,48x23,72x35,108x52,160x77,240x115,360x173,480x231,540x259,640x307,720x346,1080x519,1280x615,1440x692,1897x911&from=bu&cs=1897x0",
                alt: "Книжная Лавка Студента project preview",
                caption: "Bookstore homepage",
            },
        ],
        liveUrl: "https://lavka-studenta-bookstore.ru/",
        githubUrls: [
            {
                label: "GitHub",
                url: "https://github.com/MariaSemenovaDev/lavka-studenta-bookstore",
            },
        ],
    },
    {
        id: "hockey-analytics",
        title: "Hockey Analytics",
        type: ["Analytics", "Sports Tech", "Product Interface"],
        description: "Веб-платформа для хоккейной аналитики и матчевого разбора: управление командами и игроками, подготовка составов на матч, видеоразметка игровых эпизодов, аналитика по матчам и игрокам, календарь событий и экспорт данных.",
        role: "Frontend Developer",
        stack: ["React", "TypeScript", "Vite", "React Router", "TanStack Query", "Apollo Client", "GraphQL", "REST API", "Orval", "GraphQL Code Generator", "Tailwind CSS", "Storybook", "Vitest", "i18next"],
        highlights: [
            "Пользовательские сценарии: auth, teams, team profile, players, player stats, matches, roster setup, HUD/video tagging, match summary, personal calendar",
            "Ролевая модель: admin, coach, analyst",
            "Видеоразметка матчей с таймлайном событий и синхронизацией с видео",
            "Аналитика по игрокам и матчам на основе GraphQL-данных",
            "Типизированная интеграция с REST API и GraphQL",
            "Загрузка изображений команд и игроков через presigned URL",
            "Экспорт матчевых данных в CSV",
            "Локализация интерфейса: RU / EN",
            "Командная разработка с UI kit, Storybook и тестами",
        ],
        technicalDetails: [
            "SPA на React + Vite с protected routing и lazy-loaded pages",
            "Server state через TanStack Query, аналитические данные через Apollo Client",
            "REST-клиенты сгенерированы через Orval, GraphQL types/hooks через GraphQL Code Generator",
            "Кастомный матчевый workflow: matches -> roster -> HUD -> summary",
            "Интерактивный HUD для тегирования игровых эпизодов и работы со звеньями",
            "Tailwind CSS design system, Storybook для UI-компонентов",
            "Unit/integration tests на Vitest + Testing Library, snapshot coverage для UI",
        ],
        screenshots: [
            {
                src: "https://sun9-33.userapi.com/s/v1/ig2/n0Lv9UeJHcwWfBR8YkGxMwejwDUG-cI57OdwpqTCkFdZcHUYVaja1TOdkEHt2Bqgsh8t3nXlVfxPC6bngudz1RXn.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&from=bu&cs=1920x0",
                alt: "Hockey Analytics project preview",
                caption: "Analytics dashboard",
            },
        ],
        liveUrl: "https://hockey-analytics-fe.vercel.app/login",
        githubUrls: [],
    },
    {
        id: "flashcards-app",
        title: "Flashcards App",
        type: ["CRUD App", "Educational Product", "Practice Project"],
        description: "Приложение для изучения учебных карточек с колодами, карточками и тренировочным режимом.",
        role: "Frontend Developer",
        stack: [],
        highlights: [
            "CRUD-сценарии для колод и карточек",
            "Формы создания и редактирования сущностей",
            "Работа с API и состоянием приложения",
            "TODO: уточнить стек после анализа package.json",
        ],
        technicalDetails: [
            "TODO: добавить routing, state management и API details после проверки кода",
        ],
        screenshots: [
            {
                src: "/projects/flashcards-app/cover.png",
                alt: "Flashcards App project preview",
                caption: "Decks and cards interface",
            },
        ],
        githubUrls: [
            {
                label: "GitHub",
                url: "https://github.com/MariaSemenovaDev/flashcards-app",
            },
        ],
    },
]
