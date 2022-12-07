const Header = ({playlist, total, playPlaylist, play, changePlaylist}) => {
    return (
        <div className="flex flex-col sm:flex-row items-center p-5 gap-x-11 gap-y-5 sm:mb-6">
            <img src={playlist.images[0].url} alt='Playlist' 
            className="h-32 sm:h-60 aspect-square rounded bg-three" />
            <div className="grid text-center sm:text-left gap-3">
                <h1 className="font-semibold text-2xl sm:text-3xl leading-tight">{playlist.name}</h1>
                <h1 className="font-medium text-xs sm:text-sm leading-tight text-four">{playlist.favoriteCount} suka &bull; {total} lagu</h1>
                <h1 className="text-sm sm:text-base leading-tight text-four">{playlist.description}</h1>
                <div className="flex items-center justify-center sm:justify-start gap-3.5 mt-1">
                    <div onClick={() => playPlaylist()}
                    className={`rounded flex items-center ${play ? 'bg-three text-four' : 'bg-one text-two'} font-semibold cursor-pointer px-2`}>
                        <span className="material-icons-round text-2xl -ml-1.5 -mt-0.5 mr-1">{play ? 'pause' : 'play_arrow'}</span>
                        {play ? 'Pause' : 'Play'}
                    </div>
                    <div onClick={() => changePlaylist()}
                    className={`rounded flex items-center bg-three text-four font-semibold cursor-pointer px-2`}>
                        <span className="material-icons-round text-xl -ml-1 -mt-0.5 mr-1 py-0.5">refresh</span>
                        Change 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header