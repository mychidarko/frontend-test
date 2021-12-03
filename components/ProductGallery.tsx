import { useForm } from "../utils/form";
import { Select } from "../utils/form/Input";
import Skeleton from "react-loading-skeleton";
import { showOnly } from "../utils/app";
import { Button, Container, ProductContainer, ProductImage } from "../styles/components/productGallery.style";
import { StoreData } from "../@types/data";

const ProductGallery: React.FC<{storeData: StoreData}> = ({ storeData }) => {
    const productForm = useForm({
        fields: {
            sort: "",
            categories: "",
        },
        optional: ["sort", "categories"],
    });

    const { inputState, errors, onChange, onBlur } = productForm;

    return (
        <Container>
            <div className="filters">
                <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    value={inputState.sort}
                    error={errors.sort}
                    name="sort"
                    options={["Sort by", ...(storeData?.sort_by || [])]}
                />
                <Select
                    onChange={onChange}
                    onBlur={onBlur}
                    value={inputState.categories}
                    error={errors.categories}
                    name="categories"
                    options={["Categories", ...(storeData?.categories || [])]}
                />
            </div>
            <div className="products">
                {storeData?.products ? (
                    storeData?.products?.map((product: any, index: number) => (
                        <ProductContainer key={index}>
                            <div className="container">
                                <ProductImage src={product.product_image} />
                            </div>
                            <h5>{showOnly(35, product.name)}</h5>
                            <p>
                                Ksh{" "}
                                {new Intl.NumberFormat("en", {}).format(
                                    product.price
                                )}
                            </p>
                            <div className="actions">
                                <Button>Buy now</Button>
                                <Button>Add to cart</Button>
                            </div>
                        </ProductContainer>
                    ))
                ) : (
                    <Skeleton />
                )}
            </div>
        </Container>
    );
};

export default ProductGallery;
