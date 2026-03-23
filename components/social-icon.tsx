type SocialIconProps = {
  label: string;
  className?: string;
};

export function SocialIcon({ label, className = "h-4 w-4 fill-current" }: SocialIconProps) {
  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.04-2.77-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.78 1.06A9.38 9.38 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.93-1.34 2.78-1.06 2.78-1.06.55 1.42.2 2.47.1 2.73.65.72 1.04 1.64 1.04 2.77 0 3.96-2.35 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
        <path d="M6.94 8.5H3.56V19.5h3.38v-11ZM5.25 3A1.97 1.97 0 0 0 3.25 5c0 1.1.88 2 1.97 2h.03a2 2 0 1 0 0-4ZM20.75 12.66c0-3.37-1.8-4.94-4.2-4.94-1.94 0-2.8 1.08-3.28 1.84V8.5H9.9c.04.7 0 11 0 11h3.37v-6.14c0-.33.02-.66.12-.89.26-.66.84-1.34 1.82-1.34 1.29 0 1.8 1 1.8 2.46v5.91H20.4v-6.84Z" />
      </svg>
    );
  }

  return null;
}

export function MailIcon({ className = "h-4 w-4 stroke-current" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M3.75 6.75h16.5v10.5H3.75z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}
