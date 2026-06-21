interface Props {
  language: "en" | "te";
  onChange: (lang: "en" | "te") => void;
}

export default function LanguageToggle({
  language,
  onChange,
}: Props) {
  return (
    <div className="inline-flex rounded-full border bg-white p-1">
      <button
        onClick={() => onChange("en")}
        className={`px-4 py-2 rounded-full text-sm font-semibold ${
          language === "en"
            ? "bg-[color:var(--royal)] text-white"
            : ""
        }`}
      >
        English
      </button>

      <button
        onClick={() => onChange("te")}
        className={`px-4 py-2 rounded-full text-sm font-semibold ${
          language === "te"
            ? "bg-[color:var(--royal)] text-white"
            : ""
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
}