import React from "react";
import "./News.css";
import Card from "../NewsCards/NewsCard";
import AE41 from "../../img/41AE.webp";
import MM93 from "../../img/MM93.webp";
import JM89 from "../../img/jorgemartin.webp";

export default function News(props) {
    return(
        <div id="news-page">
            <h1>LATEST NEWS</h1>
            <div className="card-container">
                <Card name="Marc Marquez" img={MM93}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, libero eaque mollitia assumenda aliquam nostrum cupiditate eveniet omnis tempore reprehenderit, ipsam provident dolor distinctio, quibusdam necessitatibus. Harum ratione velit consequuntur.
                    </p>
                </Card>
                <Card name="Aleix Espargaro" img={AE41}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In expedita quibusdam, suscipit possimus, distinctio, atque sequi consequuntur rerum fuga incidunt nulla sed tempore. Est, tenetur dicta.
                    </p>
                </Card>
                <Card name="Jorge Martin" img={JM89}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam quaerat sit asperiores. Autem esse nulla totam, sapiente, dolores perspiciatis quam deleniti sunt, officia quo nihil voluptas.
                    </p>
                </Card>
                <Card name="Lorem Ipsum" img={JM89}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam quaerat sit asperiores. Autem esse nulla totam, sapiente, dolores perspiciatis quam deleniti sunt, officia quo nihil voluptas.
                    </p>
                </Card>
                <Card name="Lorem Ipsum" img={JM89}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam quaerat sit asperiores. Autem esse nulla totam, sapiente, dolores perspiciatis quam deleniti sunt, officia quo nihil voluptas.
                    </p>
                </Card>
                <Card name="Lorem Ipsum" img={JM89}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam quaerat sit asperiores. Autem esse nulla totam, sapiente, dolores perspiciatis quam deleniti sunt, officia quo nihil voluptas.
                    </p>
                </Card>
                <Card name="Lorem Ipsum" img={JM89}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam quaerat sit asperiores. Autem esse nulla totam, sapiente, dolores perspiciatis quam deleniti sunt, officia quo nihil voluptas.
                    </p>
                </Card>
                <Card name="Lorem Ipsum" img={JM89}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam quaerat sit asperiores. Autem esse nulla totam, sapiente, dolores perspiciatis quam deleniti sunt, officia quo nihil voluptas.
                    </p>
                </Card>
                <Card name="Lorem Ipsum" img={JM89}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam quaerat sit asperiores. Autem esse nulla totam, sapiente, dolores perspiciatis quam deleniti sunt, officia quo nihil voluptas.
                    </p>
                </Card>
                
            </div>
        </div>
    )
}