import Labeling from "@/Components/Wrappers/Labeling"
import Slider from "./Wrappers/Slider"
import AlbumPage from "./Ui/AlbumPage"
import {memoriesAlbum} from '@/Data/AlbumPages'
import Container from "./Wrappers/Container"


const Memories = () => {
  return (
    <div className="relative h-[100vh]">

    <Labeling label="Album"/>
    <Container>

    <Slider type="album">

    {
    memoriesAlbum.map((album, index) => (<AlbumPage key={index} type={album.type} index={index} data={album}/>))
    }

    </Slider>


    </Container>

    </div>
  )
}

export default Memories