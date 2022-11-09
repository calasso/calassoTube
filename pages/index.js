import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
// import { StyledFavorites } from "../src/components/Favorites";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };

  // console.log(config.playlists);
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        {/* Prop Drilling */}
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>Conteúdo</Timeline>
        {/* <Favorites favorites={config.favorites}>Favoritos</Favorites> */}
      </div>
    </>
  );
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline({ searchValue, ...propriedades }) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        //console.log(playlistName);
        //console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>
                  )
                })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

// function Favorites(prop) {
//   console.log("Dentro do componente", prop.favorites);
//   const favoriteNames = Object.keys(prop.favorites);
//   return (
//     <StyledFavorites>
//       {favoriteNames.map((favoritesNames) => {
//         const fav = prop.favorites[favoritesNames];
//         //console.log(favoritesNames);
//         console.log(fav);
//         return (
//           <section>
//             <h2>{favoritesNames}</h2>
//             <div>
//               {fav.map((fav) => {
//                 return (
//                   <a href={fav.url}>
//                     <img src={fav.thumb} />
//                     <span>
//                       {fav.perfil_name}
//                     </span>
//                   </a>
//                 )
//               })}
//             </div>
//           </section>
//         )
//       })}
//     </StyledFavorites>
//   )
// }
