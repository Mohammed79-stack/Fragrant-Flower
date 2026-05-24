import { ReactNode } from "react"

const Container = ({children, additions}:{children:ReactNode, additions?:string}) => {
  return (
    <div className={`container mx-auto h-full ${additions}`}>{children}</div>
  )
}

export default Container