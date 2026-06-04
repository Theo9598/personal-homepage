export type ProfileItem = {
  title: string
  organization: string
  location: string
  dates: string
  summary: string
  tags: string[]
  highlights: string[]
}

export type Contact = {
  label: string
  href: string
  value: string
}

export type GithubProject = {
  name: string
  description: string
  language: string
  href: string
  updatedAt: string
  tags: string[]
}

export const profile = {
  name: 'Theo Zhang',
  tagline: 'Data Science student building practical ML systems and careful analytics.',
  location: 'UC Berkeley · Berkeley, CA',
  summary:
    'Theo Zhang is a Data Science undergraduate at UC Berkeley who likes working where modeling, product sense, and real-world messiness meet. His work spans labor-market research, vision-language model evaluation, vehicle telemetry analysis, and small systems that make scattered information easier to act on.',
  education: {
    school: 'University of California, Berkeley',
    degree: 'B.S. Data Science',
    graduation: 'Expected May 2027',
    gpa: 'GPA 3.86',
    courses: ['Machine Learning', 'Data Structures', 'Statistical Modeling', 'Database Systems'],
  },
  contacts: [
    {
      label: 'Email',
      href: 'mailto:zcn8899@gmail.com',
      value: 'zcn8899@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tzzzzz',
      value: 'linkedin.com/in/tzzzzz',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Theo9598',
      value: 'github.com/Theo9598',
    },
  ] satisfies Contact[],
  githubProjects: [
    {
      name: 'news-brief-skill',
      description:
        'A Python automation project that turns noisy source streams into cleaner, structured news briefs.',
      language: 'Python',
      href: 'https://github.com/Theo9598/news-brief-skill',
      updatedAt: 'Jun 2026',
      tags: ['Automation', 'News', 'Python'],
    },
    {
      name: 'gtsrb-reliability',
      description:
        'Reliability experiments for AI-versus-real image detection, connected to an IEOR 142B project and Hugging Face demo.',
      language: 'Python',
      href: 'https://github.com/Theo9598/gtsrb-reliability',
      updatedAt: 'Jun 2026',
      tags: ['Reliability', 'Computer Vision', 'Hugging Face'],
    },
    {
      name: 'newsnow',
      description: 'A TypeScript news reader focused on making real-time and trending stories easier to scan.',
      language: 'TypeScript',
      href: 'https://github.com/Theo9598/newsnow',
      updatedAt: 'May 2026',
      tags: ['TypeScript', 'Realtime News', 'Reading UI'],
    },
    {
      name: 'TrendRadar',
      description:
        'A trend-monitoring system for collecting signals across platforms, filtering noise, and producing analysis briefs.',
      language: 'AI / Monitoring',
      href: 'https://github.com/Theo9598/TrendRadar',
      updatedAt: 'May 2026',
      tags: ['Trend Monitoring', 'RSS', 'Alerts'],
    },
    {
      name: 'ai-vs-real-image-detector',
      description:
        'A computer vision project that tests how well models separate AI-generated images from real ones.',
      language: 'Python',
      href: 'https://github.com/Theo9598/ai-vs-real-image-detector',
      updatedAt: 'May 2026',
      tags: ['Computer Vision', 'Detection', 'ML'],
    },
    {
      name: 'tiny-language-model',
      description: 'A compact language model project for learning how model behavior emerges from small implementations.',
      language: 'Python',
      href: 'https://github.com/Theo9598/tiny-language-model',
      updatedAt: 'Apr 2026',
      tags: ['Language Model', 'Python', 'ML'],
    },
    {
      name: 'face-physiognomy-mapper',
      description: 'A Python experiment around face mapping, visual features, and model-driven interpretation.',
      language: 'Python',
      href: 'https://github.com/Theo9598/face-physiognomy-mapper',
      updatedAt: 'Apr 2026',
      tags: ['Vision', 'Mapping', 'Python'],
    },
    {
      name: 'customer-churn-analysis',
      description: 'A churn analysis project that connects Python modeling with business-facing interpretation.',
      language: 'Python',
      href: 'https://github.com/Theo9598/customer-churn-analysis',
      updatedAt: 'Mar 2026',
      tags: ['Churn', 'Analytics', 'Python'],
    },
  ] satisfies GithubProject[],
  skills: [
    {
      group: 'Programming',
      items: ['Python', 'R', 'SQL', 'Java', 'C++'],
    },
    {
      group: 'Data & ML',
      items: ['pandas', 'NumPy', 'PyTorch', 'scikit-learn', 'TensorFlow'],
    },
    {
      group: 'Modeling',
      items: ['Regression', 'Feature Engineering', 'Model Evaluation', 'Time Series'],
    },
    {
      group: 'Languages',
      items: ['English (Fluent)', 'Chinese (Native)'],
    },
  ],
  experience: [
    {
      title: 'Data Analyst Intern',
      organization: 'Zeekr Intelligent Technology',
      location: 'Shanghai',
      dates: 'Jun 2022 - Sep 2022',
      summary:
        'Worked with vehicle telemetry data to make diagnostics and failure patterns easier for engineering teams to analyze.',
      tags: ['Python', 'SQL', 'Telemetry', 'ML Pipelines'],
      highlights: [
        'Built cleaning, feature engineering, and labeling pipelines for machine learning workflows.',
        'Compared logistic regression, random forest, and gradient boosting models for failure detection.',
        'Connected usage patterns with diagnostic signals through dashboards and analysis summaries.',
      ],
    },
    {
      title: 'Data Analyst Intern',
      organization: 'Jiangsu Jurong Pharmaceutical Group',
      location: 'Jiangsu',
      dates: 'Jun 2021 - Sep 2021',
      summary:
        'Used SQL reporting and Python analysis to support production and quality decisions in a regulated manufacturing setting.',
      tags: ['SQL', 'Python', 'Validation', 'Operations'],
      highlights: [
        'Aggregated production and quality datasets for reporting and operational analysis.',
        'Used regression and time-series methods to look for workflow bottlenecks.',
        'Wrote validation scripts that flagged anomalies before they reached downstream reports.',
      ],
    },
  ] satisfies ProfileItem[],
  projects: [
    {
      title: 'AI & Labor Market',
      organization: 'Xiamen University x Ant Group',
      location: 'Remote',
      dates: 'Dec 2024 - Present',
      summary:
        'Researching how occupational exposure to AI may connect with employment outcomes across large labor-market datasets.',
      tags: ['Research', 'Python', 'Regression', 'LLM Capabilities'],
      highlights: [
        'Clean and combine labor-market datasets for publication-oriented analysis.',
        'Build regression and ML models that link AI exposure with labor outcomes.',
        'Map occupation-level tasks to LLM capabilities to create more interpretable features.',
      ],
    },
    {
      title: 'Vision-Language Models',
      organization: 'Hohai University',
      location: 'Jiangsu',
      dates: 'Aug 2023 - Dec 2023',
      summary:
        'Built prompt-based evaluation workflows for image-text grounding, spatial reasoning, and contextual perception.',
      tags: ['VLMs', 'Prompt Evaluation', 'Ablation Studies', 'Python'],
      highlights: [
        'Designed experiments to compare model behavior across prompt structures and evaluation settings.',
        'Ran ablation studies to understand when prompt changes helped or hurt performance.',
        'Co-authored a paper accepted by IEEE Transactions on Cognitive and Developmental Systems.',
      ],
    },
    {
      title: 'COVID-19 Community Support Platform',
      organization: 'Founder & Developer',
      location: 'Jiangsu',
      dates: 'Jan 2020 - Apr 2020',
      summary:
        'A WeChat-based coordination tool that helped households communicate supply needs during COVID-19 lockdowns.',
      tags: ['WeChat', 'Civic Tech', 'Voice Input', 'Operations'],
      highlights: [
        'Built request intake flows that made volunteer coordination easier.',
        'Added voice-to-text input so elderly users could submit requests without typing.',
        'Organized follow-up channels for delivery updates and health-related communication.',
      ],
    },
  ] satisfies ProfileItem[],
  leadership: [
    {
      title: 'Project Manager',
      organization: 'VITA Global (Chinese Union)',
      location: 'Berkeley',
      dates: 'Jul 2025 - Present',
      summary:
        'Leads event planning, partner coordination, and feedback-driven improvements for an international student organization.',
      tags: ['Leadership', 'Planning', 'Analytics', 'Outreach'],
      highlights: [
        'Manage timelines, task ownership, and communication across internal and external partners.',
        'Use participation and feedback data to improve future events and student engagement.',
      ],
    },
  ] satisfies ProfileItem[],
  publications: [
    'IEEE Transactions on Cognitive and Developmental Systems, co-author, accepted Apr 2025',
  ],
}
