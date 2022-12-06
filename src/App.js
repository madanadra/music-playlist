import {useEffect, useState, useRef} from 'react'
import Track from './component/track'
import Header from './component/header'

function App() {
  const url = 'https://api.napster.com/v2.2/'
  const apikey = '?apikey=NTY1NzA0YzEtMGJhZS00NjAxLTg5Y2ItNDU1ZTY3ZDY5NWUz&'
  const [load, setLoad] = useState(false)
  const [items, setItems] = useState()
  const [offset, setOffset] = useState(0)
  const [current, setCurrent] = useState()
  const [play, setPlay] = useState(false)
  const [num, setNum] = useState(0)
  const audioEl = useRef()

  useEffect(() => {
    loadItems();
  }, [offset]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadItems = async () => {
      setLoad(true);
      const data = await fetch(`${url}playlists/featured${apikey}limit=1&offset=${offset}`)
      .then(res => res.json()).then(res => res.playlists[0]);
      const track = await fetch(`${url}playlists/${data.id}/tracks${apikey}limit=100`)
      .then(res => res.json()).then(res => res.tracks);
      setItems({playlist: data, track: track.filter(item => item.previewURL)});
      setLoad(false);
      console.log({playlist: data, track: track});
  } 

  useEffect(() => {
    current && audioEl.current.play()
  }, [current]);

  const chooseTrack = (i) => {
    const number = num === items.track.length-1 ? 0 : i
    setCurrent(items.track[number].previewURL);
    setNum(number);
  }

  const playPlaylist = () => {
    current 
    ? audioEl.current.play()
    : chooseTrack(0)
  }

  const changePlaylist = () => {
    setOffset(offset+1);
    setCurrent();
  }
  
  return (
    <div className='font-main bg-two text-one min-h-screen py-5'>
      <div className={`${!load && 'hidden'} w-full h-1 fixed top-0 bg-four`}><div className='w-2/3 h-full bg-one loading' /></div>
      <audio src={current} ref={audioEl} onEnded={() => chooseTrack(num+1)}
      onPlay={() => setPlay(true)} onPause={() => setPlay(false)} />
      {items &&
        <div className="max-w-7xl mx-auto">
          <Header playlist={items.playlist} total={items.track.length} audioEl={audioEl} 
          play={play} playPlaylist={playPlaylist} changePlaylist={changePlaylist} load={load} />
          <Track items={items.track} chooseTrack={chooseTrack} current={current} play={play} />
        </div>
      }
    </div>
  );
}

export default App;
