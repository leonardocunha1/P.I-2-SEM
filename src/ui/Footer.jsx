function Footer() {
  return (
    <footer className="bg-stone-900 px-4 py-6 text-center text-primary-100">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} -{" "}
        <span className="font-semibold text-primary-500">
          Diiner&apos;s Burgers
        </span>
        . Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
