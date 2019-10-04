import React from 'react';
import Layout from './layout'
import Header from './header'
import Content from './content';
import Footer from './footer';
import Aside from './aside'
const example: React.FunctionComponent = () => {
    return (
        <div>
            <h1>一</h1>
            <Layout className="md" style={{height: '500px'}}>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
            <h1>二</h1>
            <Layout className="md" style={{height: '500px'}}>
                <Header>header</Header>
                <Layout>
                    <Aside>aside</Aside>
                    <Content>content</Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
            <h1>三</h1>
            <Layout style={{height: '500px'}}>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Aside>aside</Aside>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <h1>四</h1>
            <Layout style={{height: '500px'}}>
                <Aside>aside</Aside>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default example;
