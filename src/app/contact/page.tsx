import { useAppDispatch } from "@/lib/store/hooks";
import { setAddress, setName } from "@/lib/store/userSlice";

export default function Contact() {
  let address = "Pasikot";
  let name = "Sonam";
  const dispatch = useAppDispatch();
  dispatch(setName(name));
  dispatch(setAddress(address));
  return <h1>Contact Page</h1>;
}
