const SectionHeading = ({ eyebrow, title, text, align = "left" }) => {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      {title ? <h2 className="font-display text-2xl text-ink md:text-4xl">{title}</h2> : null}
      {text ? <p className="mt-3 text-sm leading-7 text-graphite md:text-base">{text}</p> : null}
    </div>
  );
};

export default SectionHeading;
