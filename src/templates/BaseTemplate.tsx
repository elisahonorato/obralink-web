const BaseTemplate = (props: {
  nav: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto px-2 sm:px-20">
        <header className="mt-10 py-10">
          <div className="flex justify-between">
            <nav>
              <ul className="font-heading">
                {props.nav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

      </div>
    </div>
  );
};

export { BaseTemplate };
