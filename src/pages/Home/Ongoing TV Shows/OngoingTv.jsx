import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper";
import Carousal from "../../../components/Carousal/Carousal";
import useFetch from "../../../hooks/useFetch";
import { Heading, HeadingContainer } from "../Trending/styles/Trending.styled";

const OngoingTv = () => {
  const prevMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
    .toISOString()
    .split("T")[0];
  const { data, loading } = useFetch(
    `/discover/tv?first_air_date.gte=${prevMonth}&include_adult=true&include_null_first_air_dates=true&language=en-US&sort_by=vote_count.desc`
  );
  return (
    <SectionWrapper>
      <HeadingContainer>
        <Heading>Ongoing TV Shows</Heading>
      </HeadingContainer>
      <Carousal data={data?.results} loading={loading} current_media="tv" />
    </SectionWrapper>
  );
};

export default OngoingTv;
