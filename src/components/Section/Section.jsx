import { SectionWrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper title={title}>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};
