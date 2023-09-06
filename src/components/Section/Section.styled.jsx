import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;

export const SectionWrapper = styled.section`
  margin-top: ${({ title }) => {
    if (title.toLowerCase() === 'statistics') return '20px';
  }};
`;
