import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from "motion/react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaCheck, FaRegCopy } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { EASE_OUT, EASE_IN } from "../lib/motion";
import { profile } from "../data/profile";
import { useLang } from "../i18n/context";

const EMAILJS = {
  service: "service_198kdyd",
  template: "template_4333qx7",
  key: "zR4GwwkWnKRSW7OWV",
};

const channels = (phone) => [
  { href: profile.github, label: "GitHub", handle: "acpagani", Icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", handle: "arthur-pagani", Icon: FaLinkedin },
  { href: `mailto:${profile.email}`, label: "E-mail", handle: profile.email, Icon: SiGmail },
  { href: profile.phoneHref, label: "WhatsApp", handle: phone, Icon: FaWhatsapp },
];

const field =
  "w-full rounded-lg border border-line bg-panel/60 px-4 py-3 text-[0.95rem] text-paper " +
  "caret-azure placeholder:text-muted/60 transition-colors duration-150 " +
  "focus:border-azure focus:outline-none focus-visible:outline-2 focus-visible:outline-azure";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();
  const shake = useAnimationControls();
  const copyTimer = useRef(null);
  const { t } = useLang();
  const c = t.contact;

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  // Errors record which field failed, not the sentence: the message renders in
  // the active language, so switching mid-form never leaves a stale one.
  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = true;
    if (values.message.trim().length < 10) next.message = true;
    return next;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      // Two oscillations, 4px, on submit only — never on blur.
      if (!reduce) shake.start({ x: [0, -4, 4, -4, 0], transition: { duration: 0.3 } });
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        { from_name: values.name, email: values.email, message: values.message },
        EMAILJS.key
      );
      setValues({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const sending = status === "sending";

  return (
    <>
      <PageHeader
        id="contato-title"
        kicker={c.kicker}
        title={c.title}
        lede={c.lede}
      />

      <div className="shell grid gap-14 pb-10 lg:grid-cols-12 lg:gap-16">
        <motion.form
          aria-labelledby="form-title"
          onSubmit={onSubmit}
          noValidate
          animate={shake}
          className="flex flex-col gap-5 lg:col-span-7"
        >
          <h2 id="form-title" className="sr-only">
            {c.formTitle}
          </h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="label">
              {c.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`${field} ${errors.name ? "border-red-400/70" : ""}`}
            />
            {/* Validation appears instantly — an animated error reads as a bug. */}
            <span id="name-error" role="alert" className="min-h-[1.15rem] text-xs text-red-300">
              {errors.name && c.errors.name}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="label">
              {c.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={c.emailPlaceholder}
              value={values.email}
              onChange={set("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${field} ${errors.email ? "border-red-400/70" : ""}`}
            />
            <span id="email-error" role="alert" className="min-h-[1.15rem] text-xs text-red-300">
              {errors.email && c.errors.email}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="label">
              {c.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              onChange={set("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${field} resize-y ${errors.message ? "border-red-400/70" : ""}`}
            />
            <span id="message-error" role="alert" className="min-h-[1.15rem] text-xs text-red-300">
              {errors.message && c.errors.message}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={sending}
              aria-busy={sending}
              className="inline-flex min-w-[10.5rem] items-center justify-center gap-2.5 rounded-full bg-azure px-7 py-3.5 font-mono text-[0.72rem] uppercase tracking-label text-ink transition-[transform,background-color] duration-150 ease-out4 [@media(hover:hover)]:hover:-translate-y-px [@media(hover:hover)]:hover:bg-frost active:scale-[0.97] disabled:pointer-events-none disabled:opacity-70"
            >
              {sending ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ink/30 border-t-ink"
                  />
                  {c.sending}
                </>
              ) : (
                c.send
              )}
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-label text-muted transition-colors duration-150 hover:text-paper"
            >
              {copied ? (
                <FaCheck aria-hidden="true" className="h-3.5 w-3.5 text-azure" />
              ) : (
                <FaRegCopy aria-hidden="true" className="h-3.5 w-3.5" />
              )}
              {copied ? c.copied : c.copy}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {status === "sent" && (
              <motion.p
                key="sent"
                role="status"
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_OUT } }}
                exit={{ opacity: 0, transition: { duration: 0.17, ease: EASE_IN } }}
                className="rounded-lg border border-azure/40 bg-azure/10 px-4 py-3 text-sm text-frost"
              >
                {c.sent}
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="error"
                role="alert"
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_OUT } }}
                exit={{ opacity: 0, transition: { duration: 0.17, ease: EASE_IN } }}
                className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200"
              >
                {c.failed}{" "}
                <a href={`mailto:${profile.email}`} className="link-wipe text-paper">
                  {profile.email}
                </a>
                .
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        <aside className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9">
          <Reveal className="flex flex-col gap-2 border-t border-line pt-5">
            <span className="label">{c.baseLabel}</span>
            <span className="text-sm text-paper">{t.location}</span>
            <span className="text-sm text-muted">{c.remote}</span>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-1 border-t border-line pt-5">
            <span className="label mb-2">{c.channels}</span>
            {channels(t.phone).map(({ href, label, handle, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-line py-3.5 transition-colors duration-150 hover:border-lineStrong"
              >
                <span className="flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 text-muted transition-colors duration-150 group-hover:text-azure"
                  />
                  <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted">
                    {label}
                  </span>
                </span>
                <span className="truncate text-sm text-paper">{handle}</span>
              </a>
            ))}
          </Reveal>
        </aside>
      </div>
    </>
  );
}
