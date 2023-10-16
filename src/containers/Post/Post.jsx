import React from "react";
import Block from "../../components/Block/Block";
import Header from "../../components/Title/Header";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import Text from "../../components/Text/Text";
import Container from "../../components/Container/Container";

function Post({ data }) {
  return (
    <Container>
      {data.map(({ header, options, text }, index) => (
        <Block key={index}>
          <Header title={header} />
          <List>
            {options.map((option) => (
              <ListItem key={option} option={option} />
            ))}
          </List>
          <Text text={text} />
        </Block>
      ))}
    </Container>
  );
}

export default Post;
