import FlowerButton from "../Ui/FlowerButton"

const LinksList = ({dataLink}:{dataLink:string[]}) => {

  return (
        <div className="text-2xl flex items-center gap-15">

        {dataLink.map((el) => <FlowerButton key={el} title={el}/>)}

        </div>
  )

}

export default LinksList