import Image from "next/image";
import { type ReactNode } from "react";
import { type BlogContentBlock } from "@/lib/blog-data";

type BlogContentBlockProps = {
  block: BlogContentBlock;
};

type StatusTone = "completed" | "progress" | "pending" | "neutral";

function getStatusTone(text: string): StatusTone {
  const value = text.toLowerCase();

  if (
    value.includes("✅") ||
    value.includes("completed") ||
    value.includes("done")
  ) {
    return "completed";
  }

  if (
    value.includes("🚧") ||
    value.includes("in progress") ||
    value.includes("active")
  ) {
    return "progress";
  }

  if (
    value.includes("⏳") ||
    value.includes("pending") ||
    value.includes("todo")
  ) {
    return "pending";
  }

  return "neutral";
}

function statusToneClassName(tone: StatusTone) {
  switch (tone) {
    case "completed":
      return "border-emerald-400/25 bg-emerald-400/10 text-emerald-200";
    case "progress":
      return "border-amber-400/25 bg-amber-400/10 text-amber-100";
    case "pending":
      return "border-white/12 bg-white/[0.04] text-white/55";
    default:
      return "border-white/12 bg-white/[0.04] text-white/70";
  }
}

function StatusBadge({ label }: { label: string }) {
  const tone = getStatusTone(label);

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[11px] font-medium tracking-[0.04em] ${statusToneClassName(tone)}`}
    >
      {label.trim()}
    </span>
  );
}

function renderInlineMarkdown(text: string): ReactNode {
  const tone = getStatusTone(text);

  if (tone !== "neutral" && /^(✅|🚧|⏳)/.test(text.trim())) {
    return <StatusBadge label={text} />;
  }

  const keyValueMatch = text.match(/^([^:]+):\s*(.+)$/);
  if (keyValueMatch) {
    const [, key, value] = keyValueMatch;
    const valueTone = getStatusTone(value);

    return (
      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
          {key}
        </span>
        {valueTone === "neutral" ? (
          <span className="text-white/84">{value}</span>
        ) : (
          <StatusBadge label={value} />
        )}
      </span>
    );
  }

  return text;
}

function parseMarkdownTable(lines: string[]) {
  const rows = lines
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim()),
    )
    .filter((cells) => cells.some((cell) => cell.length > 0));

  if (rows.length < 2) {
    return null;
  }

  const [header, maybeSeparator, ...body] = rows;
  const hasSeparator = maybeSeparator.every((cell) => /^:?-{3,}:?$/.test(cell));
  const dataRows = hasSeparator ? body : [maybeSeparator, ...body];

  return { header, dataRows };
}

function MarkdownDocument({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];

      if (level === 1) {
        nodes.push(
          <h3
            key={`h1-${index}`}
            className="text-xl font-semibold tracking-tight text-white sm:text-2xl"
          >
            {text}
          </h3>,
        );
      } else if (level === 2) {
        nodes.push(
          <h4
            key={`h2-${index}`}
            className="pt-2 text-[11px] uppercase tracking-[0.22em] text-white/40"
          >
            {text}
          </h4>,
        );
      } else {
        nodes.push(
          <h5
            key={`h3-${index}`}
            className="pt-1 text-base font-medium tracking-tight text-white"
          >
            {text}
          </h5>,
        );
      }

      index += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }

      const table = parseMarkdownTable(tableLines);

      if (table) {
        nodes.push(
          <div
            key={`table-${index}`}
            className="overflow-x-auto border border-white/10"
          >
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  {table.header.map((cell) => (
                    <th
                      key={cell}
                      className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.dataRows.map((row, rowIndex) => (
                  <tr
                    key={`${row.join("-")}-${rowIndex}`}
                    className="border-b border-white/8 last:border-b-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${cell}-${cellIndex}`}
                        className="px-4 py-3 align-middle text-white/78"
                      >
                        {cellIndex === row.length - 1 &&
                        getStatusTone(cell) !== "neutral" ? (
                          <StatusBadge label={cell} />
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }

      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];

      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }

      nodes.push(
        <ul key={`list-${index}`} className="space-y-2 pl-1">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-7 text-white/74"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
              <span>{item}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    nodes.push(
      <p
        key={`p-${index}`}
        className="text-sm leading-7 text-white/74 sm:text-[0.95rem]"
      >
        {renderInlineMarkdown(trimmed)}
      </p>,
    );
    index += 1;
  }

  return <div className="space-y-4">{nodes}</div>;
}

const CODE_TOKEN_PATTERN =
  /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|#[^\n]*|\/\/[^\n]*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_]*\b|[{}()[\].,:=+\-*/<>]+|\s+|./g;

const TS_KEYWORDS = new Set([
  "async",
  "await",
  "const",
  "else",
  "export",
  "false",
  "for",
  "function",
  "if",
  "import",
  "let",
  "null",
  "return",
  "true",
  "type",
  "while",
]);

const PYTHON_KEYWORDS = new Set([
  "and",
  "class",
  "def",
  "elif",
  "else",
  "False",
  "for",
  "from",
  "if",
  "import",
  "in",
  "None",
  "not",
  "or",
  "return",
  "True",
  "while",
]);

function normalizeLanguage(language?: string) {
  return language?.toLowerCase() ?? "";
}

function isPlainLanguage(language?: string) {
  const normalized = normalizeLanguage(language);
  return (
    normalized === "text" ||
    normalized === "txt" ||
    normalized === "plain" ||
    normalized === "bash" ||
    normalized === "shell" ||
    normalized === "sh"
  );
}

