import { useState } from "react"
import type { Project } from "../types"


const Gallery = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading,setLoading] = useState(true)
  return (
    <div>

    </div>
  )
}

export default Gallery