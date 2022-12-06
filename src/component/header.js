const Header = ({playlist, total, audioEl, play, playPlaylist, changePlaylist, load}) => {
    return (
        <div className="grid place-items-center text-center sm:flex sm:text-left p-5 gap-x-11 gap-y-5 mb-3">
            <img src={playlist.images[0].url} alt='Playlist' 
            className="h-32 sm:h-60 aspect-square rounded bg-three" />
            <div className="flex flex-col items-center sm:grid content-center gap-3">
                <h1 className="font-semibold text-2xl sm:text-3xl leading-none">{playlist.name}</h1>
                <h1 className="font-medium text-xs sm:text-sm leading-none text-four">{playlist.favoriteCount} suka &bull; {total} lagu</h1>
                <h1 className="text-sm sm:text-base leading-none text-four">{playlist.description}</h1>
                <div className="flex items-center gap-3.5 mt-1">
                    <div onClick={() => play ? audioEl.current.pause() : playPlaylist()}
                    className={`rounded flex items-center ${play ? 'bg-three text-four' : 'bg-one text-two'} font-semibold cursor-pointer px-2`}>
                        <span class="material-icons-round text-2xl -ml-1.5 -mt-0.5 mr-1">{play ? 'pause' : 'play_arrow'}</span>
                        {play ? 'Pause' : 'Play'}
                    </div>
                    <div onClick={() => !load && changePlaylist()}
                    className={`rounded flex items-center bg-three text-four font-semibold cursor-pointer px-2`}>
                        <span class="material-icons-round text-xl -ml-1 -mt-0.5 mr-1 py-0.5">refresh</span>
                        Change 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header