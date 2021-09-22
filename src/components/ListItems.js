import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ListGroup, Button } from "react-bootstrap"
import { deleteTask } from '../JS/actions/actionTask'


const ListItems = () => {

    const list = useSelector(state => state.reducerTask.list)
    const dispatch = useDispatch()

    return (
        <ListGroup>
            {list.map((item, key) => (
                <ListGroup.Item
                    key={key}
                    style={{ display: "flex", alignItems: "flex-end" }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-around",
                            width: "30%",
                        }}
                    >
                        <Button
                            variant="outline-secondary"

                        >
                            isDone
                        </Button>
                        <Button >Edit</Button>
                        <Button
                            variant="danger"
                            onClick={() => dispatch(deleteTask(item.id))}
                        >
                            Delete
                        </Button>
                    </div>
                    <p style={{ margin: "0px" }} >
                        {item.text}
                    </p>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default ListItems
