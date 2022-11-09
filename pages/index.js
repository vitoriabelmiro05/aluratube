import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset__index";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/timeline";

function HomePage() {
    const estilohomepage = { //backgroundColor: "red" 
    };

    //console.log(config.playlists);

    return (

        <>
        <CSSReset/>
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            <Menu/>
            <Header />
            
            <Timeline playlists={config.playlists} >
            </Timeline>

        </div>
        
        </>
        
    )
}

export default HomePage

/*function Menu() {
    return (
        <div> Menu </div>
    )
}*/

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50px; //borda redonda

  }

  .user-info {
    margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
  }


  `;

function Header() {
    return (

        <StyledHeader>

            {/*<img src="banner"/>*/}

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

function Timeline(propriedade) {
    console.log("dentro do componente", propriedade.playlists);
    const playlistsNames = Object.keys(propriedade.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map(function (playlistsNames) { //map é um tipo de for

                const videos = propriedade.playlists[playlistsNames];
                return (
                    <section>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {
                                videos.map((video) => {

                                    return (
                
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                
                                    )
                                })
                            }
                        </div>
                    </section>
                )

            })}

</StyledTimeline>
    )
}