function isMarkdownLanguage(language?: string) {
  const normalized = normalizeLanguage(language);
  return normalized === "md" || normalized === "markdown";
}

function getKeywordSet(language?: string) {
  const normalized = normalizeLanguage(language);

  if (
    !normalized ||
    isPlainLanguage(language) ||
    isMarkdownLanguage(language)
  ) {
    return null;
  }

  if (normalized === "python" || normalized === "py") {
    return PYTHON_KEYWORDS;
  }

  return TS_KEYWORDS;
}

function getMarkdownLineClassName(line: string) {
  const trimmed = line.trim();

  if (/^#{1,6}\s/.test(trimmed)) {
    return "text-white";
  }

  if (/^[-*]\s/.test(trimmed) || /^\d+\.\s/.test(trimmed)) {
    return "text-white/74";
  }

  if (/^\|/.test(trimmed)) {
    return "text-white/62";
  }

  if (/^```/.test(trimmed)) {
    return "text-white/40";
  }

  return "text-white/70";
}

function getTokenClassName(
  token: string,
  index: number,
  tokens: string[],
  language?: string,
) {
  const keywordSet = getKeywordSet(language);
  const nextToken =
    tokens.slice(index + 1).find((part) => !/^\s+$/.test(part)) ?? "";
  const previousToken =
    tokens
      .slice(0, index)
      .reverse()
      .find((part) => !/^\s+$/.test(part)) ?? "";

  if (/^\s+$/.test(token)) {
    return "";
  }

  if (isPlainLanguage(language)) {
    return "text-white/70";
  }

  if (token.startsWith("//") || token.startsWith("#")) {
    return "text-white/32 italic";
  }

  if (/^["'`]/.test(token)) {
    return "text-white/82";
  }

  if (/^\d/.test(token)) {
    return "text-white/74";
  }

  if (keywordSet?.has(token)) {
    return "text-white";
  }

  if (/^[{}()[\].,:=+\-*/<>]+$/.test(token)) {
    return "text-white/34";
  }

  if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(token) && nextToken === ":") {
    return "text-white/88";
  }

  if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(token) && nextToken === "(") {
    return "text-white/80";
  }

  if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(token) && previousToken === ".") {
    return "text-white/74";
  }

  return "text-white/70";
}

function HighlightedCode({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  return (
    <code className="block min-w-full font-mono">
      {code.split("\n").map((line, lineIndex) => {
        if (isMarkdownLanguage(language)) {
          return (
            <span
              key={`${line}-${lineIndex}`}
              className={`block ${getMarkdownLineClassName(line)}`}
            >
              {line.length === 0 ? "\u00A0" : line}
            </span>
          );
        }

        const tokens = line.match(CODE_TOKEN_PATTERN) ?? [];

        return (
          <span key={`${line}-${lineIndex}`} className="block">
            {tokens.length === 0
              ? "\u00A0"
              : tokens.map((token, tokenIndex) => (
                  <span
                    key={`${token}-${tokenIndex}`}
                    className={getTokenClassName(
                      token,
                      tokenIndex,
                      tokens,
                      language,
                    )}
                  >
                    {token}
                  </span>
                ))}
          </span>
        );
      })}
    </code>
  );
}

export function BlogContentBlockView({ block }: BlogContentBlockProps) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-base leading-8 text-white/72">{block.content}</p>;

    case "subheading":
      return (
        <h3 className="pt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
          {block.content}
        </h3>
      );

    case "list":
      return (
        <ul className="space-y-3 text-base leading-8 text-white/72">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 rounded-full bg-white/30" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <figure className="space-y-3">
          <div className="overflow-hidden border border-white/10">
            {block.filename || block.language ? (
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3">
                {block.filename ? (
                  <span className="font-mono text-xs tracking-normal text-white/55 normal-case">
                    {block.filename}
                  </span>
                ) : (
                  <span />
                )}
                {block.language ? (
                  <span className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                    {block.language}
                  </span>
                ) : null}
              </div>
            ) : null}

            <pre className="overflow-x-auto bg-background px-5 py-4 text-sm leading-7 text-white/72">
              <HighlightedCode code={block.code} language={block.language} />
            </pre>
          </div>

          {block.caption ? (
            <figcaption className="text-sm leading-7 text-white/48">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "markdown":
      return (
        <figure className="space-y-3">
          <div className="overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </span>
                {block.filename ? (
                  <span className="truncate font-mono text-xs text-white/55">
                    {block.filename}
                  </span>
                ) : (
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                    Markdown
                  </span>
                )}
              </div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                Preview
              </span>
            </div>

            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <MarkdownDocument content={block.content} />
            </div>
          </div>

          {block.caption ? (
            <figcaption className="text-sm leading-7 text-white/48">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "math":
      return (
        <div className="space-y-3 bg-background px-5 py-5">
          {block.label ? (
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">
              {block.label}
            </p>
          ) : null}

          <pre className="editorial-title overflow-x-auto whitespace-pre-wrap text-2xl leading-relaxed text-white sm:text-[1.9rem]">
            {block.expression}
          </pre>

          {block.note ? (
            <p className="text-sm leading-7 text-white/48">{block.note}</p>
          ) : null}
        </div>
      );

    case "image":
      return (
        <figure className="space-y-3">
          <div className="overflow-hidden bg-background p-3">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full object-cover"
            />
          </div>

          {block.caption ? (
            <figcaption className="text-sm leading-7 text-white/48">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
  }
}
