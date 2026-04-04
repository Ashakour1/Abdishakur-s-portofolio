import Image from "next/image";
import { type BlogContentBlock } from "@/lib/blog-data";

type BlogContentBlockProps = {
  block: BlogContentBlock;
};

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

function getKeywordSet(language?: string) {
  const normalized = language?.toLowerCase();

  if (normalized === "python" || normalized === "py") {
    return PYTHON_KEYWORDS;
  }

  return TS_KEYWORDS;
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

  if (token.startsWith("//") || token.startsWith("#")) {
    return "text-white/32 italic";
  }

  if (/^["'`]/.test(token)) {
    return "text-white/82";
  }

  if (/^\d/.test(token)) {
    return "text-white/74";
  }

  if (keywordSet.has(token)) {
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
          {block.filename || block.language ? (
            <figcaption className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/35">
              {block.filename ? <span>{block.filename}</span> : null}
              {block.language ? <span>{block.language}</span> : null}
            </figcaption>
          ) : null}

          <pre className="overflow-x-auto bg-background px-5 py-4 text-sm leading-7 text-white/72">
            <HighlightedCode code={block.code} language={block.language} />
          </pre>

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
