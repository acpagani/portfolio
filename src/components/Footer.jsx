import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { profile } from "../data/profile";
import { NAV_LINKS } from "../lib/nav";
import { useLang } from "../i18n/context";

const socials = [
  { href: profile.github, label: "GitHub", Icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: `mailto:${profile.email}`, label: "E-mail", Icon: SiGmail },
  { href: profile.phoneHref, label: "WhatsApp", Icon: FaWhatsapp },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative z-10 mt-32 border-t border-line bg-abyss/60">
      <div className="shell grid gap-12 py-16 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-5">
          <span className="font-display text-3xl leading-none text-paper">{profile.name}</span>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {t.footer.tagline}
          </p>
          <span className="label mt-2">{t.location}</span>
        </div>

        <nav className="flex flex-col gap-3 md:col-span-3" aria-label={t.a11y.footerNav}>
          <span className="label">{t.footer.pages}</span>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-wipe w-fit text-sm text-paper/80 transition-colors duration-150 hover:text-azure"
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 md:col-span-4">
          <span className="label">{t.footer.find}</span>
          <a
            href={`mailto:${profile.email}`}
            className="link-wipe w-fit text-sm text-paper/80 transition-colors duration-150 hover:text-azure"
          >
            {profile.email}
          </a>
          <a
            href={profile.phoneHref}
            target="_blank"
            rel="noreferrer"
            className="link-wipe w-fit text-sm text-paper/80 transition-colors duration-150 hover:text-azure"
          >
            {t.phone}
          </a>
          <ul className="mt-3 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-[color,border-color,transform] duration-150 ease-out4 hover:-translate-y-px hover:border-azure hover:text-azure active:scale-[0.97]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-line py-6 font-mono text-[0.65rem] uppercase tracking-label text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Arthur Cotrick Pagani</span>
        <span>{t.footer.builtWith}</span>
      </div>
    </footer>
  );
}
