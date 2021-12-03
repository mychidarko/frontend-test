import ShopLogo from "./ShopLogo";
import Skeleton from "react-loading-skeleton";
import { Container, TextContainer } from "../styles/components/shopInfo.style";
import { StoreData } from "../@types/data";

const ShopInfo: React.FC<{storeData: StoreData}> = ({ storeData }) => {
    return (
        <Container>
            <ShopLogo storeData={storeData} />
            <TextContainer>
                {!storeData ? (
                    <Skeleton width="100vw" height="20vh" />
                ) : (
                    <>
                        <h2>{storeData.hustle.name}</h2>
                        <p>
                            Home of the best shoes in town. Get free delivery
                            for orders above KES 5,000 countrywide.
                        </p>
                        <div className="links">
                            <a href="#">Facebook</a> / <a href="#">Instagram</a>{" "}
                            / <a href="#">Youtube</a>
                        </div>
                    </>
                )}
            </TextContainer>
        </Container>
    );
};

export default ShopInfo;
