import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  display: flex;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 6px;
  box-shadow: 0px 0px 5px 2px #e8e8e8;
`;

const RightComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: "5px 0px 0 -25px";
`;

const ArticleText = styled(Box)``;
const News = ({ article }) => {
  return (
    <Container>
      <Box>
        <img
          src={article.url}
          alt="news image"
          style={{
            height: "268px",
            width: "320px",
            borderRadius: "4px",
            margin: "2px",
            overflow: "hidden",
          }}
        />
      </Box>
      <RightComponent style={{ margin: "0 20px" }}>
        <Typography
          style={{ fontSize: "22px", color: "#44444d", lineHeight: "27px" }}
        >
          {article.title}
        </Typography>
        <Typography
          style={{
            marginTop: "10px",
            color: "#808290",
            fontSize: "12px",
            lineHeight: "22px",
          }}
        >
          <b style={{color: '#44444d'}}>short </b>by {article.author}
        </Typography>

        <Typography
          style={{
            lineHeight: "22px",
            color: "#44444d",
            marginTop: "15px",
            fontFamily: "Roboto,sans-serif",
            fontWeight: "300",
          }}
        >
          {article.description}
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            marginTop: "auto",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          read more at{" "}
          <a
            href={article.link}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#44444d",
              fontWeight: "900",
            }}
          >
            {article.publisher}
          </a>
        </Typography>
      </RightComponent>
    </Container>
  );
};

export default News;
