import {
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { profile, type ProfileItem } from './data/profile'
import './App.css'

const views = [
  { id: 'lab', label: 'Lab', icon: Sparkles },
  { id: 'frames', label: 'Frames', icon: BriefcaseBusiness },
  { id: 'stack', label: 'Stack', icon: BarChart3 },
  { id: 'signal', label: 'Signal', icon: MapPin },
] as const

type ViewId = (typeof views)[number]['id']
type FrameItem = ProfileItem & { category: string; href?: string }

const frameItems: FrameItem[] = [
  ...profile.githubProjects.map((item) => ({
    title: item.name,
    organization: item.language,
    location: 'GitHub',
    dates: item.updatedAt,
    summary: item.description,
    tags: item.tags,
    highlights: [
      item.description,
      `Primary language or mode: ${item.language}.`,
      'Open this project from the live repository layer.',
    ],
    category: 'GitHub',
    href: item.href,
  })),
  ...profile.projects.map((item) => ({ ...item, category: 'Research' })),
  ...profile.experience.map((item) => ({ ...item, category: 'Fieldwork' })),
  ...profile.leadership.map((item) => ({ ...item, category: 'Ops' })),
]

const metricTiles = [
  { label: 'Public Repos', value: '8', detail: 'Theo9598 GitHub' },
  { label: 'Dominant Stack', value: 'Python', detail: 'ML / analytics / automation' },
  { label: 'Live Thread', value: 'News + AI', detail: 'Trend, brief, detector projects' },
]

const glyphs = ['Python', 'SQL', 'VLM', 'AUC', 'Berkeley', 'PyTorch', 'AI x Labor', 'Telemetry']

const heroSignals = [
  { label: 'Base', value: 'Berkeley DS' },
  { label: 'Mode', value: 'ML + Analytics' },
  { label: 'Feed', value: 'GitHub Live' },
]

function usePointerField() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight

      document.documentElement.style.setProperty('--cursor-x', `${x * 100}%`)
      document.documentElement.style.setProperty('--cursor-y', `${y * 100}%`)
      document.documentElement.style.setProperty('--tilt-x', `${(x - 0.5) * 8}deg`)
      document.documentElement.style.setProperty('--tilt-y', `${(0.5 - y) * 6}deg`)
      setPointer({ x, y })
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })

    return () => window.removeEventListener('pointermove', updatePointer)
  }, [])

  return pointer
}

function useConsoleKeys({
  setActiveFrame,
  setActiveView,
}: {
  setActiveFrame: Dispatch<SetStateAction<number>>
  setActiveView: Dispatch<SetStateAction<ViewId>>
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveFrame((index) => (index + 1) % frameItems.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveFrame((index) => (index - 1 + frameItems.length) % frameItems.length)
      }

      const numericView = Number(event.key)

      if (numericView >= 1 && numericView <= views.length) {
        setActiveView(views[numericView - 1].id)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setActiveFrame, setActiveView])
}

