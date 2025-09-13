import { setName } from "@/lib/store/userSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const name = "sonam";
  const dispatch = useDispatch()
  dispatch(setName(name))
  return <h1>Hello World</h1>;
}
