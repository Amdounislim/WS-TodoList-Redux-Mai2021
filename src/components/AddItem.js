import React, { useState } from 'react'
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addTask } from '../JS/actions/actionTask'


const AddItem = () => {

    const [myInput, setMyInput] = useState("")

    const dispatch = useDispatch()


    const add = (e) => {
        e.preventDefault();
        if (myInput) {
            dispatch(addTask({ text: myInput, status: false, id: Date.now() }))
            setMyInput("")
        }
        else { alert('leeeeeeeeeeeeeeeee') }
    }


    return (
        <Card bg="primary">
            <Card.Body>
                <h1 className={"text-white"}>To-Do-App !</h1>

                <Form onSubmit={add}>
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setMyInput(e.target.value)}
                                value={myInput}
                            />
                            <Button variant="success" onClick={add}>
                                +
                            </Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default AddItem
