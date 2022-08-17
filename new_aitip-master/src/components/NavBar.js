import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    Button,
    ButtonGroup,
    Card,
    Collapse,
    Container,
    Dropdown,
    DropdownButton,
    Image,
    Navbar,
    Row
} from "react-bootstrap";
import {useNavigate} from "react-router";
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css'


const NavBar = observer(() => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);


    return (
        <Navbar style={{flexDirection: "column", backgroundColor: "#eeeeee"}}>
            <Container>
                <div className="first">
                    <img src={"../asets/menu/eye.png"} className="eye"/>
                    <div className="text-1">Версия для слабовидящих</div>
                    <div className="d7">
                        <form className="searchform">
                            <img className="searchform__img" src={"../asets/menu/search.png"}/>
                            <input className="searchform__inp" placeholder="Поиск по сайту"/>
                            <button className="searchform__btn">
                                Найти
                            </button>
                        </form>
                    </div>
                    <div style={{justifyContent: "right", width: "100px", margin: "auto"}}>
                        <img className="media" src={"../asets/menu/vk.png"}/>
                        <img className="media" src={"../asets/menu/youtube.png"}/>
                    </div>
                </div>
            </Container>
            <Row>
                <>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        style={{backgroundColor: "#365DC1"}}
                    >
                        Абитуриенту
                    </Button>
                    <div style={{minHeight: '150px'}}>
                        <Collapse in={open} dimension="width">
                            <div id="example-collapse-text">
                                <Card style={{width: '400px'}}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </>
                <>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        style={{backgroundColor: "#365DC1"}}
                    >
                        Абитуриенту
                    </Button>
                    <div style={{minHeight: '150px'}}>
                        <Collapse in={open} dimension="width">
                            <div id="example-collapse-text">
                                <Card style={{width: '400px'}}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </>
                <>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        style={{backgroundColor: "#365DC1"}}
                    >
                        Абитуриенту
                    </Button>
                    <div style={{minHeight: '150px'}}>
                        <Collapse in={open} dimension="width">
                            <div id="example-collapse-text">
                                <Card style={{width: '400px'}}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </>
                <>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        style={{backgroundColor: "#365DC1"}}
                    >
                        Абитуриенту
                    </Button>
                    <div style={{minHeight: '150px'}}>
                        <Collapse in={open} dimension="width">
                            <div id="example-collapse-text">
                                <Card style={{width: '400px'}}>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </>
            </Row>
        </Navbar>
    );
})

export default NavBar;
