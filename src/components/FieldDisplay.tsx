import { Button, Card, Col, Modal, Popover, Row } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFieldsAction } from '../action';
import { RootState } from '../reducers/rootReducer';
import { Products } from '../types';
import { getFields } from './service';


const ProductsList = () => {
    const products = useSelector((state: RootState) => state.fields)
    const [isProductView, setIsProductView] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Products>()
    const dispatch = useDispatch();

    const handleButtonClick = async () => {
        const fields = await getFields()
        fields && dispatch(getFieldsAction(fields))
    }
    const handleProductClick = (p: Products) => {
        setIsProductView(true)
        setSelectedProduct(p)
        console.log(p)
    }

    const productView = () => {

        const content = (
            <div>
                <h3>{selectedProduct?.title}</h3>
                <p>{selectedProduct?.description}</p>
            </div>
        )
        return (
            <Popover content={content} title="Title">
                <Button type="primary">Hover me</Button>
            </Popover>
        )
    }

    return (
        <>
            {!products.length && <Button type='primary' onClick={handleButtonClick}> Fetch Details</Button>}
            <Modal
                open={isProductView}
                onOk={() => setIsProductView(false)}
                onCancel={() => setIsProductView(false)}

            >
                <div>
                    <h3>{selectedProduct?.title}</h3>
                    <p>{selectedProduct?.description}</p>
                </div>
            </Modal>
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
        </>
    );
};

export default ProductsList;
