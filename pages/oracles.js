/** @jsx jsx */
import { jsx, Heading, Box, Container } from 'theme-ui';
import SingleLayout from '@layouts/SingleLayout.js';

const Page = () => {
  return (
    <SingleLayout>
      <Container>
        <Box sx={{ height: 8 }}>
          <Heading variant="largeHeading">Oracles</Heading>
        </Box>
      </Container>
    </SingleLayout>
  );
};

export default Page;
