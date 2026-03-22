function Links() {
  const links = [
    { name: "GitHub", url: "https://github.com/liza" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <div>
      <h3>Links</h3>

      {links.map((link) => (
        <a key={link.name} href={link.url} target="_blank">
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default Links;