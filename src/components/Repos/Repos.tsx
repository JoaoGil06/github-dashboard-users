import { useGithubContext } from "../../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "../Charts";
import { Wrapper } from "./styles/repos.styledcomponents";
import ForksTotals from "./types/ForksTotals.type";
import LanguageTotals from "./types/LanguageTotals.type";
import StarsTotals from "./types/StarsTotals.type";

const Repos = () => {
  const { repos } = useGithubContext();

  const languageTotals = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: (total[language].value as number) + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {} as Record<string, LanguageTotals>);

  const mostUsed = Object.values(languageTotals)
    .sort((a, b) => (b.value as number) - (a.value as number))
    .slice(0, 5);

  const mostPopular = Object.values(languageTotals)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => ({ ...item, value: item.stars }))
    .slice(0, 5);

  const { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {} as Record<string, StarsTotals>,
      forks: {} as Record<string, ForksTotals>,
    }
  );

  const mostPopularStars = Object.values(stars).slice(-5).reverse();
  const mostForked = Object.values(forks).slice(-5).reverse();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column3D data={mostPopularStars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={mostForked} />
      </Wrapper>
    </section>
  );
};

export default Repos;
