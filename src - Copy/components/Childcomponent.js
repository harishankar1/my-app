import React, { Component } from 'react';
import { Card } from 'antd';

class Childcomponent extends Component {
    render() {
        return (
            <Card style={{ width: 600, borderRadius: 10 }}>
                Child Component
            </Card>
        );
    }
}

export default Childcomponent;