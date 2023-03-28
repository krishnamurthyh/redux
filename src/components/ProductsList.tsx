import { Button, Card, Col, Layout, Modal, Row } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, getProductsAction } from '../action';
import { RootState } from '../reducers/rootReducer';
import { Product } from './types';
import { getProducts } from './service';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import CartDrawer from './CartDrawer';
import { infoNotification } from '../utils';


const ProductsList = () => {
    const { products, cart } = useSelector((state: RootState) => state)
    const [isProductView, setIsProductView] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product>()
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        setIsLoading(true)
        const fields = await getProducts()
        fields && dispatch(getProductsAction(fields))
        setIsLoading(false)
    }
    const handleProductClick = (p: Product) => {
        setIsProductView(true)
        setSelectedProduct(p)
        console.log(p)
    }
    const onDrawerClose = () => {
        setIsDrawerOpen(false)
    }
    const addToCart = () => {
        selectedProduct && dispatch(addToCartAction(selectedProduct))
        setIsProductView(false)
        infoNotification('Added item to Cart')
    }
    const contentStyle: React.CSSProperties = {
        marginLeft: '15px',
        marginRight: '15px',
    };

    return (
        <>
            <Button loading={isLoading} onClick={fetchProducts}>List Products</Button>
            <Button type='primary' onClick={() => setIsDrawerOpen(true)} icon={<ShoppingCartOutlined />}>View Cart<span style={{ fontSize: '9px', verticalAlign: 'top' }}> {`${cart?.length}`}</span></Button>

            <Modal
                open={isProductView}
                onOk={addToCart}
                onCancel={() => setIsProductView(false)}
                okText={'Add to cart'}
            >
                <Card
                    cover={<img alt={selectedProduct?.title} src={selectedProduct?.images[0]} />}
                >
                    <h3>{selectedProduct?.title}</h3>
                    <h5>{`$${selectedProduct?.price}`}</h5>
                    <p>{selectedProduct?.description}</p>
                </Card>
            </Modal>

            <Layout>
                <Content style={contentStyle}>
                    <Row gutter={[16, 16]}>
                        {products.map((product) => (
                            <Col key={product.id} xs={24} sm={12} md={8} lg={6} onClick={() => handleProductClick(product)}>
                                <Card
                                    hoverable
                                    cover={<img alt={product.title} src={product.images[0]} />}
                                >
                                    <Card.Meta title={product.title} description={`$${product.price}`} />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Content>
            </Layout>
            <CartDrawer
                isDrawerOpen={isDrawerOpen}
                onDrawerClose={onDrawerClose}
                setIsDrawerOpen={setIsDrawerOpen}
                cartItems={cart}
            />

        </>
    );
};

export default ProductsList;
