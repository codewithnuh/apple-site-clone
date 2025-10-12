import Image from "next/image";
import { Container } from "./shared/Container";

export const Navbar = () => {
  return <header className="py-3">
    <Container >
<div>

    <div><Image src={'/logo.svg'} alt="apple logo" width={40} height={40} /></div>
</div>
    </Container>
    
  </header>;
};
