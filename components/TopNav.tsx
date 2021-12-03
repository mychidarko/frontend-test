import { Search, ShoppingBag } from "react-feather";
import { CartLabel, Container, Nav, SearchBox } from "../styles/components/topnav.style";

export default function TopNav() {
    return (
        <Nav>
            <Container>
                <Search />
                <SearchBox placeholder="Search for a product..." />
            </Container>
            <Container>
                <CartLabel>My Cart</CartLabel>
                <ShoppingBag />
            </Container>
        </Nav>
    );
}
