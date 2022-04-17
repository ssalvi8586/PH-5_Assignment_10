import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {



  const packages = [
    {
      id: 1,
      title: "Psychological Counseling",
      price: 100,
      description: "Mental Health counseling",
      imageUrl: "https://i.ibb.co/Qkf1J78/a.png",
    },
    {
      id: 2,
      title: "Corporate sevice",
      price: 150,
      description: "Corporate Grooming and success",
      imageUrl: "https://i.ibb.co/8jBQFbN/b.png",
    },
    {
      id: 3,
      title: "Behaviour Development",
      price: 200,
      description: "Get your best",
      imageUrl: "https://i.ibb.co/NsfmyHN/c.png",
    },
  ];
  return (
    <div>
      <Container className="my-5">
        <Row xs={1} md={2} lg={3} className="g-2">
          {
            packages.map(service => <Col><Service
              key={service.id}
              service={service}
            >
            </Service></Col>)
          }

        </Row>
      </Container>
    </div >
  );
};

export default Services;
