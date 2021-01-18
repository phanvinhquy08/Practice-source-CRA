import React, { useEffect, useState } from "react";
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

type Props = {} & MenuProps;

type MenuItemProps = {
    path: string,
    icon: React.ReactNode,
    name: string,
};

const menuItems: MenuItemProps[] = [
    {
        path: '/',
        icon: <HomeOutlined/>,
        name: 'Home'
    },
    {
        path: '/user',
        icon: <UserOutlined/>,
        name: 'User'
    }
];

const MenuBar: React.FC<Props> = ({ ...rest }) => {
    const location = useLocation();

    const getKey = (): string[] => {
        const path = location.pathname.split('/')[1];
        return path ? [`/${path}`] : ['/'];
    }

    const [activeKey, setActiveKey] = useState<string[]>(getKey());

    useEffect(() => {
        setActiveKey(getKey());
    }, [location])

    console.log(activeKey);
    return (
        <Menu theme='dark' mode='inline' style={{ marginTop: "64px" }} defaultSelectedKeys={activeKey} {...rest}>
            {menuItems.map((item) => {
                return (
                    <Menu.Item key={item.path} icon={item.icon}>
                        <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                )
            })}
        </Menu>
    )
}
export default MenuBar;