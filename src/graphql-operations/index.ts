import { gql } from "graphql-tag";

export const NOW_PLAYING = gql`
  query NowPlaying {
    nowPlaying {
      id
      title
      overview
      posterPath
    }
  }
`;
