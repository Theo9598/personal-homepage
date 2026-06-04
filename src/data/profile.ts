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
  tagline: 'Data Science student building practical ML systems and research-grade analytics.',
  location: 'UC Berkeley · Berkeley, CA',
  summary:
    'Theo Zhang is a Data Science undergraduate at UC Berkeley with experience across machine learning research, production analytics, and data-intensive project leadership. His work spans labor-market modeling, vision-language model evaluation, vehicle telemetry analysis, and systems that turn messy operational data into useful decisions.',
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
        'A Python-based news brief skill and automation project for collecting, filtering, and generating structured news outputs.',
      language: 'Python',
      href: 'https://github.com/Theo9598/news-brief-skill',
      updatedAt: 'Jun 2026',
      tags: ['Automation', 'News', 'Python'],
    },
    {
      name: 'gtsrb-reliability',
      description:
        'Reliability work around AI-generated versus real image detection, connected to an IEOR 142B project and Hugging Face demo.',
      language: 'Python',
      href: 'https://github.com/Theo9598/gtsrb-reliability',
      updatedAt: 'Jun 2026',
      tags: ['Reliability', 'Computer Vision', 'Hugging Face'],
    },
    {
      name: 'newsnow',
      description: 'A TypeScript project for elegant reading of real-time and trending news.',
      language: 'TypeScript',
      href: 'https://github.com/Theo9598/newsnow',
      updatedAt: 'May 2026',
      tags: ['TypeScript', 'Realtime News', 'Reading UI'],
    },
    {
      name: 'TrendRadar',
      description:
        'An AI-driven public opinion and trend monitor for multi-platform aggregation, RSS, filtering, alerts, and analysis briefs.',
      language: 'AI / Monitoring',
      href: 'https://github.com/Theo9598/TrendRadar',
      updatedAt: 'May 2026',
      tags: ['Trend Monitoring', 'RSS', 'Alerts'],
    },
    {
      name: 'ai-vs-real-image-detector',
      description:
        'An IEOR 142A computer vision project for detecting AI-generated versus real images with a Hugging Face Space demo.',
      language: 'Python',
      href: 'https://github.com/Theo9598/ai-vs-real-image-detector',
      updatedAt: 'May 2026',
      tags: ['Computer Vision', 'Detection', 'ML'],
    },
    {
      name: 'tiny-language-model',
      description: 'A compact language model project exploring small-scale model behavior and implementation.',
      language: 'Python',
      href: 'https://github.com/Theo9598/tiny-language-model',
      updatedAt: 'Apr 2026',
      tags: ['Language Model', 'Python', 'ML'],
    },
    {
      name: 'face-physiognomy-mapper',
      description: 'A Python project experimenting with face mapping and model-driven visual interpretation.',
      language: 'Python',
      href: 'https://github.com/Theo9598/face-physiognomy-mapper',
      updatedAt: 'Apr 2026',
      tags: ['Vision', 'Mapping', 'Python'],
    },
    {
      name: 'customer-churn-analysis',
      description: 'A customer churn analytics project using Python modeling and business-oriented analysis.',
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
        'Analyzed large-scale vehicle telemetry data and built automated ML-ready data pipelines for diagnostics and failure detection.',
      tags: ['Python', 'SQL', 'Telemetry', 'ML Pipelines'],
      highlights: [
        'Built data cleaning, feature engineering, and labeling pipelines for downstream machine learning workflows.',
        'Developed and evaluated logistic regression, random forest, and gradient boosting models for vehicle failure detection.',
        'Created dashboards connecting customer usage patterns with system diagnostics for engineering decisions.',
      ],
    },
    {
      title: 'Data Analyst Intern',
      organization: 'Jiangsu Jurong Pharmaceutical Group',
      location: 'Jiangsu',
      dates: 'Jun 2021 - Sep 2021',
      summary:
        'Supported production and quality analytics in a regulated manufacturing environment through SQL reporting and Python modeling.',
      tags: ['SQL', 'Python', 'Validation', 'Operations'],
      highlights: [
        'Queried and aggregated production and quality datasets for reporting and operational analysis.',
        'Applied regression and time-series models to identify manufacturing workflow bottlenecks.',
        'Wrote automated validation scripts to detect anomalies and protect dataset integrity.',
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
        'Research on how occupational AI exposure connects to employment outcomes across national-scale labor market data.',
      tags: ['Research', 'Python', 'Regression', 'LLM Capabilities'],
      highlights: [
        'Clean and integrate labor-market datasets for publication-oriented analysis.',
        'Build regression and ML models linking AI exposure with labor outcomes.',
        'Engineer occupation-level features by mapping job tasks to LLM capabilities.',
      ],
    },
    {
      title: 'Vision-Language Models',
      organization: 'Hohai University',
      location: 'Jiangsu',
      dates: 'Aug 2023 - Dec 2023',
      summary:
        'Prompt-based evaluation pipelines for image-text grounding, spatial reasoning, and contextual perception tasks.',
      tags: ['VLMs', 'Prompt Evaluation', 'Ablation Studies', 'Python'],
      highlights: [
        'Designed experiments to compare model behavior across prompt structures and evaluation settings.',
        'Conducted ablation studies on prompt design, performance, and robustness.',
        'Co-authored a paper accepted by IEEE Transactions on Cognitive and Developmental Systems.',
      ],
    },
    {
      title: 'COVID-19 Community Support Platform',
      organization: 'Founder & Developer',
      location: 'Jiangsu',
      dates: 'Jan 2020 - Apr 2020',
      summary:
        'A WeChat-based intake and coordination system for household supply needs during COVID-19 lockdowns.',
      tags: ['WeChat', 'Civic Tech', 'Voice Input', 'Operations'],
      highlights: [
        'Built request intake workflows that improved categorization and volunteer coordination.',
        'Added voice-to-text input to help elderly users submit requests without typing.',
        'Organized follow-up and real-time communication channels for delivery and health updates.',
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
        'Leads campus event execution, stakeholder coordination, and feedback-driven planning for an international student organization.',
      tags: ['Leadership', 'Planning', 'Analytics', 'Outreach'],
      highlights: [
        'Manage project timelines, task delegation, and coordination with internal and external partners.',
        'Track participation and feedback data to improve event planning and student engagement.',
      ],
    },
  ] satisfies ProfileItem[],
  publications: [
    'IEEE Transactions on Cognitive and Developmental Systems, co-author, accepted Apr 2025',
  ],
}
