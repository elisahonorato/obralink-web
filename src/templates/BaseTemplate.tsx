const BaseTemplate = (props: {
  nav: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full">
      <div className="">
        <header className="mt-10 py-10">
          <div className="flex justify-between">
            <nav>
              <ul className="font-heading">
                {props.nav}
              </ul>
            </nav>
          </div>
        </header>

        <main className="px-10 sm:px-20">{props.children}</main>

      </div>
    </div>
  );
};

export { BaseTemplate };
