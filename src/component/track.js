const Track = ({items, chooseTrack, current, play}) => {
    return (
        <div className="grid gap-[1px] bg-three">
        {items.map((item, i) => 
            <div key={item.id} onClick={() => chooseTrack(i)}
            className={`flex gap-5 cursor-default py-2 px-5 bg-two ${current === item.previewURL && 'bg-three'}`}>
                <div className="aspect-square w-9 rounded relative overflow-hidden bg-three">
                    <div className={`${current === item.previewURL && play ? 'grid' : 'hidden'} place-items-center absolute inset-0 backdrop-brightness-50`}>
                        <span class="material-icons-round">graphic_eq</span>
                    </div>
                    <img src={`https://api.napster.com/imageserver/v2/albums/${item.albumId}/images/200x200.jpg`} alt='Album' />
                </div>
                <div className='grid sm:flex items-center gap-x-5 text-sm sm:text-base w-full'>
                    <h1 className='font-medium leading-none truncate grow'>{item.name}</h1>
                    <h1 className='text-four leading-none truncate -mb-0.5'>{item.artistName} &bull; {item.albumName}</h1>
                </div>
            </div>
        )}
        </div>
    );
}
export default Track