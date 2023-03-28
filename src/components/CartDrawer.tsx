import { ArrowRightOutlined } from '@ant-design/icons'
import { Avatar, Button, Drawer, Layout, List } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCartAction } from '../action'
import { infoNotification } from '../utils'
import { Product } from './types'

interface IProps {
    isDrawerOpen: boolean,
    onDrawerClose: () => void,
    setIsDrawerOpen: (value: React.SetStateAction<boolean>) => void,
    cartItems: Product[]
}
const contentStyle: React.CSSProperties = {
    minHeight: 360,
    backgroundColor: 'white'
};

const footerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderTop: '2px solid lightBlue'

};

const CartDrawer = ({ isDrawerOpen, onDrawerClose, setIsDrawerOpen, cartItems }: IProps) => {

    const dispatch = useDispatch();

    const removeFromCart = (id: number) => {
        dispatch(removeFromCartAction(id))
        infoNotification('Removed Item from Cart')
    }
    const totalPrice = cartItems.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    return (
        <Drawer
            title="Cart"
            placement="right"
            closable={true}
            onClose={onDrawerClose}
            open={isDrawerOpen}
        >
            <Layout>
                <Content style={contentStyle}>

                    <List
                        itemLayout="horizontal"
                        dataSource={cartItems}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.images[0]} />}
                                    title={item.title}
                                    description={`$${item.price}`}
                                />
                                <Button danger onClick={() => removeFromCart(item.id)}>Remove</Button>
                            </List.Item>
                        )}
                    />
                </Content>

                <Footer style={footerStyle}>
                    <h3>Total : ${totalPrice}</h3>
                    <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
                    <Button type='primary' icon={<ArrowRightOutlined />}>Pay</Button>
                </Footer>
            </Layout>

        </Drawer>
    )
}

export default CartDrawer