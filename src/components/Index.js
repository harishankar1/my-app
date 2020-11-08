import React, { Component } from 'react';
import Childcomponent from './Childcomponent';
import Parentcomponent from './Parentcomponent';
import { Row, Col, Tree } from 'antd';
// const treeData = [
//   {
//     title: 'Fruits',
//     key: 'Fruits',
//     children: [
//       { title: 'Apple', key: 'Fruits-Apple', },
//       { title: 'Banana', key: 'Fruits-Banana',},
//       { title: 'Orange', key: 'Fruits-Orange', },
//       { title: 'Cherry', key: 'Fruits-Cherry', },
//     ],
//   },
//   {
//     title: 'Games',
//     key: 'Games',
//     children: [
//       { title: 'Cricket', key: 'Games-Cricket' },
//       { title: 'Hocky', key: 'Games-Hocky' },
//       { title: 'Badminton', key: 'Games-Badminton' },
//       { title: 'Football', key: 'Games-Football' },
//     ],
//   },
// ];
class Index extends Component {
    render() {
        
        return (
            <div className="mainDiv">
                <Row gutter={24}>
                    <Col span={12}>
                        <Parentcomponent />                        
                    </Col>
                    <Col span={12}>
                        <Childcomponent />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Index;