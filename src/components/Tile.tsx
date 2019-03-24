import React from "react";
import styled from "styled-components";
import { HillChart } from "../constants/models";
import { Link } from "react-router-dom";

const TileBase = styled.div`
  background: #ccc;
  height: 100px;
  padding: 24px;
  display: flex;
  align-items: flex-end;
  border-radius: 5px;
`;

interface TileProps {
  index: number;
  hill: HillChart;
  hillId: number;
}
export const Tile = (props: TileProps) => {
  return (
    <Link to={"/hills/" + props.hill.id}>
      <TileBase key={props.index}>
        <h3>{props.hill.name || "New hill"}</h3>
      </TileBase>
    </Link>
  );
};

export default TileBase;