function AmbientField({
  activeFrame,
  pointer,
  activeView,
}: {
  activeFrame: number
  pointer: { x: number; y: number }
  activeView: ViewId
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pointerRef = useRef(pointer)
  const activeFrameRef = useRef(activeFrame)
  const activeViewRef = useRef(activeView)

  useEffect(() => {
    pointerRef.current = pointer
  }, [pointer])

  useEffect(() => {
    activeFrameRef.current = activeFrame
  }, [activeFrame])

  useEffect(() => {
    activeViewRef.current = activeView
  }, [activeView])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canvas || !context) {
      return
    }

    const nodes = Array.from({ length: 44 }, (_, index) => ({
      phase: index * 0.49,
      radius: 0.12 + ((index * 19) % 42) / 100,
      speed: 0.00016 + ((index * 13) % 11) / 42000,
      size: 1.2 + (index % 5) * 0.48,
    }))

    let animationFrame = 0
    let width = 0
    let height = 0

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1

      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const draw = (time: number) => {
      const active = activeFrameRef.current
      const viewIndex = views.findIndex((view) => view.id === activeViewRef.current)
      const { x, y } = pointerRef.current
      const centerX = width * (0.5 + (x - 0.5) * 0.22)
      const centerY = height * (0.5 + (y - 0.5) * 0.2)
      const speedBoost = reduceMotion ? 0 : time

      context.clearRect(0, 0, width, height)
      context.fillStyle = 'rgba(5, 10, 13, 0.86)'
      context.fillRect(0, 0, width, height)

      const field = context.createRadialGradient(centerX, centerY, 18, centerX, centerY, width * 0.74)
      field.addColorStop(0, viewIndex === 2 ? 'rgba(215, 191, 131, 0.11)' : 'rgba(143, 199, 186, 0.11)')
      field.addColorStop(0.46, viewIndex === 3 ? 'rgba(127, 153, 184, 0.08)' : 'rgba(202, 167, 111, 0.055)')
      field.addColorStop(1, 'rgba(5, 10, 13, 0)')
      context.fillStyle = field
      context.fillRect(0, 0, width, height)

      const plotted = nodes.map((node, index) => {
        const orbit = Math.min(width, height) * (node.radius + active * 0.002 + viewIndex * 0.015)
        const angle = node.phase + speedBoost * node.speed + active * 0.18 + viewIndex * 0.4
        return {
          x: centerX + Math.cos(angle) * orbit + Math.sin(index + time * 0.00034) * 22,
          y: centerY + Math.sin(angle * 1.17) * orbit + Math.cos(index + time * 0.00028) * 22,
          size: node.size,
        }
      })

      context.lineWidth = 1
      plotted.forEach((node, index) => {
        plotted.slice(index + 1).forEach((target) => {
          const distance = Math.hypot(node.x - target.x, node.y - target.y)

          if (distance < width * 0.095) {
            context.strokeStyle = `rgba(143, 199, 186, ${0.07 - distance / (width * 1.6)})`
            context.beginPath()
            context.moveTo(node.x, node.y)
            context.lineTo(target.x, target.y)
            context.stroke()
          }
        })
      })

      plotted.forEach((node, index) => {
        context.fillStyle = index % 4 === 0 ? '#caa76f' : index % 3 === 0 ? '#d7bf83' : '#8fc7ba'
        context.beginPath()
        context.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        context.fill()
      })

      context.strokeStyle = 'rgba(215, 191, 131, 0.16)'
      context.lineWidth = 1.5
      for (let index = 0; index < 4; index += 1) {
        const inset = 28 + index * 38 + active * 2
        context.strokeRect(inset, inset * 0.72, width - inset * 2, height - inset * 1.44)
      }

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    resize()
    draw(0)

    if (!reduceMotion) {
      animationFrame = window.requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas className="ambient-field" ref={canvasRef} aria-label="Interactive full-page data background" />
}

function HyperFrameCard({
  item,
  index,
  isActive,
  onSelect,
}: {
  item: FrameItem
  index: number
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      className={`hyper-card ${isActive ? 'is-active' : ''}`}
      onClick={onSelect}
      style={{ '--frame-index': index } as CSSProperties}
      type="button"
    >
      <span className="hyper-card__scanline" aria-hidden="true" />
      <span className="hyper-card__meta">
        <span>{item.category}</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </span>
      <strong>{item.title}</strong>
      <span className="hyper-card__org">{item.organization}</span>
    </button>
  )
}

function FrameDetail({
  item,
  compact = false,
}: {
  item: FrameItem
  compact?: boolean
}) {
  return (
    <article className={`frame-detail ${compact ? 'frame-detail--compact' : ''}`}>
      <div className="frame-detail__top">
        <span>{item.category}</span>
        <span>{item.location}</span>
      </div>
      <h2>{item.title}</h2>
      <p className="organization">{item.organization}</p>
      <p>{item.summary}</p>
      {item.href && (
        <a className="repo-jump" href={item.href} rel="noreferrer" target="_blank">
          Open repository
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      )}
      <ul>
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="tag-row" aria-label={`${item.title} tags`}>
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}

function PanelHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string
  title: string
  icon: typeof Database
}) {
  return (
    <div className="panel-heading">
      <span className="eyebrow">
        <Icon size={16} aria-hidden="true" />
        {eyebrow}
      </span>
      <h1>{title}</h1>
    </div>
  )
}

function LabPanel({
  activeFrame,
  setActiveFrame,
  setActiveView,
}: {
  activeFrame: number
  setActiveFrame: Dispatch<SetStateAction<number>>
  setActiveView: Dispatch<SetStateAction<ViewId>>
}) {
  const activeItem = frameItems[activeFrame]

  return (
    <section className="panel panel--lab" aria-label="Interactive lab panel">
      <div className="lab-hero">
        <div className="hero-title-grid">
          <PanelHeading eyebrow="GitHub As Interface" icon={Sparkles} title={profile.name} />
          <div className="identity-array" aria-label="Theo Zhang identity signals">
            <div className="identity-array__ring" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="identity-array__rows">
              {heroSignals.map((signal) => (
                <div className="identity-row" key={signal.label}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
            <div className="identity-pulse">
              <span>{activeItem.category}</span>
              <strong>{activeItem.title}</strong>
            </div>
          </div>
        </div>
        <div className="hero-chip-cloud" aria-label="Current focus tags">
          {activeItem.tags.slice(0, 5).map((tag, index) => (
            <span key={tag} style={{ '--chip-index': index } as CSSProperties}>
              {tag}
            </span>
          ))}
        </div>
        <p className="tagline">
          Public repos, ML experiments, news systems, and analytics work rearranged as
          a live field.
        </p>
        <div className="hero-actions">
          <button onClick={() => setActiveView('frames')} type="button">
            Open Frame Deck
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          <a href={profile.contacts[0].href}>
            Send Signal
            <Mail size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="portal-grid" aria-label="Featured interactive launchers">
        {frameItems.slice(0, 6).map((item, index) => (
          <button
            className={`portal-card ${activeFrame === index ? 'is-active' : ''}`}
            key={`${item.title}-${item.dates}`}
            onClick={() => {
              setActiveFrame(index)
              setActiveView('frames')
            }}
            type="button"
          >
            <span>{item.category}</span>
            <strong>{item.title}</strong>
            <small>{item.tags.slice(0, 3).join(' / ')}</small>
          </button>
        ))}
      </div>

      <div className="floating-brief">
        <span>Selected Repository / Frame</span>
        <strong>{activeItem.title}</strong>
        <p>{activeItem.summary}</p>
        {activeItem.href && (
          <a href={activeItem.href} rel="noreferrer" target="_blank">
            Visit GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  )
}

function FramesPanel({
  activeFrame,
  setActiveFrame,
}: {
  activeFrame: number
  setActiveFrame: Dispatch<SetStateAction<number>>
}) {
  return (
    <section className="panel panel--frames" aria-label="HyperFrame project browser">
      <div className="frame-rail">
        {frameItems.map((item, index) => (
          <HyperFrameCard
            index={index}
            isActive={activeFrame === index}
            item={item}
            key={`${item.title}-${item.dates}`}
            onSelect={() => setActiveFrame(index)}
          />
        ))}
      </div>
      <FrameDetail item={frameItems[activeFrame]} />
    </section>
  )
}

function StackPanel() {
  return (
    <section className="panel panel--stack" aria-label="Skills panel">
      <PanelHeading
        eyebrow="Stack"
        icon={BarChart3}
        title="A living instrument panel for Theo's toolkit."
      />
      <div className="stack-grid">
        {profile.skills.map((skillGroup, index) => (
          <article
            className="skill-card"
            key={skillGroup.group}
            style={{ '--skill-index': index } as CSSProperties}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{skillGroup.group}</h3>
            <div className="tag-row">
              {skillGroup.items.map((skill) => (
                <button key={skill} type="button">
                  {skill}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function SignalPanel() {
  return (
    <section className="panel panel--signal" aria-label="Contact and profile panel">
      <div className="signal-copy">
        <PanelHeading
          eyebrow="Signal"
          icon={MapPin}
          title="Open to research, analytics, and ML opportunities."
        />
        <p>
          Reach out for collaborations, internships, research conversations, or
          data-intensive projects.
        </p>
      </div>
      <div className="profile-grid">
        <article className="profile-card">
          <GraduationCap size={20} aria-hidden="true" />
          <span>Education</span>
          <strong>{profile.education.school}</strong>
          <p>
            {profile.education.degree} / {profile.education.graduation} /{' '}
            {profile.education.gpa}
          </p>
        </article>
        <article className="profile-card">
          <BookOpen size={20} aria-hidden="true" />
          <span>Publication</span>
          <strong>{profile.publications[0]}</strong>
        </article>
        <div className="contact-links">
          {profile.contacts.map((contact) => (
            <a
              href={contact.href}
              key={contact.label}
              rel="noreferrer"
              target={contact.label === 'LinkedIn' ? '_blank' : undefined}
            >
              {contact.label === 'Email' ? (
                <Mail size={18} aria-hidden="true" />
              ) : (
                <ExternalLink size={18} aria-hidden="true" />
              )}
              <span>
                <strong>{contact.label}</strong>
                {contact.value}
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [activeFrame, setActiveFrame] = useState(0)
  const [activeView, setActiveView] = useState<ViewId>('lab')
  const pointer = usePointerField()
  const activeItem = frameItems[activeFrame]

  useConsoleKeys({ setActiveFrame, setActiveView })

  return (
    <div className={`console-shell view-${activeView}`}>
      <AmbientField activeFrame={activeFrame} activeView={activeView} pointer={pointer} />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="rift-layer" aria-hidden="true">
        {glyphs.map((glyph, index) => (
          <span key={glyph} style={{ '--glyph-index': index } as CSSProperties}>
            {glyph}
          </span>
        ))}
      </div>

      <aside className="command-deck" aria-label="Console navigation">
        <a className="brand" href="#app" aria-label="Theo Zhang home">
          <span>TZ</span>
          <small>HyperFrame OS</small>
        </a>
        <nav>
          {views.map((view, index) => {
            const Icon = view.icon

            return (
              <button
                className={activeView === view.id ? 'active' : ''}
                key={view.id}
                onClick={() => setActiveView(view.id)}
                type="button"
              >
                <Icon size={17} aria-hidden="true" />
                <span>{view.label}</span>
                <kbd>{index + 1}</kbd>
              </button>
            )
          })}
        </nav>
        <div className="deck-note">
          <span>Keys</span>
          <strong>1-4 views / left-right frames</strong>
        </div>
      </aside>

      <main className="viewport-panel" id="app">
        <div className="viewport-topbar">
          <span>{activeView.toUpperCase()} / LIVE FIELD</span>
          <div>
            <button
              aria-label="Previous frame"
              onClick={() => setActiveFrame((index) => (index - 1 + frameItems.length) % frameItems.length)}
              type="button"
            >
              <ArrowLeft size={16} aria-hidden="true" />
            </button>
            <button
              aria-label="Next frame"
              onClick={() => setActiveFrame((index) => (index + 1) % frameItems.length)}
              type="button"
            >
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        {activeView === 'lab' && (
          <LabPanel
            activeFrame={activeFrame}
            setActiveFrame={setActiveFrame}
            setActiveView={setActiveView}
          />
        )}
        {activeView === 'frames' && (
          <FramesPanel activeFrame={activeFrame} setActiveFrame={setActiveFrame} />
        )}
        {activeView === 'stack' && <StackPanel />}
        {activeView === 'signal' && <SignalPanel />}
      </main>

      <aside className="inspector-panel" aria-label="Active frame inspector">
        <div className="inspector-header">
          <span>Selected Frame</span>
          <strong>{String(activeFrame + 1).padStart(2, '0')}</strong>
        </div>
        <FrameDetail compact item={activeItem} />
        <div className="metric-dock">
          {metricTiles.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.detail}</small>
            </article>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default App
