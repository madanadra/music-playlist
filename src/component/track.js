const Track = ({items, chooseTrack, current, play}) => {
    return (
        <div className="grid sm:gap-[1px] bg-three">
        {items.map((item, i) => 
            <div key={item.id} onClick={() => chooseTrack(i)}
            className={`flex gap-4 sm:gap-5 cursor-default py-2 px-5 ${current === item.previewURL ? 'bg-three' : 'bg-two'}`}>
                <div className="aspect-square w-11 sm:w-9 rounded relative overflow-hidden bg-three">
                    <div className={`${current === item.previewURL && play ? 'grid' : 'hidden'} place-items-center absolute inset-0 backdrop-brightness-50`}>
                        <span className="material-icons-round">graphic_eq</span>
                    </div>
                    <img src={`https://api.napster.com/imageserver/v2/albums/${item.albumId}/images/200x200.jpg`} alt='Album' />
                </div>
                <div className='grid sm:grid-cols-3 items-center gap-x-5 text-sm sm:text-base w-full'>
                    <h1 className='font-medium leading-none truncate grow'>{item.name}</h1>
                    <h1 className='sm:hidden text-four leading-none truncate -mb-0.5'>{item.artistName} &bull; {item.albumName}</h1>
                    <h1 className='hidden sm:block text-four leading-none truncate -mb-0.5'>{item.artistName}</h1>
                    <h1 className='hidden sm:block text-four leading-none truncate -mb-0.5'>{item.albumName}</h1>
                </div>
            </div>
        )}
        </div>
    );
}
export default Track