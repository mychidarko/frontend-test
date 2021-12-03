import Skeleton from "react-loading-skeleton";
import { StoreData } from "../@types/data";
import { Logo, LogoContainer } from "../styles/components/shopLogo.style";

const ShopLogo: React.FC<{storeData: StoreData}> = ({ storeData }) => {
    return (
        <LogoContainer>
            {storeData ? (
                <Logo src={storeData.hustle?.shop_logo} />
            ) : (
                <Skeleton
                    height="100%"
                    width="100%"
                    circle={true}
                    style={{ border: "3px solid #fff" }}
                />
            )}
        </LogoContainer>
    );
};

export default ShopLogo;
