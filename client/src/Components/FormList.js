import React from 'react'
import {Card,Icon} from 'semantic-ui-react'
export default function FormList(props) {
    const {users} = props
    console.log(users)
    return (
        <div style = {{display:'flex',flexDirection:'row'}}>
            {users.map((item,index) =>(
                <Card key = {index} >
                    <Card.Content header={item.name} />
                    <Card.Content description={item.technique} />
                    <Card.Content extra>
                    <Icon name='user' />
                    {item.course}
                    </Card.Content>
                </Card>
            ))}
        </div>
    )
}


