import React from "react";
import store from "./store";
import { Provider } from "react-redux";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import {Layout, Menu} from 'antd'
import 'antd/dist/antd.css';
import './index.css';
import Index from "./components/Index";
const { Header, Content, Footer } = Layout;
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>       
         <Layout>
         <Header className="header">
            <div className="logo" >Logo</div>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <div className="contentdata">
              <Content>
                <Index />
              </Content>
            </div>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>

        </Provider>
         
    );
  }
}

export default App;
