type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-extrabold capitalize mb-8 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
