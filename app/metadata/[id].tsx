import { useLocalSearchParams } from "expo-router"
import FileB from "../../components/FileB/FileB"

const DyMeta = () => {
  const { id } = useLocalSearchParams()

  return <FileB id={id} />
}

export default DyMeta
