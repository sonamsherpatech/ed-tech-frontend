import { useAppSelector } from "@/lib/store/hooks";
import { useSelector } from "react-redux";

export default function About() {

  //userSlice --> name, address ma j baseko xa tyo chayeko xa
  const {name, address} = useAppSelector((store) => store.user)
  return <h1>About Page</h1>;
}
