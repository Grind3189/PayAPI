import Culture from "@components/about/Culture";
import Hero from "@components/about/Hero";
import People from "@components/about/People";

import TeamMembers from "@components/about/TeamMembers";

const About = () => {
  return (
    <main className="pt-32 md:pt-40">
      <Hero />
      <People />
      <TeamMembers />
      <Culture />
    </main>
  );
};

export default About;
