import { useAppSelector } from "@/lib/store/hooks";
import { useSelector } from "react-redux";

export default function Haha() {
  const {teacherName, teacherPassword} = useAppSelector((store) => store.teacher)
  return <h1>haha hehe huhu</h1>;
}
