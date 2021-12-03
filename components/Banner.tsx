import { StoreData } from "../@types/data";
import { BannerImg } from "../styles/components/banner.style";
import Skeleton from "react-loading-skeleton";

export default function Banner({ storeData }: { storeData: StoreData}) {
    return storeData?.hustle ? (
        <BannerImg src={storeData.hustle?.shop_banner} alt="" />
    ) : <Skeleton height="30vh" />;
}
